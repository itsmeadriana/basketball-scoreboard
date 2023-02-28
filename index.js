// let homeScoreCard = document.getElementById("home-score").textContent ;

let homeScoreCard = document.getElementById("home-score");
console.log(homeScoreCard);

let guestScoreCard = document.getElementById("guest-score");

let homeScore = 0;
homeScoreCard.textContent = homeScore;
let guestScore = 0;
guestScoreCard.textContent = guestScore;

function addOnePointHome() {
    homeScore += 1
    console.log(homeScore);
    homeScoreCard.textContent = homeScore;
}

function addTwoPointsHome() {
    homeScore += 2
    console.log(homeScore);
    homeScoreCard.textContent = homeScore;
}

function addThreePointsHome() {
    homeScore += 3
    console.log(homeScore);
    homeScoreCard.textContent = homeScore;
}

function addOnePointGuest() {
    guestScore += 1
    console.log(guestScore);
    guestScoreCard.textContent = guestScore;
}

function addTwoPointsGuest() {
    guestScore += 2
    console.log(guestScore);
    guestScoreCard.textContent = guestScore;
}

function addThreePointsGuest() {
    guestScore += 3
    console.log(guestScore);
    guestScoreCard.textContent = guestScore;
}

function reset() {
    homeScore = 0;
    document.getElementById("home-score").textContent = homeScore;
    guestScore = 0
    guestScoreCard.textContent = guestScore;
}