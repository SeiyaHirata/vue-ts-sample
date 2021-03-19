<template>
  <div class="v-row d-flex">
    <draggable
      :animation="200"
      v-model="cards"
      class="d-flex"
      draggable=".item"
      handle=".handle"
    >
      <div v-for="(card, index) in cards" :key="index" class="item">
        <v-card width="355px" class="ma-3" color="grey lighten-3">
          <v-app-bar color="pink" class="handle move-cursor">
            <v-toolbar-title class="white--text font-weight-bold">{{
              card.name
            }}</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-menu
              bottom
              origin="center"
              :close-on-content-click="false"
              transition="scale-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn fab small v-bind="attrs" v-on="on">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </template>
              <v-card width="355px">
                <v-container>
                  <v-text-field
                    label="アイテム名"
                    v-model="itemName"
                  ></v-text-field>

                  <v-textarea label="詳細" v-model="itemDetail"></v-textarea>
                  <v-card-actions>
                    <v-btn
                      color="green lighten-1"
                      @click="addItem(card.cardId)"
                      :disabled="!itemName || !itemDetail"
                      class="white--text font-weight-bold"
                      width="100%"
                      >追加</v-btn
                    >
                  </v-card-actions>
                </v-container>
              </v-card>
            </v-menu>
          </v-app-bar>
          <v-container class="overflow-y-auto" style="max-height: 700px">
            <draggable
              :animation="200"
              v-model="card.items"
              tag="div"
              group="listGruop"
            >
              <v-card
                class="ma-2 move-cursor"
                v-for="(item, i) in card.items"
                :key="i"
                @click="toDetail(card.cardId, item.itemId)"
              >
                <v-card-text class="font-weight-bold"
                  >{{ item.name }}
                </v-card-text>
              </v-card>
            </draggable>
          </v-container>
        </v-card>
      </div>
      <div>
        <v-menu
          offset-y
          :close-on-content-click="false"
          transition="scale-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-card width="355px" class="ma-3" v-bind="attrs" v-on="on">
              <v-card-title>カード追加</v-card-title>
            </v-card>
          </template>

          <v-card height="150px">
            <v-container>
              <v-text-field label="カード名" v-model="cardName"></v-text-field>
              <v-card-actions>
                <v-btn
                  color="green lighten-1"
                  @click="addCard"
                  :disabled="!cardName"
                  width="100%"
                  class="white--text font-weight-bold"
                  >追加</v-btn
                >
              </v-card-actions>
            </v-container>
          </v-card>
        </v-menu>
      </div>
    </draggable>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

// Vue.Draggable公式ドキュメント
// https://github.com/SortableJS/Vue.Draggable
import draggable from "vuedraggable";
import { Card } from "@/model";

export default Vue.extend({
  name: "Home",
  components: { draggable },
  data() {
    return {
      cardName: "",
      itemName: "",
      itemDetail: "",
      valueData: ["TODO", "作業中", "完了"],
    };
  },
  computed: {
    cards: {
      get(): Card[] {
        return this.$store.state.task.cards;
      },
      set(value: Card[]) {
        this.$store.dispatch("task/changeCard", value);
      },
    },
  },
  mounted() {
    if (this.cards.length === 0)
      this.valueData.forEach((value) =>
        this.$store.dispatch("task/addCard", { name: value })
      );
  },
  methods: {
    addCard() {
      this.$store.dispatch("task/addCard", { name: this.cardName });
      this.cardName = "";
    },
    addItem(cardId: number) {
      this.$store.dispatch("task/addItem", {
        cardId,
        name: this.itemName,
        detail: this.itemDetail,
      });
      this.itemName = "";
      this.itemDetail = "";
    },
    toDetail(cardId: number, itemId: number) {
      this.$router.push(`/item/${cardId}/${itemId}`);
    },
  },
});
</script>

<style>
.move-cursor {
  cursor: pointer;
}
</style>
