import { Menu } from "./menu";
import { Item } from './item';

export const MENUS: Menu[] = [
    { id: "1", idCompany: "1", nome: 'Cardápio 1', itens: [new Item("1", "arroz"), new Item("2", "feijão")] },
    { id: "2", idCompany: "1", nome: 'Cardápio 1', itens: [new Item("1", "arroz")] },
    { id: "3", idCompany: "1", nome: 'Cardápio 1', itens: [new Item("1", "arroz")] },
    { id: "4", idCompany: "1", nome: 'Cardápio 1', itens: [new Item("1", "arroz")] },
    { id: "5", idCompany: "1", nome: 'Cardápio 1', itens: [new Item("1", "arroz")] },
    { id: "6", idCompany: "2", nome: 'Cardápio 1', itens: [new Item("1", "arroz")] },
    { id: "7", idCompany: "2", nome: 'Cardápio 1', itens: [new Item("1", "arroz")] },
    { id: "8", idCompany: "2", nome: 'Cardápio 1', itens: [new Item("1", "arroz")] },
    { id: "9", idCompany: "2", nome: 'Cardápio 1', itens: [new Item("1", "arroz")] },
    { id: "10", idCompany: "3", nome: 'Cardápio 1', itens: [new Item("1", "arroz")] }
];