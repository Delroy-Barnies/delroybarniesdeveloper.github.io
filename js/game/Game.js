import EnemyController from "./EnemyController.js";
import Player from "./Player.js";
import bulletController from "./BulletController.js";

document.addEventListener('DOMContentLoaded', domloaded, false);
function domloaded() {

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

const background = new Image();
background.src = "images/space.png";

const playerBulletController = new bulletController(canvas, 10, "red", true);
const enemyBulletController = new bulletController(canvas, 4, "white", false);
const enemyController = new EnemyController(canvas, enemyBulletController, playerBulletController);
const player = new Player(canvas, 3, playerBulletController);

var music = new Audio("sounds/dnx-116856-[AudioTrimmer.com].mp3", 20, true);

let isGameOver = false;
let didWin = false;
let started = false;

function game() {
    checkStartGame();
    checkGameOver();
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    displayGameOver();
    displayStartGame();
    if (started) {
        if (!isGameOver) {
            enemyController.draw(ctx);
            player.draw(ctx);
            playerBulletController.draw(ctx);
            enemyBulletController.draw(ctx);
        }
    }
}

setInterval(game, 1000 / 60);

function displayGameOver() {
    if (isGameOver) {
        let text = didWin ? "You Win" : "Game Over";
        let textOffset = didWin ? 3.5 : 5;

        ctx.fillStyle = "white";
        ctx.font = "70px Ariel";
        ctx.fillText(text, canvas.width / textOffset, canvas.height / 2);
    }


}

function checkGameOver() {
    if (isGameOver) {
        music.pause();
        music.currentTime = 0;
        return;
    }
    if (enemyBulletController.collideWith(player)) {
        isGameOver = true;
    }

    if (enemyController.collideWith(player)) {
        isGameOver = true;
    }

    if (enemyController.enemyRows.length == 0) {
        didWin = true;
        isGameOver = true;
    }
}

function displayStartGame() {
    if (!started) {
        let title = "SPACE ATTACK";

        ctx.fillStyle = "white";
        ctx.font = "bold 60px Ariel";
        ctx.fillText(title, canvas.width / 12, canvas.height / 2.5);

        let instructions = "press enter to start";

        ctx.fillStyle = "white";
        ctx.font = "30px Ariel";
        ctx.fillText(instructions, canvas.width / 12, 400);
    }

}

function checkStartGame() {
    if (started) {
        music.play();
        return;
    }

    let enter = (event) => {
        if (event.code == 'Enter') {
            started = true;
        }
    }

    document.addEventListener("keydown", enter);

}
}
