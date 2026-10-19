import creme from "../assets/creme.jpg";
import serum from "../assets/serum.jpg";
import solaire from "../assets/solaire.jpg";
import gel from "../assets/gel.jpg";
import masque from "../assets/masque.jpg";
import baume from "../assets/baume.jpg";
import micellaire from "../assets/micellaire.jpg";
import hydroboost from "../assets/hydroboost.jpg";

export const productList = [
  { id: "1a", brand: "CeraVe", name: "Crème hydratante", skin: "sèche", hydration: 3, protection: 1, cover: creme },
  { id: "2b", brand: "The Ordinary", name: "Vitamin C", skin: "terne", hydration: 2, protection: 2, cover: serum },
  { id: "3c", brand: "La Roche-Posay", name: "Anthelios SPF50", skin: "toutes", hydration: 1, protection: 3, cover: solaire },
  { id: "4d", brand: "CeraVe", name: "Gel nettoyant", skin: "grasse", hydration: 1, protection: 1, cover: gel },
  { id: "5e", brand: "L'Oréal", name: "Pure-Clay Masque", skin: "mixte", hydration: 2, protection: 1, cover: masque },
  { id: "6f", brand: "Nivea", name: "Baume à lèvres", skin: "toutes", hydration: 3, protection: 2, cover: baume },
  { id: "7g", brand: "Garnier", name: "Eau micellaire", skin: "mixte", hydration: 2, protection: 1, cover: micellaire },
  { id: "8h", brand: "Neutrogena", name: "Hydro Boost Gel", skin: "grasse", hydration: 3, protection: 1, cover: hydroboost },
];