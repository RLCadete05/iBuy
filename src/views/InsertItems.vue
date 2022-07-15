<template>
  <ion-app>
    <ion-header translucent>
      <ion-toolbar class="header">
        <ion-icon name="arrow-back-outline"></ion-icon>
      </ion-toolbar>
    </ion-header>

    <ion-content fullscreen>
      <div>
        <ion-list>
          <ion-input
            v-model="searchInput"
            class="inputList"
            lines="full"
            type="text"
            enterkeyhint="search"
            placeholder="Escreva sua lista"
          ></ion-input>
          <ion-button v-if="searchInput != ''" @click="insertItems()" class="outputButton" color="light">{{ searchInput }}</ion-button>
        </ion-list>
        
        <ion-list class="outputUl" v-for="item in myHistory" :key="item">
          <ion-item>
            <ion-checkbox class="check" checked="true"></ion-checkbox>
            <ion-label>{{ item }}</ion-label>
          </ion-item>
        </ion-list>
        <ion-button class="button-insert">Salvar</ion-button><br/>
        <ion-button class="button-insert">Fotografar lista</ion-button>

      </div>
    </ion-content>
  </ion-app>
</template>

<script>
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonContent,
  IonIcon,
  IonItem,
  IonButton,
  IonInput,
  IonCheckbox,
  IonLabel
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "InsertItems",
  components: {
    IonApp,
    IonHeader,
    IonToolbar,
    IonContent,
    IonIcon,
    IonItem,
    IonButton,
    IonInput,
    IonCheckbox,
    IonLabel
  },
  data() {
    return {
      //insertBuy: null,
      searchInput: "",
      //searchBtn: '',
      myHistory: [],
    };
  },
  methods: {
    insertItems() {
      var valueList = this.searchInput;
      if (valueList !== "") {
        this.myHistory.push(valueList);

        this.searchInput = "";
      }
    },
  },
});
</script>

<style>
  .header{
    background: #1B4C81;
  }
  .inputList{
    --padding-end: #5277B1;
    --padding-bottom: #5277B1;
    --color: #5277B1;
  }
  .check{
    --background-checked: #6A467F;
    --border-color: #6A467F;
  }
  .button-insert{
    bottom: 60px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    --border-radius: 20px;
    --background: #6A467F;
    font-size: 18px;
    display: flex;
    justify-content: center;
  }
</style>