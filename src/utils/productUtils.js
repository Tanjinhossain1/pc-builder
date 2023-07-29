
export const getRandomProducts = (products, count) => {
    const shuffledProducts = products?.sort(() => 0.5 - Math.random());
    return shuffledProducts?.slice(0, count);
  };

export const getRandomCategoryProducts =  (products, countPerCategory) => {
    // Group products by category
    const productsByCategory = products?.reduce((acc, product) => {
      acc[product.category] = acc[product.category] || [];
      acc[product.category].push(product);
      return acc;
    }, {});
  
    // Get all unique categories
    const categories = Object.keys(productsByCategory);
  
    // Shuffle the categories randomly
    for (let i = categories.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [categories[i], categories[j]] = [categories[j], categories[i]];
    }
  
    // Get random products from each category
    const randomProducts = [];
    const selectedCategories = new Set();
    for (const category of categories) {
      if (selectedCategories.size === countPerCategory) {
        break; // We have selected enough categories, so stop.
      }
      const productsInCategory = productsByCategory[category];
      const randomIndex = Math.floor(Math.random() * productsInCategory.length);
      randomProducts.push(productsInCategory[randomIndex]);
      selectedCategories.add(category);
    }
  
    return randomProducts;
  };
  