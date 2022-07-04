import { ref, onMounted, watch } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { isPlatform } from '@ionic/vue';
export function usePhotoGallery() {
    const takePhoto = async () => {
        const photo = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100,
        });
        const fileName = new Date().getTime() + '.jpeg';
        const savedFileImage = await savePicture(photo, fileName);
        photos.value = [savedFileImage, ...photos.value];
    };
    return {
        photos,
        takePhoto,
    };
    onMounted(loadSaved);
}
const convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
});
const savePicture = async (photo, fileName) => {
    let base64Data;
    // "hybrid" will detect mobile - iOS or Android
    if (isPlatform('hybrid')) {
        const file = await Filesystem.readFile({
            path: photo.path,
        });
        base64Data = file.data;
    }
    else {
        // Fetch the photo, read as a blob, then convert to base64 format
        const response = await fetch(photo.webPath);
        const blob = await response.blob();
        base64Data = (await convertBlobToBase64(blob));
    }
    const savedFile = await Filesystem.writeFile({
        path: fileName,
        data: base64Data,
        directory: Directory.Data,
    });
    if (isPlatform('hybrid')) {
        // Display the new image by rewriting the 'file://' path to HTTP
        // Details: https://ionicframework.com/docs/building/webview#file-protocol
        return {
            filepath: savedFile.uri,
            webviewPath: Capacitor.convertFileSrc(savedFile.uri),
        };
    }
    else {
        // Use webPath to display the new image instead of base64 since it's
        // already loaded into memory
        return {
            filepath: fileName,
            webviewPath: photo.webPath,
        };
    }
};
const PHOTO_STORAGE = 'photos';
const cachePhotos = () => {
    Storage.set({
        key: PHOTO_STORAGE,
        value: JSON.stringify(photos.value),
    });
    watch(photos, cachePhotos);
};
const loadSaved = async () => {
    const photoList = await Storage.get({ key: PHOTO_STORAGE });
    const photosInStorage = photoList.value ? JSON.parse(photoList.value) : [];
    // If running on the web...
    if (!isPlatform('hybrid')) {
        for (const photo of photosInStorage) {
            const file = await Filesystem.readFile({
                path: photo.filepath,
                directory: Directory.Data,
            });
            // Web platform only: Load the photo as base64 data
            photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
        }
    }
    photos.value = photosInStorage;
};
const photos = ref([]);
//# sourceMappingURL=usePhotoGallery.js.map