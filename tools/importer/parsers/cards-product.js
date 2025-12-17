/* global WebImporter */

/**
 * Parser for cards-product block variant
 * Converts product grid items into AEM block table format
 * Source: GK Brand Clothing product listings
 * Generated: 2025-12-17
 */

export default function parse(element, { document }) {
  const cells = [];

  // Find all product items
  const products = element.querySelectorAll('.grid-product__content, .grid-product');

  products.forEach((product) => {
    const row = [];

    // Extract product image
    const img = product.querySelector('.grid-product__image, img');
    if (img) {
      row.push([img]);
    }

    // Extract product details (title and price)
    const details = [];

    // Extract product title
    const title = product.querySelector('.grid-product__title');
    if (title) {
      details.push(title.textContent.trim());
    }

    // Extract product price
    const price = product.querySelector('.grid-product__price');
    if (price) {
      details.push(price.textContent.trim());
    }

    if (details.length > 0) {
      row.push(details);
    }

    // Add product row if it has content
    if (row.length > 0) {
      cells.push(row);
    }
  });

  const block = WebImporter.Blocks.createBlock(document, {
    name: 'Cards-Product',
    cells
  });

  element.replaceWith(block);
}
