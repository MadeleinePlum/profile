const btnList = document.getElementsByClassName('btn');
let colorIndex = 0;
let colorIndexBG = 0;
let colorIndexBorder = 0;

const titleColors = ["#E1E5F2", "#FF0000", "#B6D8F6", "#385C38", "#F18C55", "#FFFFFF"]
const backgroundColors = ["#2c574d", "#010633", "#2F30AC", "#F9DF74", "#690061", "#292929"]

colorIndex = (colorIndex + 1) % titleColors.length;
colorIndexBG = (colorIndexBG + 1) % backgroundColors.length;


const colorText = titleColors[colorIndex];
const colorBG = backgroundColors[colorIndexBG];

const links = document.getElementsByClassName('link');
  for (let h = 0; h < links.length; h++) {
  links[h].addEventListener('mouseover', function () {
    this.style.color = colorBG;
    this.style.backgroundColor = colorText;
    });

  links[h].addEventListener('mouseout', function() {
    this.style.color = '';
    this.style.backgroundColor = '';
    })
  }

for (let j = 0; j < btnList.length; j++) {
  btnList[j].addEventListener('click', function onClick(event) {


    const titleColors = ["#E1E5F2", "#FF0000", "#B6D8F6", "#385C38", "#F18C55", "#FFFFFF"]
    const backgroundColors = ["#2c574d", "#010633", "#2F30AC", "#F9DF74", "#690061", "#292929"]

    colorIndex = (colorIndex + 1) % titleColors.length;
    colorIndexBG = (colorIndexBG + 1) % backgroundColors.length;


    const colorText = titleColors[colorIndex];
    const colorBG = backgroundColors[colorIndexBG];

    const titleList = document.getElementsByClassName("title");
    for (let i = 0; i < titleList.length; i++) {
      titleList[i].style.color = colorText;
    }

    const buttonbgList = document.getElementsByClassName('buttonbg');
    for (let i = 0; i < buttonbgList.length; i++) {
      buttonbgList[i].style.backgroundColor = colorBG;
    }

    const webTitle = document.getElementsByClassName('web-d');
    for (let t = 0; t < webTitle.length; t++) {
      webTitle[t].style.color = colorBG;
    }

    const cardBorder = document.getElementsByClassName('card');
    for (let c = 0; c < cardBorder.length; c++) {
      cardBorder[c].style.borderColor = colorText;
    }

    const introBackground = document.getElementsByClassName('role')[0];
    introBackground.style.backgroundColor = colorText;

    const colorShuffle = document.getElementsByClassName('fa-shuffle')[0];
    colorShuffle.style.color = colorText;

  });
}

const colorPairs = [
  { background: "#2c574d", text: "#E1E5F2"},
  { background: "#010633", text: "#FF0000"},
  { background: "#2F30AC", text: "#77B6EA"},
  { background: "#385C38", text: "#F9DF74"},
  { background: "#690061", text: "#F18C55"},
  { background: "#292929", text: "#FFFFFF"}
];

function getRandomColorPair() {
  return colorPairs[Math.floor(Math.random() * colorPairs.length)];
}

function applyColorPair(colorPair) {
  document.body.style.backgroundColor = colorPair.background;
  const titleList = document.getElementsByClassName("title");
    for (let i = 0; i < titleList.length; i++) {
      titleList[i].style.color = colorPair.text;
    }

    const cardBorder = document.getElementsByClassName('card');
    for (let c = 0; c < cardBorder.length; c++) {
      cardBorder[c].style.borderColor = colorPair.text;
    }

    const introBackground = document.getElementsByClassName('role')[0];
    introBackground.style.backgroundColor = colorPair.text;

    const buttonbgList = document.getElementsByClassName('buttonbg');
    for (let i = 0; i < buttonbgList.length; i++) {
      buttonbgList[i].style.backgroundColor = colorPair.background;
    }

    const webTitle = document.getElementsByClassName('web-d');
    for (let t = 0; t < webTitle.length; t++) {
      webTitle[t].style.color = colorPair.background;
    }

    const colorShuffle = document.getElementsByClassName('fa-shuffle')[0];
    colorShuffle.style.color = colorPair.text;
}

window.addEventListener('load', function() {
  const randomColorPair = getRandomColorPair();
  applyColorPair(randomColorPair);
});


// const titleColors = ["#E1E5F2", "#FF0000", "#B6D8F6", "#385C38", "#F18C55", "#FFFFFF"]
// const backgroundColors = ["#2c574d", "#010633", "#2F30AC", "#F9DF74", "#690061", "#292929"]


// const colorText = titleColors[colorIndex];
// const colorBG = backgroundColors[colorIndexBG];
