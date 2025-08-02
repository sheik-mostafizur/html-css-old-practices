import { createElement, root, append } from "../../js/createElement.js";
export default function () {
  let childDiv = [headting()];
  // output.appendChild(container);
  let Selected = document.querySelector("header"); // select id index output.
  // append(container, childDiv);
  let parentDiv = createElement("nav"); // create new div > here all document.
  root(Selected, parentDiv, append(parentDiv, childDiv));

  function headting() {
    return createElement("h1", "This is Practice purpase");
  }
}

/*
//****** Help documentation how to use this function ******
let childDiv = [Title()];
// output.appendChild(container);
let Selected = document.querySelector(".root"); // select id index output.
// append(container, childDiv);
let parentDiv = createElement("container"); // create new div > here all document.
root(Selected, parentDiv, append(parentDiv, childDiv));

function Title() {
  let h1 = `h1`;
  let htm = `HTML text here`;
  let cName = `cName`;
  let idName = `idName`;
  // allways use coma ,  because it's parametar
  return createElement(h1 , htm , cName , idName);
}

*/
