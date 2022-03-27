let score = 1;
const patternArr = [];
const userArr = [];

const scoreElement = document.querySelector(".score_container");

const selectedTile = document.getElementsByClassName("tiles");
console.log(selectedTile);

// selectedTile
// selectedTile.addEventListener("click", (e) => {
//   console.log(e);
// });

scoreElement.addEventListener("click", () => {
  scoreElement.textContent = score;
  populatePattern();
});

const populatePattern = () => {
  patternArr.push(generateRand());
  highLightDiv(patternArr);
};

const generateRand = () => {
  let randNum = Math.floor(Math.random() * 4 + 1);
  console.log(randNum);

  return randNum;
};

const changeOpacity = (ele, opacityValue) => {
  document.querySelector(`#n${ele}`).style.opacity = opacityValue;
};

const highLightDiv = (list) => {
  list.forEach((ele, index) => {
    setTimeout(() => {
      changeOpacity(ele, 1);
    }, 700 * index);

    setTimeout(() => {
      changeOpacity(ele, 0.3);
    }, 700 * (index + 0.5));
  });
};
