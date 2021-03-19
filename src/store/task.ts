import { Card } from "@/model";

interface TaskState {
  cards: Card[];
}

const state: TaskState = {
  cards: [
    {
      cardId: 1,
      name: "カード1",
      items: [{ itemId: 1, name: "アイテム1", detail: "詳細" }],
    },
    {
      cardId: 2,
      name: "カード2",
      items: [{ itemId: 2, name: "アイテム2", detail: "詳細" }],
    },
  ],
};

const mutations = {};

const actions = {};

export const task = {
  namespaced: true,
  state,
  mutations,
  actions,
};
