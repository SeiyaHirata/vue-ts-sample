import { Card } from "@/model";
import { Commit } from "vuex";

interface TaskState {
  cards: Card[];
  CardCount: number;
}

const state: TaskState = {
  cards: [],
  CardCount: 0,
};

const mutations = {
  incrementCardCount(state: TaskState): void {
    state.CardCount++;
  },
  updateCard(state: TaskState, value: Card[]): void {
    state.cards = value;
  },
  addCard(state: TaskState, value: { name: string }): void {
    state.cards.push({
      cardId: state.CardCount,
      name: value.name,
      items: [],
    });
  },
};

const actions = {
  changeCard(context: { commit: Commit }, payload: Card[]): void {
    context.commit("updateCard", payload);
  },
  addCard(context: { commit: Commit }, payload: { name: string }): void {
    context.commit("incrementCardCount");
    context.commit("addCard", payload);
  },
};

export const task = {
  namespaced: true,
  state,
  mutations,
  actions,
};
