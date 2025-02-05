const container = document.body.querySelector(".gallery-scroller");

// Mouse event
let flag = false;
container.addEventListener("mousedown", () => (flag = true));
container.addEventListener("mouseup", () => (flag = false));
container.addEventListener("mouseleave", () => (flag = false));
container.addEventListener("mousemove", (event) => {
  flag && scrollByDelta(event.movementX * -10);
});
container.addEventListener("wheel", (event) => {
  event.preventDefault();
  scrollByDelta((event.deltaX + event.deltaY) * 5);
});

function scrollByVect(vect) {
  const { width } = container.getBoundingClientRect();
  scrollByDelta(width * vect);
}

function scrollByDelta(delta) {
  container.scrollLeft += delta;
}