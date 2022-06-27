<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>iBuy</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-img :src="IonicBackground"></ion-img>
        </ion-content>
    </ion-page>
</template>

<script>
    import {  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg } from '@ionic/vue';
    export default {
        name: 'LoginPage', 
        components: {
            IonContent,
            IonHeader, 
            IonPage, 
            IonTitle, 
            IonToolbar,
            IonImg,
        },
        data(){
            return{
                IonicBackground: '../../public/assets/borders.png'
            }
        }
    };
</script>