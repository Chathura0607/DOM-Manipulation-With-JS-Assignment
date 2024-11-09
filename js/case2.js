const rotateColors = () => {
  const cards = document.getElementsByClassName("card");
  let colors = Array.from(cards).map(
    (card) => window.getComputedStyle(card).backgroundColor
  );

  setInterval(() => {
    const lastColor = colors[colors.length - 1];
    colors = [lastColor, ...colors.slice(0, -1)];

    Array.from(cards).forEach((card, index) => {
      card.style.backgroundColor = colors[index];
    });
  }, 1000);
};

rotateColors();
