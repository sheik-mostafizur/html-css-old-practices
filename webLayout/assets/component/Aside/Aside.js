import Home from "../Home/Home.js";
import oneT from "../delete/oneT.js";
import twoT from "../delete/twoT.js";
import threeT from "../delete/threeT.js";

export default function () {
  const aside = document.querySelector("aside");
  const main = document.querySelector("main");
  const nav = `
  <nav>
    <ul>
      <li><a href="#" class="btn">Home</a></li>
      <li><a href="#" class="btn">One</a></li>
      <li><a href="#" class="btn">Two</a></li>
      <li><a href="#" class="btn">Three</a></li>
    </ul>
  </nav>
`;
  aside.innerHTML = nav;
  // this is default home page
  // main.innerHTML = Home();
  main.innerHTML = oneT();

  const navBtn = document.getElementsByClassName("btn");
  for (let i = 0; i < navBtn.length; i++) {
    navBtn[i].addEventListener("click", function () {
      if (i === 0) {
        main.innerHTML = Home();
      } else if (i === 1) {
        main.innerHTML = oneT();
      } else if (i === 2) {
        main.innerHTML = twoT();
      } else if (i === 3) {
        main.innerHTML = threeT();
      } else {
        main.innerHTML = Home();
      }
    });
  }
}
