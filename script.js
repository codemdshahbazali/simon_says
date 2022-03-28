let score = 1;
const patternArr = [];
let userArr = [];

const scoreElement = document.querySelector('.score_container');
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

const changeOpacity = (ele, opacityValue) => {
  console.log(document.querySelector(`#n${ele}`), ' ==> ', opacityValue);
  document.querySelector(`#n${ele}`).style.opacity = opacityValue;
};

const highLightDiv = (list) => {
  //   list.forEach(async (ele) => {
  //     // console.log(document.querySelector(`#n${ele}`));
  //     changeOpacity(ele, 1);
  //     changeOpacity(ele, 0.3);
  //     //Todo: add sound effect
  //   });
  try {
    let lengthOfList = list.length;
    let count = 0;

    if (list.length === 0) {
      return;
    }

    let interval = setInterval(() => {
      try {
        let currentCount = count;
        changeOpacity(list[currentCount], 1);
        setTimeout(() => changeOpacity(list[currentCount], 0.3), 300);
        count++;
        if (count === lengthOfList) {
          clearInterval(interval);
        }
      } catch (e) {
        console.log('inside set interval ==> ', e);
      }
    }, 800);
  } catch (e) {
    console.log('inside highlightDiv ==> ', e);
  }
};

console.log(tiles);

tiles.forEach((ele) => {
  ele.addEventListener('click', (event) => {
    try {
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
          userArr = [];
          score++;
          scoreElement.textContent = score;
          populatePattern();
        }
      }
    } catch (e) {
      console.log('inside individual tiles', e);
    }
  });
});

const compareInputs = (patternArr, userArr) => {
  try {
    if (userArr.length === 0 || patternArr.length === 0) return false;
    for (let i = 0; i < userArr.length; i++) {
      if (patternArr[i] !== userArr[i]) {
        return false;
      }
    }

    return true;
  } catch (e) {
    console.log('Compare arrays => ', e);
  }
};
