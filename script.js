const scenes = document.querySelectorAll(".scene");

function showScene(id) {
  scenes.forEach(scene => scene.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Сцена 1 -> Сцена 2
document.getElementById("envelope").addEventListener("click", () => {
  document.getElementById("envelope").classList.add("open");
  setTimeout(() => {
    showScene("scene2");
  }, 1500);
});

// Сцена 2 -> Сцена 3
// поочередно показываем карточки + делаем видимой кнопку
const cards = document.querySelectorAll('#gallery .card');
cards.forEach((c, i) => {
  setTimeout(()=> c.classList.add('show'), i * 350);
});

// после последней карточки показать кнопку
setTimeout(()=>{
  const btn2 = document.getElementById('btn2');
  btn2.classList.add('visible');
  btn2.setAttribute('aria-hidden','false');
}, cards.length * 350 + 600);


// Сцена 3 -> Сцена 4
document.getElementById("btn2").addEventListener("click", () => {
  showScene("scene4");
});

