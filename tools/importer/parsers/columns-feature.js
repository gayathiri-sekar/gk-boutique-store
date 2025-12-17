/* global WebImporter */

/**
 * Parser for columns-feature block variant
 * Converts feature rows with side-by-side content into AEM block table format
 * Source: GK Brand Clothing feature sections
 * Generated: 2025-12-17
 */

export default function parse(element, { document }) {
  const cells = [];
  const row = [];

  // Find all feature items (columns)
  const items = element.querySelectorAll('.feature-row__item');

  items.forEach((item) => {
    const columnContent = [];

    // Check if this column has an image
    const img = item.querySelector('img');
    if (img) {
      columnContent.push(img);
    }

    // Extract heading
    const heading = item.querySelector('h1, h2, h3, h4, .h3, p.h3');
    if (heading) {
      columnContent.push(heading.textContent.trim());
    }

    // Extract paragraph text
    const paragraphs = item.querySelectorAll('p:not(.h3), .rte p');
    paragraphs.forEach((p) => {
      const text = p.textContent.trim();
      if (text) {
        columnContent.push(text);
      }
    });

    // Extract links
    const links = item.querySelectorAll('a.btn, a');
    links.forEach((link) => {
      columnContent.push(link);
    });

    // Add column to row if it has content
    if (columnContent.length > 0) {
      row.push(columnContent);
    }
  });

  // Create single row with all columns
  if (row.length > 0) {
    cells.push(row);
  }

  const block = WebImporter.Blocks.createBlock(document, {
    name: 'Columns-Feature',
    cells
  });

  element.replaceWith(block);
}
