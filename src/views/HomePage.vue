<template>
  <ion-app>
    <ion-content>
      <ion-title>Bem-vindo(a) ao iBuy</ion-title>
      <p>Um novo jeito de fazer suas compras</p>
      <ion-button
        router-link="/login"
        color="light"
        size="default"
        expand="block"
        fill="solid"
        >Prosseguir</ion-button
      >
    </ion-content>
  </ion-app>
</template>

<script>
import { IonApp, IonHeader, IonTitle, IonToolbar, IonButton } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  components: {
    IonApp,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
  },
});
</script>