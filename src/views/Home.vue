<template>
  <div class="v-row d-flex">
    <v-card width="355px" class="ma-3" color="grey lighten-3 ">
      <v-app-bar color="pink">
        <v-toolbar-title class="white--text font-weight-bold"
          >カード</v-toolbar-title
        >
      </v-app-bar>
      <v-container class="overflow-y-auto" style="max-height: 700px">
        <v-card class="ma-2">
          <v-card-text class="font-weight-bold">アイテム </v-card-text>
        </v-card>
      </v-container>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  components: {},
});
</script>
