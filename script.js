/*====================================
 Veeresh ❤️ Anusha
 Premium Engagement Website
====================================*/

// =========================
// Live Countdown
// =========================

const eventDate = new Date("July 12, 2026 12:00:00").getTime();

const timer = setInterval(() => {

    const now = new Date().getTime();

    const distance = eventDate - now;

    if (distance <= 0) {

        clearInterval(timer);

        document.getElementById("countdown").innerHTML =
            "<h2>💍 Today is Our Engagement Day 💍</h2>";

        launchConfetti();

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);


// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


// =========================
// Floating Hearts
// =========================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    let pos = window.innerHeight;

    const move = setInterval(() => {

        pos -= 2;

        heart.style.top = pos + "px";

        heart.style.opacity = pos / window.innerHeight;

        if (pos < -50) {

            clearInterval(move);

            heart.remove();

        }

    }, 20);

}

setInterval(createHeart, 600);


// =========================
// Rose Petals
// =========================

function createPetal() {

    const petal = document.createElement("div");

    petal.innerHTML = "🌸";

    petal.style.position = "fixed";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.top = "-30px";
    petal.style.fontSize = (18 + Math.random() * 12) + "px";
    petal.style.pointerEvents = "none";
    petal.style.zIndex = "998";

    document.body.appendChild(petal);

    let top = -20;

    const fall = setInterval(() => {

        top += 2;

        petal.style.top = top + "px";

        petal.style.transform =
            "translateX(" +
            Math.sin(top / 25) * 25 +
            "px) rotate(" +
            top +
            "deg)";

        if (top > window.innerHeight + 30) {

            clearInterval(fall);

            petal.remove();

        }

    }, 20);

}

setInterval(createPetal, 900);


// =========================
// Gallery Zoom
// =========================

document.querySelectorAll(".gallery img").forEach(img => {

    img.addEventListener("click", () => {

        const popup = document.createElement("div");

        popup.style.position = "fixed";
        popup.style.top = "0";
        popup.style.left = "0";
        popup.style.width = "100%";
        popup.style.height = "100%";
        popup.style.background = "rgba(0,0,0,.9)";
        popup.style.display = "flex";
        popup.style.justifyContent = "center";
        popup.style.alignItems = "center";
        popup.style.zIndex = "5000";

        const image = document.createElement("img");

        image.src = img.src;
        image.style.maxWidth = "90%";
        image.style.maxHeight = "90%";
        image.style.borderRadius = "15px";

        popup.appendChild(image);

        popup.onclick = () => popup.remove();

        document.body.appendChild(popup);

    });

});


// =========================
// Fireworks
// =========================

function launchFirework() {

    const fire = document.createElement("div");

    fire.innerHTML = "🎆";

    fire.style.position = "fixed";
    fire.style.left = Math.random() * 100 + "vw";
    fire.style.top = Math.random() * 60 + "vh";
    fire.style.fontSize = "50px";
    fire.style.zIndex = "9999";

    document.body.appendChild(fire);

    setTimeout(() => {

        fire.remove();

    }, 1000);

}

setTimeout(() => {

    for (let i = 0; i < 12; i++) {

        setTimeout(launchFirework, i * 250);

    }

}, 1000);


// =========================
// Confetti
// =========================

function launchConfetti() {

    for (let i = 0; i < 150; i++) {

        const c = document.createElement("div");

        c.style.position = "fixed";
        c.style.left = Math.random() * 100 + "vw";
        c.style.top = "-10px";
        c.style.width = "8px";
        c.style.height = "8px";
        c.style.background =
            `hsl(${Math.random() * 360},100%,50%)`;

        c.style.zIndex = "9999";

        document.body.appendChild(c);

        let y = -20;

        const fall = setInterval(() => {

            y += 4;

            c.style.top = y + "px";

            if (y > window.innerHeight) {

                clearInterval(fall);

                c.remove();

            }

        }, 15);

    }

}


// =========================
// Welcome Message
// =========================

window.onload = () => {

    setTimeout(() => {

        alert(
            "💍 Welcome to Veeresh ❤️ Anusha's Engagement Invitation"
        );

    }, 800);

};
