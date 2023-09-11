let gameTitle = "Starfield";
let developer = "Bethesda Game Studios";
let publisher = "Bethesda Softworks";
let gameCoverSrc = "./images/game-covers/starfield-2023.png";
let wikipediaLink = "https://en.wikipedia.org/wiki/Starfield_(video_game)";
let IGNLink = "https://www.ign.com/games/starfield";

document.getElementById("page-title").innerHTML = "Hopium | " + gameTitle;
document.getElementById("game-title").innerHTML = gameTitle;
document.getElementById("developer").innerHTML = "Developer: " + developer;
document.getElementById("publisher").innerHTML = "Publisher: " + publisher;

document.getElementById("gameCover").src = gameCoverSrc;





//Apply logical styles
//adjust rating color based on score

const applyRatingColor = (array) => {
    for (i=0; i < array.length; i++) {
        let element = array[i]
        switch (true) {
            case (array[i].innerHTML > 7):
                array[i].style.color = "rgb(0, 255, 0)";
                break;
            case (array[i].innerHTML > 3):
                array[i].style.color = "orange";
                break;
            default:
                array[i].style.color = "red";
        }
    }
}

const applyPatchSymbol = (array) => {
    for (i=0; i < array.length; i++) {
        let element = array[i]
        switch (true) {
            case (array[i].innerHTML > 7):
                array[i].innerHTML = "trending_up";
                break;
            case (array[i].innerHTML < 4):
                array[i].innerHTML = "trending_down";
                break;
            default:
                array[i].innerHTML = "trending_flat";
        }
    }
}

let ratingArray = document.getElementsByClassName("rating");
applyRatingColor(ratingArray);

let patchArray = document.getElementsByClassName("patchRating");
applyRatingColor(patchArray);
applyPatchSymbol(patchArray);
