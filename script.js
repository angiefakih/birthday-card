const messageEl = document.getElementById("birthday-message");
const titleEl = document.getElementById("main-message");

const finalMessage = `To  the one I love the most,

Even though we're far apart, I'm celebrating every moment of you today.
You're the brightest part of my world. Each moment spent with you is a moment full of happiness. I wish you the absolute best and for your years to be filled with love and joy. We are truly all so lucky that we have you in our lives to always brighten up our days. 
Allah ykhalili yek w ma yehremne menak, bhebak ad l dene kela w aktar. Allah yejma3na sawa ariban🫶🏼🫶🏼🫶🏼`;

let i = 0;

function typeMessage() {
  if (i < finalMessage.length) {
    messageEl.textContent += finalMessage.charAt(i);
    i++;
    setTimeout(typeMessage, 50);
  }
}

function restart() {
  i = 0;
  messageEl.textContent = "";
  typeMessage();
}

window.onload = () => {
    titleEl.textContent = "Happy Birthday Albe!";
    typeMessage();
    startConfetti();
    createStars();
    const music = document.getElementById("birthday-audio");
    music.volume = 0.5;
  
    music.play().catch(() => {
      document.body.addEventListener("click", () => {
        music.play();
      }, { once: true });
    });
  };
  

function startConfetti() {
    const duration = 20000; 
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 20,
      spread: 180,
      ticks: 120,
      zIndex: 0
    };
  
    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();
  
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
  
      confetti(Object.assign({}, defaults, {
        particleCount: 40,
        origin: {
          x: Math.random() * 0.6 + 0.2, 
          y: Math.random() * 0.4 
        }
      }));
    }, 300); 
  }

  
  
  