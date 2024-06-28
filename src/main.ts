import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import axios from "axios";

type Character = {
  name: string;
  species: string;
  status: string;
  image: string;
};

function getRandomInt() {
  const minCeiled = Math.ceil(0);
  const maxFloored = Math.floor(826);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

const getCharacter = async () => {
  const res = await axios.get(
    `https://rickandmortyapi.com/api/character/${getRandomInt()}`
  );
  const character: Character = res.data;
  return character;
};

const renderHTML = async () => {
  const ricky = await getCharacter();

  const container = document.querySelector("#app")! as HTMLDivElement;
  const card = document.createElement("div")!;
  container.appendChild(card);

  const image = document.createElement("img");
  image.src = ricky.image;
  card.appendChild(image);

  const name = document.createElement("h1");
  name.innerText = ricky.name;
  card.appendChild(name);

  const species = document.createElement("h3");
  species.innerText = ricky.species;
  card.appendChild(species);

  const status = document.createElement("h3");
  status.innerText = ricky.status;
  card.appendChild(status);
};

window.onload = async () => {
  await renderHTML();
};
