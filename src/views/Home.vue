<template>
  <div class="v-row d-flex">
    <!-- データの動きがわかるように表示 -->
    <v-card>
      <pre>{{ cards }}</pre>
    </v-card>
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
              >
                <v-card-text class="font-weight-bold"
                  >{{ item.name }}
                </v-card-text>
              </v-card>
            </draggable>
          </v-container>
        </v-card>
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
});
</script>

<style>
.move-cursor {
  cursor: pointer;
}
</style>
