import { Item } from "./item";

export interface Card {
  cardId: number;
  name: string;
  items: Item[];
}
