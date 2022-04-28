let game = null;
window.onload = () => {
  game = new Game();
  const choosePoke = document.getElementsByClassName("poke");
  for (var i = 0; i < choosePoke.length; i++) {
    choosePoke[i].addEventListener("click", (e) => {
      game.start(e.target.id);
      document.getElementById("game-info").classList.toggle("hidden");
      document.getElementById("poke-list").classList.toggle("hidden");
      document.getElementById("countdown-svg").className = "animate-coundown";
    });
  }
  window.addEventListener("keydown", (e) => {
    if (e.key == "q") {
      game.stop("Reset game");
      document.getElementById("game-info").classList.toggle("hidden");
      document.getElementById("poke-list").classList.toggle("hidden");
    }
  });
};
