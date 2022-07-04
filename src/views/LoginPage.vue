<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>iBuy</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="background">
      <ion-img></ion-img>
      <ion-button
        router-link="/InsertItems"
        color="light"
        size="default"
        expand="block"
        fill="solid"
        class="LoginButton"
        >Entrar com o Google
        <ion-icon name="logo-google"></ion-icon>
      </ion-button>
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
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500;600&display=swap');

.background {
  --background: #ffffff url("../../public/assets/borders.png") no-repeat center
    center / cover !important;
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
ion-title{
  font-family: 'Raleway', sans-serif;
  color: #002554;
}
</style>