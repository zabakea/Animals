"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];

function start() {
  console.log("ready");

  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    console.log(jsonObject);

    // TODO: Create new object with cleaned data - and store that in the allAnimals array
    const Animal = {
      name: "",
      type: "",
      desc: "",
      age: 0,
    };
    const fullNameString = jsonObject.fullname;
    const name = fullNameString.slice(0, fullNameString.indexOf(" "));
    const type = fullNameString.slice(fullNameString.lastIndexOf(" "));
    const splitString = fullNameString.split(" ");
    const desc = splitString[2];
    const age = jsonObject.age;

    const animal = Object.create(Animal);
    animal.name = name;
    animal.type = type;
    animal.desc = desc;
    animal.age = age;
    console.log(animal);
    allAnimals.push(animal);

    // TODO: MISSING CODE HERE !!!
  });

  displayList();
}

function displayList() {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  allAnimals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document
    .querySelector("template#animal")
    .content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
