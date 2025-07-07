function bookItem(itemName) {
  alert(itemName + " booked successfully!");
}

function searchLabour() {
  const input = document.getElementById("searchInput").value.toUpperCase();
  const cards = document.querySelectorAll("#labour .card");

  cards.forEach(card => {
    const name = card.querySelector("h4").innerText.toUpperCase();
    card.style.display = name.includes(input) ? "block" : "none";
  });
}
