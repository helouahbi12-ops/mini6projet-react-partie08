import creme from "../assets/creme.jpg";
import serum from "../assets/serum.jpg";
import solaire from "../assets/solaire.jpg";
import gel from "../assets/gel.jpg";
import masque from "../assets/masque.jpg";
import baume from "../assets/baume.jpg";
import micellaire from "../assets/micellaire.jpg";
import hydroboost from "../assets/hydroboost.jpg";
import bioderma from "../assets/bioderma.jpg";
import niacinamide from "../assets/niacinamide.jpg";
import vichy from "../assets/vichy.jpg";
import masquetissu from "../assets/masquetissu.jpg";

export const productList = [
  { id: "1a", brand: "CeraVe", name: "Crème hydratante", category: "Hydratant", skin: "sèche", hydration: 3, protection: 1, bestSeller: true, cover: creme },
  { id: "2b", brand: "The Ordinary", name: "Vitamin C", category: "Sérum", skin: "terne", hydration: 2, protection: 2, bestSeller: true, cover: serum },
  { id: "3c", brand: "La Roche-Posay", name: "Anthelios SPF50", category: "Protection solaire", skin: "toutes", hydration: 1, protection: 3, bestSeller: true, cover: solaire },
  { id: "4d", brand: "CeraVe", name: "Gel nettoyant", category: "Nettoyant", skin: "grasse", hydration: 1, protection: 1, bestSeller: false, cover: gel },
  { id: "5e", brand: "L'Oréal", name: "Pure-Clay Masque", category: "Masque", skin: "mixte", hydration: 2, protection: 1, bestSeller: false, cover: masque },
  { id: "6f", brand: "Nivea", name: "Baume à lèvres", category: "Lèvres", skin: "toutes", hydration: 3, protection: 2, bestSeller: false, cover: baume },
  { id: "7g", brand: "Garnier", name: "Eau micellaire", category: "Nettoyant", skin: "mixte", hydration: 2, protection: 1, bestSeller: false, cover: micellaire },
  { id: "8h", brand: "Neutrogena", name: "Hydro Boost Gel", category: "Hydratant", skin: "grasse", hydration: 3, protection: 1, bestSeller: true, cover: hydroboost },
  { id: "9i", brand: "Bioderma", name: "Sébium Gel moussant", category: "Nettoyant", skin: "grasse", hydration: 1, protection: 1, bestSeller: false, cover: bioderma },
  { id: "10j", brand: "The Ordinary", name: "Niacinamide 10%", category: "Sérum", skin: "grasse", hydration: 2, protection: 2, bestSeller: true, cover: niacinamide },
  { id: "11k", brand: "Vichy", name: "Minéral 89 Booster", category: "Hydratant", skin: "toutes", hydration: 3, protection: 2, bestSeller: false, cover: vichy },
  { id: "12l", brand: "Garnier", name: "Masque tissu Vitamine C", category: "Masque", skin: "terne", hydration: 2, protection: 1, bestSeller: false, cover: masquetissu },
];