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


//handle "Leave a Review" buttons
let leaveGameReview = document.getElementById("leaveGameReviewButton");
let yourReviewBlock = document.getElementById("yourGameReview");
leaveGameReview.addEventListener("click", function () {yourReviewBlock.hidden=false})