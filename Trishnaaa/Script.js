let highestZ = 1;

document.addEventListener("contextmenu", e => e.preventDefault());

document.querySelectorAll(".paper").forEach(paper => {

  let offsetX = 0;
  let offsetY = 0;
  let posX = 0;
  let posY = 0;
  let rotation = Math.random() * 30 - 15;
  let isDragging = false;

  paper.style.transform = `rotate(${rotation}deg)`;

  // ---------- DESKTOP ----------
  paper.addEventListener("mousedown", (e) => {
    isDragging = true;
    paper.style.zIndex = highestZ++;
    offsetX = e.clientX - posX;
    offsetY = e.clientY - posY;
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    posX = e.clientX - offsetX;
    posY = e.clientY - offsetY;

    paper.style.transform =
      `translate(${posX}px, ${posY}px) rotate(${rotation}deg)`;
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

  // ---------- MOBILE ----------
  paper.addEventListener("touchstart", (e) => {
    isDragging = true;
    paper.style.zIndex = highestZ++;

    const touch = e.touches[0];
    offsetX = touch.clientX - posX;
    offsetY = touch.clientY - posY;
  });

  document.addEventListener("touchmove", (e) => {
    if (!isDragging) return;

    const touch = e.touches[0];

    posX = touch.clientX - offsetX;
    posY = touch.clientY - offsetY;

    paper.style.transform =
      `translate(${posX}px, ${posY}px) rotate(${rotation}deg)`;
  });

  document.addEventListener("touchend", () => {
    isDragging = false;
  });

});
