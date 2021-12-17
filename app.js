var userScore = 0;
var compScore = 0;
const user_scoreSpan = document.getElementById("user_scoreSpan");
const comp_scoreSpan = document.getElementById("comp_scoreSpan");
const r = document.getElementById("rock");
const p = document.getElementById("paper");
const s = document.getElementById("scissor");
const result = document.querySelector(".result");
const r_user = document.getElementById("r-user-img");
const r_comp = document.getElementById("r-comp-img");
const r_hand = document.querySelector(".r-hand");

// SOURCE CODE COPYRIGHT - DEVESH TANWAR @2021

function get_computerChoice() {
    const choices = ['r', 'p', 's'];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

function win(userChoice, computerChoice) {
    userScore++;
    user_scoreSpan.innerHTML = userScore;
    result.innerHTML = "You Win &#128526";
    r_hand.classList.add("green-glow");
    setTimeout(() =>{
        r_hand.classList.remove("green-glow");
    },300);
}

function lose(userChoice, computerChoice) {
    compScore++;
    comp_scoreSpan.innerHTML = compScore;
    result.innerHTML = "You lose &#128548";
    r_hand.classList.add("red-glow");
    setTimeout(() =>{
        r_hand.classList.remove("red-glow");
    },300);
}

function draw(userChoice, computerChoice) {
    result.innerHTML = "Its Draw &#128528";
    r_hand.classList.add("gray-glow");
    setTimeout(() =>{
        r_hand.classList.remove("gray-glow");
    },300);
}

function game(userChoice) {
    const computerChoice = get_computerChoice();

    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;

        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }

    switch (userChoice) {
        case "r":
            r_user.src = ("images/rock.png");
            break;

        case "p":
            r_user.src = ("images/paper.png");
            break;

        case "s":
            r_user.src = ("images/scissor.png");
            break;
    }

    switch (computerChoice) {
        case "r":
            r_comp.src = ("images/rock.png");
            break;

        case "p":
            r_comp.src = ("images/paper.png");
            break;

        case "s":
            r_comp.src = ("images/scissor.png");
            break;
    }
}

function main() {
    r.addEventListener('click', () => game("r"));
    p.addEventListener('click', () => game("p"));
    s.addEventListener('click', () => game("s"));
}

main();