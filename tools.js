const params = new URLSearchParams(window.location.search);

const category = params.get("category");
const price = params.get("price");
const search = params.get("q");

const grid = document.getElementById("toolsGrid");
const title = document.getElementById("pageTitle");

/* Title logic */
let heading = "OSINT Tools";
if (category) heading = `${category.toUpperCase()} Tools`;
if (price) heading += ` – ${price}`;
if (search) heading += ` (Search: "${search}")`;

title.textContent = heading;

/* Apply filters */
const filteredTools = filterTools({
  category,
  price,
  search
});

/* Render */
renderTools(filteredTools);

function renderTools(toolsList) {
  grid.innerHTML = "";

  if (toolsList.length === 0) {
    grid.innerHTML = "<p>No tools match the selected filters.</p>";
    return;
  }

  toolsList.forEach(tool => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${tool.name}</h3>
      <p>${tool.desc}</p>
      <a href="${tool.link}" target="_blank" class="tool-link">Visit Tool</a>
      <div class="tool-meta">
        <span class="price">${tool.price}</span>
        <span class="stars">
          ${"★".repeat(tool.rating)}${"☆".repeat(5 - tool.rating)}
        </span>
      </div>
    `;

    grid.appendChild(card);
  });
}
