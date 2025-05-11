const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = Array.from({ length: 200 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  radius: Math.random() * 1.5,
  speed: Math.random() * 0.3 + 0.05
}));

function animateStars() {
  ctx.fillStyle = '#0b0c2a';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#ffffffaa';
    ctx.fill();

    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(animateStars);
}
animateStars();

let index = 0;
const slides = document.querySelectorAll(".slide");
setInterval(() => {
  slides[index].style.display = "none";
  index = (index + 1) % slides.length;
  slides[index].style.display = "block";
}, 3000);

window.onload = () => {
  const music = document.getElementById('bg-music');
  music.volume = 0.5;
};