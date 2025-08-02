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

// ----------------------------------
// root(rootDiv, container);
function root(output, parent) {
  output.appendChild(parent);
}
function append(parentIn, childrenIn) {
  childrenIn.forEach((child) => parentIn.appendChild(child));
}
function createElement(tagName, innerHTML, className, id) {
  let tag = document.createElement(tagName);
  if (!innerHTML == "") {
    tag.innerHTML = innerHTML;
  } else {
    return tag;
  }
  if (!className == "") {
    tag.className = className;
  } else {
    return tag;
  }
  if (!id == "") {
    tag.id = id;
  } else {
    return tag;
  }
  return tag;
}
export { createElement, root, append };
