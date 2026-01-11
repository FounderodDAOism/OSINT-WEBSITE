function filterTools({ category, price, search }) {

  // ✅ IF NO FILTERS AT ALL → RETURN EVERYTHING
  if (!category && !price && !search) {
    return tools;
  }

  return tools.filter(tool => {

    // CATEGORY FILTER
    if (category) {
      const matchCategory = Array.isArray(tool.category)
        ? tool.category.includes(category)
        : tool.category === category;

      if (!matchCategory) return false;
    }

    // PRICE FILTER
    if (price) {
      if (tool.price !== price) return false;
    }

    // SEARCH FILTER
    if (search) {
      const q = search.toLowerCase().trim();

      const matchSearch =
        tool.name.toLowerCase().includes(q) ||
        tool.desc.toLowerCase().includes(q);

      if (!matchSearch) return false;
    }

    return true;
  });
}
