const likes = 100;
const Dislikes = 20;

let increseLike = likes
let increseDislike = Dislikes


let LikeBtn = document.getElementById("LikeBtn");
let DislikeBtn = document.getElementById("DisLikeBtn");
LikeBtn.innerText = "👍" + likes;
DislikeBtn.innerText = "👎" + Dislikes;


window.onload = function () {
    if (document.cookie && document.cookie.indexOf("voted") > -1) {
        DisableBtn();
    }
}

function iDoLikeIt() {
    increseLike++;
    LikeBtn.innerText = "👍" + increseLike
    DisableBtn();

    createCookie();
}

function iDontLikeIt() {
    increseDislike++;
    DislikeBtn.innerText = "👎" + increseDislike
    DisableBtn();

    createCookie();
}


function DisableBtn() {
    DislikeBtn.disabled = true;
    LikeBtn.disabled = true;
}



function createCookie() {
    document.cookie = "voted=true; Max-Age" + 60;
}