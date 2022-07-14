<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-icon name="logo-google"></ion-icon>
        <ion-icon :scr="require('../../public/assets/Checkbox.svg')"></ion-icon>
        <ion-icon :icon="arrow - back - outline"></ion-icon>
      </ion-toolbar>
    </ion-header>
    <ion-content class="background">
      <div class="back-button">
        <ion-title>iBuy</ion-title>
        <ion-button
          router-link="/InsertItems"
          color="light"
          size="large"
          expand="block"
          fill="solid"
          class="LoginButton"
          >Entrar com o Google
        </ion-button>
        <ion-icon name="logo-google">fer</ion-icon>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginPage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonImg,
    IonButton,
    IonIcon,
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500;600&display=swap");

.background {
  --background: #ffffff url("../../public/assets/iBuy.png") no-repeat center
    bottom / contain !important;
  text-align: center;
}
.back-button {
  display: flex;
  justify-content: center;
}
.LoginButton {
  /*-moz-animation: ;border: 2px solid #1B4C81;
    color:#1B4C81;*/
  bottom: 128px;
  text-align: center;
  position: absolute;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  --border-radius: 20px;
  --border-color: #1b4c81;
  --border-width: 2px;
  font-size: 16px;
}
ion-title {
  font-family: "Raleway", sans-serif;
  color: #002554;
  font-size: 20px;
  font-weight: 600;
  top: 100px;
  position: absolute;
}
ion-toolbar {
  --background: #1b4c81;
}
ion-icon {
  --color: blue;
}
</style>