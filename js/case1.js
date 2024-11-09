const rotateLetters = () => {
  const cards = document.querySelectorAll(".card, .home");
  const letters = [];

  cards.forEach((card) => {
    const paragraph = card.getElementsByTagName("p")[0];
    if (paragraph && paragraph.textContent.trim()) {
      letters.push(paragraph.textContent);
    } else {
      letters.push("A");
    }
  });

  setInterval(() => {
    if (letters.length > 1) {
      const lastLetter = letters.pop();
      letters.unshift(lastLetter);

      cards.forEach((card, index) => {
        const paragraph = card.getElementsByTagName("p")[0];
        if (paragraph) {
          paragraph.textContent = letters[index];
        }
      });
    }
  }, 1000);
};

rotateLetters();
