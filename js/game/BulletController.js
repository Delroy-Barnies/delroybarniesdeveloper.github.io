import Bullet from "./Bullet.js";

export default class bulletController {

    bullets = [];
    timeTillnextBulletAllowed = 0;

    constructor(canvas, maxBulletsAtATime, bulletColor, soundEnabled) {
        this.canvas = canvas;
        this.maxBulletsAtATime = maxBulletsAtATime;
        this.bulletColor = bulletColor;
        this.soundEnabled = soundEnabled;

        this.shootSound = new Audio("sounds/shoot.wav");
        this.shootSound.volume = 0.1;
    }

    shoot(x, y, velocity, timeTillNextBulletAllowed = 0) {
        if (this.timeTillnextBulletAllowed <= 0 && this.bullets.length < this.maxBulletsAtATime) {
            const bullet = new Bullet(this.canvas, x, y, velocity, this.bulletColor);
            this.bullets.push(bullet);

            if (this.soundEnabled) {
                this.shootSound.currentTime = 0;
                this.shootSound.play();
            }

            this.timeTillnextBulletAllowed = timeTillNextBulletAllowed;
        }
    }

    collideWith(sprite) {
        const bulletThatHitSpriteIndex = this.bullets.findIndex(bullet => bullet.collideWith(sprite));

        if (bulletThatHitSpriteIndex >= 0) {
            this.bullets.splice(bulletThatHitSpriteIndex, 1);
            return true;
        }

        return false;
    }

    draw(ctx) {
        this.bullets = this.bullets.filter(bullet => bullet.y + bullet.width > 0 && bullet.y <= this.canvas.height)

        this.bullets.forEach(bullet => bullet.draw(ctx));
        if (this.timeTillnextBulletAllowed > 0) {
            this.timeTillnextBulletAllowed--;
        }
    }
}