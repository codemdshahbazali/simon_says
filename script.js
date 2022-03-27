let score = 1;
const patternArr = [];
const userArr = [];

const scoreElement = document.querySelector(".score_container");
console.log(document.getElementById("n2"));

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

// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// const syncWait = (ms) => {
//   const end = Date.now() + ms;
//   while (Date.now() < end) continue;
// };

const changeOpacity = (ele, opacityValue) => {
  document.querySelector(`#n${ele}`).style.opacity = opacityValue;
};

const highLightDiv = (list) => {
  list.forEach((ele, index) => {
    setTimeout(() => {
      document.querySelector(`#n${ele}`).style.opacity = 1;
    }, 700 * index);

    setTimeout(() => {
      document.querySelectorAll(".tiles").forEach((ele) => {
        ele.style.opacity = 0.3;
      });
    }, 700 * (index + 0.5));

    // setTimeout(() => {
    //   document.querySelector(`#n${ele}`).style.opacity = 0.3;
    // }, 500 * (index + 1));
  });
};

// list.forEach((ele) => {
//   // console.log(document.querySelector(`#n${ele}`));
//   changeOpacity(ele, 1);
//   setTimeout(() => changeOpacity(ele, 0.3), 1000);
//   // changeOpacity(ele, 0.3);
// });
//Todo: add sound effect
