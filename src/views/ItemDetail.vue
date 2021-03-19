<template>
  <v-container>
    <v-card class="mx-auto mt-3" max-width="344">
      <v-card-title>
        <v-icon>mdi-rename-box</v-icon><span class="headline">{{ name }}</span>
      </v-card-title>
      <v-card-subtitle>
        <span class="headline">{{ detail }}</span>
      </v-card-subtitle>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Card } from "@/model";
import Vue from "vue";

export default Vue.extend({
  name: "itemDetail",
  data() {
    return {
      name: "",
      detail: "",
    };
  },
  mounted() {
    this.getDetail();
  },
  methods: {
    getDetail() {
      const params = this.$route.params;
      const cards: Card[] = this.$store.state.task.cards;

      // カードIDとアイテムIDを元に対象の情報を検索
      const card = cards.find((v) => v.cardId === Number(params["cardId"]));
      const item = card?.items.find(
        (v) => v.itemId === Number(params["itemId"])
      );
      if (item) {
        this.name = item.name;
        this.detail = item.detail;
      }
    },
  },
});
</script>

<style></style>
