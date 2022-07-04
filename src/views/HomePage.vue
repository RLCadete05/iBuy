<template>
  <ion-app>
    <ion-content>
      <div class="content">
        <ion-title>Bem-vindo(a) ao iBuy</ion-title>
        <p>Um novo jeito de fazer suas compras</p>
        <ion-img :src="require('../../public/assets/iBuyLogo.png')"></ion-img>
        <ion-button class="next" router-link="/login">Prosseguir</ion-button>
      </div>
    </ion-content>
  </ion-app>
</template>

<script>
import {
  IonApp,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonImg,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  components: {
    IonApp,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonImg,
  },
  
});
</script>

<style>
.next {
  bottom: 60px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  --border-radius: 20px;
  --background: #6a467f;
  font-size: 18px;
  display: flex;
  justify-content: center;
}
p{
  font-family: 'Raleway', sans-serif;
  color: #002554;
}
.content{
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  padding: 10px;
  text-align: center;
}
ion-app{
  display: flex;
  align-content: center;
}

</style>