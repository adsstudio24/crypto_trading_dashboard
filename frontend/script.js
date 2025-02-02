async function getPrices() {
    const response = await fetch('http://localhost:5000/prices');
    const prices = await response.json();
    document.getElementById("prices").innerHTML = Object.entries(prices).map(([coin, data]) => 
        `<li>${coin.toUpperCase()}: $${data.usd}</li>`).join("");
}
