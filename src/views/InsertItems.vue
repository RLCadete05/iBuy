<template>
  <ion-app>
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>iBuy</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content fullscreen>
      <!--
            <ion-searchbar placeholder="Escreva sua lista" class="outputInput" >
                <ion-icon name="add-outline">
                    <ion-button color="light">Inserir</ion-button>
                </ion-icon>
            </ion-searchbar>
            
             

            -->
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
          <ion-button v-if="searchInput != ''" @click="insertItems()" class="outputButton" color="light">{{searchInput}}</ion-button>
        </ion-list>
        
        <ion-list class="outputUl" v-for="item in myHistory" :key="item">
          <ion-item>
            <ion-checkbox class="check"></ion-checkbox>
            <ion-label>{{ item }}</ion-label>
          </ion-item>
        </ion-list>
        <ion-button class="save">Salvar</ion-button>
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
  ion-searchbar {
    --border-radius: 20px;
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
  .save{
    bottom: 128px;
    text-align: center;
    position: absolute;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    --border-radius: 20px;
    --background: #6A467F;
    --border-width: 2px;
    font-size: 16px;
  }
</style>