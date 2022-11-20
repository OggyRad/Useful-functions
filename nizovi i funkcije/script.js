"use strict";

//INPUT FUNKCIJA

window.onload = function () {
  document.getElementById("myText").focus();
};

document.querySelector(".btn").addEventListener("click", function () {
  let ime = document.querySelector(".myInput1").value;
  let posta = document.querySelector(".myInput2").value;
  let tel = document.querySelector(".myInput3").value;
  let sacuvano = document.createElement("div");
  sacuvano.innerHTML = `Name: ${ime},
    Email: ${posta}, Tel: ${tel}`;
  sacuvano.classList.add("myStyle");

  if (ime === "") {
    alert("Niste uneli ime.");
    return;
  } else if (posta === "") {
    alert("Niste uneli email");
    return;
  } else if (tel === "") {
    alert("Niste uneli telefon");
    return;
  }
  document.body.append(sacuvano);
  ime = document.querySelector(".myInput1").value = "";
  posta = document.querySelector(".myInput2").value = "";
  tel = document.querySelector(".myInput3").value = "";
  document.getElementById("myText").focus();
});

// Funkcija koja vraca rezultate iz dva niza

const nizA = [1, 5, 5, 62, 9, 11, 2, 73, 8, 9, 26, 5, 81];
const nizB = [3, 5, 44, 1, 19, 38, 9];

function duplikati(arr1, arr2) {
  let zajednicki = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        if (!zajednicki.includes(arr1[i])) {
          zajednicki.push(arr1[i]);
        }
      }
    }
  }

  return zajednicki;
}
document.write(duplikati(nizA, nizB));

//Funkcija stavlja neduplikate iz prvog niza u drugi

let brojevi = [1, 7, 2, 88, 27, 92, 54, 4, 11, 70];

let cifre = [7, 66, 32, 99, 12, 6, 54];

function mix(niz1, niz2) {
  for (let i = 0; i < niz1.length; i++) {
    for (let j = 0; j < niz2.length; j++)
      if (niz1[i] !== niz2[j]) {
        if (!cifre.includes(niz1[i])) cifre.push(niz1[i]);
      }
  }
  return cifre;
}
console.log(mix(brojevi, cifre));

//Funkcija pravi dva niza elementima iz vec postojeca dva niza

let a = [1, 1, 21, 55, 6, 2, 22, 3, 2, 4, 9, 102];
let b = [4, 102, 24, 6, 9, 6, 789, 2, 7];

//----------------------------------------

function racun(a, b) {
  let novi = [];
  let novi2 = [];

  for (i = 0; i < a.length; i++) {
    for (j = 0; j < b.length; j++) {
      if (a[i] > b[j]) {
        if (!novi.includes(a[i])) {
          novi.push(a[i]);
        }
      }
    }
  }

  for (i = 0; i < a.length; i++) {
    for (j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        if (!novi2.includes(a[i])) {
          novi2.push(a[i]);
        }
      }
    }
  }

  console.log(`brojevi iz prvog ${novi}`);
  console.log(`brojevi iz drugog ${novi2}`);
}
racun(a, b);
