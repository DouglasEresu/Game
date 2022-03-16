import Paddle from './paddle'



let canvas = document.getElementById("gameScreen")

let ctx = canvas.getContext("2d")


const GAME_WIDTH = 150;
const GAME_HEIGHT = 50;


ctx.clearReact(0, 0, 800, 600)

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw(ctx);