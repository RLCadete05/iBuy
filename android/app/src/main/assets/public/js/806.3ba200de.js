"use strict";(self["webpackChunkiBuy"]=self["webpackChunkiBuy"]||[]).push([[806],{6806:(e,t,a)=>{a.r(t),a.d(t,{Camera:()=>o,CameraWeb:()=>i});var n=a(9895),r=a(7439);class i extends n.Uw{async getPhoto(e){return new Promise((async(t,a)=>{if(e.webUseInput||e.source===r.oK.Photos)this.fileInputExperience(e,t);else if(e.source===r.oK.Prompt){let n=document.querySelector("pwa-action-sheet");n||(n=document.createElement("pwa-action-sheet"),document.body.appendChild(n)),n.header=e.promptLabelHeader||"Photo",n.cancelable=!1,n.options=[{title:e.promptLabelPhoto||"From Photos"},{title:e.promptLabelPicture||"Take Picture"}],n.addEventListener("onSelection",(async n=>{const r=n.detail;0===r?this.fileInputExperience(e,t):this.cameraExperience(e,t,a)}))}else this.cameraExperience(e,t,a)}))}async pickImages(e){return new Promise((async e=>{this.multipleFileInputExperience(e)}))}async cameraExperience(e,t,a){if(customElements.get("pwa-camera-modal")){const o=document.createElement("pwa-camera-modal");o.facingMode=e.direction===r.GW.Front?"user":"environment",document.body.appendChild(o);try{await o.componentOnReady(),o.addEventListener("onPhoto",(async r=>{const i=r.detail;null===i?a(new n.xz("User cancelled photos app")):i instanceof Error?a(i):t(await this._getCameraPhoto(i,e)),o.dismiss(),document.body.removeChild(o)})),o.present()}catch(i){this.fileInputExperience(e,t)}}else console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/pwa-elements."),this.fileInputExperience(e,t)}fileInputExperience(e,t){let a=document.querySelector("#_capacitor-camera-input");const n=()=>{var e;null===(e=a.parentNode)||void 0===e||e.removeChild(a)};a||(a=document.createElement("input"),a.id="_capacitor-camera-input",a.type="file",a.hidden=!0,document.body.appendChild(a),a.addEventListener("change",(r=>{const i=a.files[0];let o="jpeg";if("image/png"===i.type?o="png":"image/gif"===i.type&&(o="gif"),"dataUrl"===e.resultType||"base64"===e.resultType){const a=new FileReader;a.addEventListener("load",(()=>{if("dataUrl"===e.resultType)t({dataUrl:a.result,format:o});else if("base64"===e.resultType){const e=a.result.split(",")[1];t({base64String:e,format:o})}n()})),a.readAsDataURL(i)}else t({webPath:URL.createObjectURL(i),format:o}),n()}))),a.accept="image/*",a.capture=!0,e.source===r.oK.Photos||e.source===r.oK.Prompt?a.removeAttribute("capture"):e.direction===r.GW.Front?a.capture="user":e.direction===r.GW.Rear&&(a.capture="environment"),a.click()}multipleFileInputExperience(e){let t=document.querySelector("#_capacitor-camera-input-multiple");const a=()=>{var e;null===(e=t.parentNode)||void 0===e||e.removeChild(t)};t||(t=document.createElement("input"),t.id="_capacitor-camera-input-multiple",t.type="file",t.hidden=!0,t.multiple=!0,document.body.appendChild(t),t.addEventListener("change",(n=>{const r=[];for(let e=0;e<t.files.length;e++){const a=t.files[e];let n="jpeg";"image/png"===a.type?n="png":"image/gif"===a.type&&(n="gif"),r.push({webPath:URL.createObjectURL(a),format:n})}e({photos:r}),a()}))),t.accept="image/*",t.click()}_getCameraPhoto(e,t){return new Promise(((a,n)=>{const r=new FileReader,i=e.type.split("/")[1];"uri"===t.resultType?a({webPath:URL.createObjectURL(e),format:i,saved:!1}):(r.readAsDataURL(e),r.onloadend=()=>{const e=r.result;"dataUrl"===t.resultType?a({dataUrl:e,format:i,saved:!1}):a({base64String:e.split(",")[1],format:i,saved:!1})},r.onerror=e=>{n(e)})}))}async checkPermissions(){if("undefined"===typeof navigator||!navigator.permissions)throw this.unavailable("Permissions API not available in this browser");try{const e=await window.navigator.permissions.query({name:"camera"});return{camera:e.state,photos:"granted"}}catch(e){throw this.unavailable("Camera permissions are not available in this browser")}}async requestPermissions(){throw this.unimplemented("Not implemented on web.")}}const o=new i}}]);
//# sourceMappingURL=806.3ba200de.js.map