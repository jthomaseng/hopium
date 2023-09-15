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

const applyColorToRatingContainers = () => {
        let parent = document.getElementsByClassName('ratingContainer');
    for (i=0; i < parent.length; i++) {
        let child = parent[i].querySelector('p');
        console.log(child);
        console.log(parent[i]);
        switch (true) {
            case (child.innerHTML > 7):
                parent[i].style.backgroundColor = "rgba(0, 255, 0, 0.5)";
                parent[i].style.borderColor = "rgb(0, 255, 0)";
                console.log("value read as above 7");
                break;
            case (child.innerHTML > 3):
                parent[i].style.backgroundColor = "rgba(255, 165, 0, 0.7)";
                parent[i].style.borderColor = "rgb(255, 165, 0)";
                console.log("value read as above 3");
                break;
            default:
                parent[i].style.backgroundColor = "rgba(255, 0, 0, 0.5)";
                parent[i].style.borderColor = "rgb(255, 0, 0)";
                console.log("value read as below 3");
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

applyColorToRatingContainers();

applyPatchSymbol(patchArray);


//handle "Leave a Review" buttons
let leaveGameReview = document.getElementById("leaveGameReviewButton");
let yourReviewBlock = document.getElementById("yourGameReview");
leaveGameReview.addEventListener("click", function () {yourReviewBlock.hidden=false})