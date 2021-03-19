import { Card } from "@/model";
import { Commit } from "vuex";

interface TaskState {
  cards: Card[];
  CardCount: number;
  ItemCount: number;
}

const state: TaskState = {
  cards: [],
  CardCount: 0,
  ItemCount: 0,
};

const mutations = {
  incrementCardCount(state: TaskState): void {
    state.CardCount++;
  },
  incrementItemCount(state: TaskState): void {
    state.ItemCount++;
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
  addItem(
    state: TaskState,
    value: { cardId: number; name: string; detail: string }
  ): void {
    const card = state.cards.find((v) => v.cardId === value.cardId);
    if (card) {
      card.items.push({
        itemId: state.ItemCount,
        name: value.name,
        detail: value.detail,
      });
    }
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
  addItem(
    context: { commit: Commit },
    payload: { cardId: number; name: string }
  ): void {
    context.commit("incrementItemCount");
    context.commit("addItem", payload);
  },
};

export const task = {
  namespaced: true,
  state,
  mutations,
  actions,
};
