// Get elements
const open = document.getElementById('openProposal');
const modal = document.getElementById('proposalModal');
const close = document.getElementById('closeModal');
const accept = document.getElementById('acceptBtn');
const msg = document.getElementById('proposalMsg');

// Open modal when button clicked
open.addEventListener('click', () => {
  modal.classList.remove('hidden');

  // optional: play background music (if file in assets/music/love.mp3)
   new Audio('love.mp3').play();
});

// Close modal when ✕ clicked
close.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// Accept button
accept.addEventListener('click', () => {
  msg.textContent = "She said YES! 💖🎉";
  accept.disabled = true;
  accept.textContent = "Celebrating... 🥳";
});
// Floating hearts generator
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}
setInterval(createHeart, 1000);
function launchConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.top = "-10px";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.width = "8px";
    confetti.style.height = "8px";
    confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.opacity = 0.8;
    confetti.style.animation = "fall 3s linear forwards";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}
accept.addEventListener('click', () => {
  document.getElementById('proposalMsg').textContent = "She said YES! 💖";
  accept.disabled = true;
  accept.textContent = "Celebrating 🎉";
  launchConfetti();  // 🎉 trigger confetti
});
const playBtn = document.getElementById('playMusic');
const audio = document.getElementById('bgMusic');

playBtn.addEventListener('click', () => {
  audio.play().catch(error => {
    alert("Music play failed. Check file path or format!");
  });
  playBtn.disabled = true;
  playBtn.textContent = "Music Playing 🎶";
});


