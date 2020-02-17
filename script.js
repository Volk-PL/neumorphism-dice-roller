/* dots area
1 4 7
2 5 8
3 6 9
*/

const rollBtn = document.querySelector("#trigger");

const domDots = document.querySelectorAll(".dot");

const domResult = document.querySelector(".result");

const outputDots = [
  [5],
  [4, 6],
  [1, 5, 9],
  [1, 3, 7, 9],
  [1, 3, 5, 7, 9],
  [1, 2, 3, 7, 8, 9]
];

rollBtn.addEventListener("click", roll);

function roll() {
  const number = Math.floor(Math.random() * 6);
  domResult.innerText = `Rolled ${number + 1}`;
  const displayDots = outputDots[number];
  domDots.forEach((item, index) => {
    item.classList.remove("fill-black");
    displayDots.forEach(dot => {
      if (index === dot - 1) {
        item.classList.add("fill-black");
      }
    });
  });
}