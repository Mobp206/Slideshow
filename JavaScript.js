var myImages = ["https://th.bing.com/th/id/OIP.m1Jl6fiXUyCoZxF3h8CmQwAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", "https://th.bing.com/th/id/OIP.jpUJa4L5xOIrhcsawYWNogHaLI?w=127&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7", "https://th.bing.com/th/id/OIP.bkCvcBPt32N9B78eSqkTpAHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7", "https://th.bing.com/th/id/OIP.xLM-ulvpJhQSTtDXrpaVRwHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7]", "https://th.bing.com/th/id/OIP.jAzw57gkgL-2VPQAgOd5dgHaHa?w=182&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"];



var captionImages = ["Joel Anthony", "Chris Bosh", "Lebron James", "Dwyane Wade", "Mario Chalmers"];

var index = 0;

function updateImage() {
    document.getElementById("slideshow").src = myImages[index];
    document.getElementById("slideshow").alt = captionImages[index];
    document.getElementById("caption").textContent = captionImages[index];
}

function next() {
    if (myImages.length == index + 1)
        index = 0;
    else
        index++;
    updateImage();
}


function back() {
    if (index === 0)
        index = myImages.length - 1;
    else
        index--;

    updateImage();
}

var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");

previousButton.addEventListener("click", back, false);
nextButton.addEventListener("click", next, false); 
function autoSlide() {
    if (document.getElementById("auto").checked)
        next();
}


setInterval(autoSlide, 2000); // Next