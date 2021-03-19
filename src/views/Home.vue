<template>
  <div class="v-row d-flex">
    <div v-for="(card, index) in cards" :key="index">
      <v-card width="355px" class="ma-3" color="grey lighten-3 ">
        <v-app-bar color="pink">
          <v-toolbar-title class="white--text font-weight-bold">{{
            card.name
          }}</v-toolbar-title>
        </v-app-bar>
        <v-container class="overflow-y-auto" style="max-height: 700px">
          <v-card class="ma-2" v-for="(item, i) in card.items" :key="i">
            <v-card-text class="font-weight-bold">{{ item.name }} </v-card-text>
          </v-card>
        </v-container>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Card } from "@/model";

export default Vue.extend({
  name: "Home",
  components: {},
  computed: {
    cards: {
      get(): Card[] {
        return this.$store.state.task.cards;
      },
    },
  },
});
</script>
