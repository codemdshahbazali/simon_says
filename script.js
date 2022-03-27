let score = 1;
const patternArr = [];
const userArr = [];

const scoreElement = document.querySelector('.score_container');
// const tile1 = document.querySelector('.tile1');
// const tile2 = document.querySelector('.tile2');
// const tile3 = document.querySelector('.tile3');
// const tile4 = document.querySelector('.tile4');

const tiles = document.querySelectorAll('.tiles');

scoreElement.addEventListener('click', () => {
  scoreElement.textContent = score;
  populatePattern();
});

const populatePattern = () => {
  patternArr.push(generateRand());
  setTimeout(() => highLightDiv(patternArr), 500);
};

const generateRand = () => {
  let randNum = Math.floor(Math.random() * 4 + 1);
  console.log(randNum);

  return randNum;
};

const changeOpacity = (ele, opacityValue) =>
  (document.querySelector(`#n${ele}`).style.opacity = opacityValue);

const highLightDiv = (list) => {
  //   list.forEach(async (ele) => {
  //     // console.log(document.querySelector(`#n${ele}`));
  //     changeOpacity(ele, 1);
  //     changeOpacity(ele, 0.3);
  //     //Todo: add sound effect
  //   });
  let lengthOfList = list.length;
  let count = 0;

  let interval = setInterval(() => {
    let currentCount = count;
    changeOpacity(list[currentCount], 1);
    setTimeout(() => changeOpacity(list[currentCount], 0.3), 300);
    count++;
    if (count === lengthOfList) clearInterval(interval);
  }, 800);
};

console.log(tiles);

tiles.forEach((ele) => {
  ele.addEventListener('click', (event) => {
    console.log(event.target.id[1]);
    let idNumber = Number(event.target.id[1]);
    userArr.push(idNumber);
    changeOpacity(idNumber, 1);
    setTimeout(() => changeOpacity(idNumber, 0.3), 300);
    if (!compareInputs(patternArr, userArr)) {
      highLightDiv(patternArr);
    } else {
      if (patternArr.length === userArr.length) {
        console.log('here');
        score++;
        scoreElement.textContent = score;
        populatePattern();
      }
    }
  });
});

const compareInputs = (patternArr, userArr) => {
  if (userArr.length === 0 || patternArr.length === 0) return false;
  for (let i = 0; i < userArr.length; i++) {
    if (patternArr[i] !== userArr[i]) {
      return false;
    }
  }

  return true;
};
