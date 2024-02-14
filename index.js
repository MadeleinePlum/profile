// const btnList = document.getElementsByClassName('btn');
// let colorIndex = 0;
// let colorIndexBG = 0;
// let colorIndexBorder = 0;

// for (let j = 0; j < btnList.length; j++) {
//   btnList[j].addEventListener('click', function onClick(event) {


//     const titleColors = ["#E1E5F2", "#FF0000", "#B6D8F6", "#F9DF74", "#F18C55", "#FFFFFF"]
//     const backgroundColors = ["#2c574d", "#010633", "#2F30AC", "#385C38", "#690061", "#292929"]

//     colorIndex = (colorIndex + 1) % titleColors.length;
//     colorIndexBG = (colorIndexBG + 1) % backgroundColors.length;


//     colorText = titleColors[colorIndex];
//     colorBG = backgroundColors[colorIndexBG];

//     const titleList = document.getElementsByClassName("title");
//     for (let i = 0; i < titleList.length; i++) {
//       titleList[i].style.color = colorText;
//     }

//     const buttonbgList = document.getElementsByClassName('buttonbg');
//     for (let i = 0; i < buttonbgList.length; i++) {
//       buttonbgList[i].style.backgroundColor = colorBG;
//     }

//     const webTitle = document.getElementsByClassName('web-d');
//     for (let t = 0; t < webTitle.length; t++) {
//       webTitle[t].style.color = colorBG;
//     }

//     const cardBorder = document.getElementsByClassName('card');
//     for (let c = 0; c < cardBorder.length; c++) {
//       cardBorder[c].style.borderColor = colorText;
//     }

//     const introBackground = document.getElementsByClassName('role')[0];
//     introBackground.style.backgroundColor = colorText;

//     const colorShuffle = document.getElementsByClassName('fa-shuffle')[0];
//     colorShuffle.style.color = colorText;

//   });
// }


// const titleColors = ["#E1E5F2", "#FF0000", "#77B6EA", "#F9DF74", "#F18C55", "#FFFFFF"]
// const backgroundColors = ["#2c574d", "#010633", "#2F30AC", "#385C38", "#690061", "#292929"]

// let colorText = titleColors[colorIndex];
// let colorBG = backgroundColors[colorIndexBG];

// const links = document.getElementsByClassName('link');
//   for (let h = 0; h < links.length; h++) {
//   links[h].addEventListener('mouseover', function () {
//     this.style.color = colorBG;
//     this.style.backgroundColor = colorText;
//     });

//   links[h].addEventListener('mouseout', function() {
//     this.style.color = colorText;
//     this.style.backgroundColor = colorBG;
//     })
//   }

const colorPairs = [
  { background: "#2c574d", text: "#E1E5F2"},
  { background: "#010633", text: "#FF0000"},
  { background: "#2F30AC", text: "#77B6EA"},
  { background: "#385C38", text: "#F9DF74"},
  { background: "#690061", text: "#F18C55"},
  { background: "#292929", text: "#FFFFFF"}
];

let currentColorIndex = 0;

function getNextColorPair() {
  currentColorIndex = (currentColorIndex + 1) % colorPairs.length;
  return colorPairs[currentColorIndex]
}

window.addEventListener('load', function() {
  const randomColorPair = colorPairs[Math.floor(Math.random() * colorPairs.length)];
  applyColorPair(randomColorPair);
});

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

  // const colorShuffle = document.getElementsByClassName('shuffle')[0];
  // colorShuffle.style.color = colorPair.text;

  const colorShuffle = document.getElementsByClassName('fas');
  for (let f = 0; f < colorShuffle.length; f++) {
    colorShuffle[f].style.color = colorPair.text;
  }

  const links = document.getElementsByClassName('link');
    for (let h = 0; h < links.length; h++) {
      links[h].addEventListener('mouseover', function () {
        this.style.color = colorPair.background;
        this.style.backgroundColor = colorPair.text;
      });

      links[h].addEventListener('mouseout', function() {
        this.style.color = colorPair.text;
        this.style.backgroundColor = '';
      })
    }
}


const colorShuffleButton = document.getElementsByClassName('btn');
 for (let j = 0; j < colorShuffleButton.length; j++) {
   colorShuffleButton[j].addEventListener('click', function() {
     const nextColorPair = getNextColorPair();
     applyColorPair(nextColorPair);
   });
 }



// const titleColors = ["#E1E5F2", "#FF0000", "#B6D8F6", "#385C38", "#F18C55", "#FFFFFF"]
// const backgroundColors = ["#2c574d", "#010633", "#2F30AC", "#F9DF74", "#690061", "#292929"]


// const colorText = titleColors[colorIndex];
// const colorBG = backgroundColors[colorIndexBG];
