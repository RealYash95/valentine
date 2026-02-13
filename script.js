const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", function() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", function() {

    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            let firework = document.createElement("div");
            firework.style.position = "fixed";
            firework.style.width = "10px";
            firework.style.height = "10px";
            firework.style.borderRadius = "50%";
            firework.style.background = "white";
            firework.style.left = Math.random() * window.innerWidth + "px";
            firework.style.top = Math.random() * window.innerHeight + "px";
            firework.style.boxShadow = `
                0 0 10px red,
                0 0 20px yellow,
                0 0 30px pink,
                0 0 40px cyan
            `;
            firework.style.animation = "explode 1s ease-out forwards";
            document.body.appendChild(firework);

            setTimeout(() => {
                firework.remove();
            }, 1000);

        }, i * 200);
    }

    setTimeout(() => {
        window.location.href = "letter.html";
    }, 3500);
});
