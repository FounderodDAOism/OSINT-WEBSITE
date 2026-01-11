console.log("Search JS loaded");

const params = new URLSearchParams(window.location.search);
const query = params.get("q");

console.log("Query:", query);
console.log("Tools loaded:", typeof tools, tools?.length);

const grid = document.getElementById("toolsGrid");
const title = document.getElementById("pageTitle");

if (!query) {
  title.textContent = "No search query provided";
  grid.innerHTML = "<p>No query.</p>";
  throw new Error("No query");
}

if (typeof tools === "undefined") {
  title.textContent = "ERROR: tools-data.js not loaded";
  grid.innerHTML = "<p>Tools data missing.</p>";
  throw new Error("tools is undefined");
}

title.textContent = `Search results for "${query}"`;

function renderStars(r) {
  return "★".repeat(r) + "☆".repeat(5 - r);
}

const results = tools.filter(t =>
  t.name.toLowerCase().includes(query.toLowerCase()) ||
  t.desc.toLowerCase().includes(query.toLowerCase())
);

console.log("Results:", results.length);

if (results.length === 0) {
  grid.innerHTML = "<p>No tools found.</p>";
}

results.forEach(tool => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${tool.name}</h3>
    <p>${tool.desc}</p>
    <a href="${tool.link}" target="_blank" class="tool-link">Visit Tool</a>
    <div class="tool-meta">
      <span class="price">${tool.price}</span>
      <span class="stars">${renderStars(tool.rating)}</span>
    </div>
  `;

  grid.appendChild(card);
});
