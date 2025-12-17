/* global WebImporter */

/**
 * Parser for carousel-hero block variant
 * Converts hero carousel slideshow into AEM block table format
 * Source: GK Brand Clothing homepage slideshow
 * Generated: 2025-12-17
 */

export default function parse(element, { document }) {
  const cells = [];

  // Find all slides within the carousel
  const slides = element.querySelectorAll('.slideshow__slide');

  slides.forEach((slide) => {
    // Extract image from slide
    const img = slide.querySelector('img');
    if (img) {
      cells.push([img]);
    }

    // Extract heading text
    const heading = slide.querySelector('.hero__title, h1, h2');
    if (heading) {
      const headingText = heading.textContent.trim();
      if (headingText) {
        cells.push([headingText]);
      }
    }

    // Extract CTA link
    const link = slide.querySelector('.hero__link a, a.btn');
    if (link) {
      cells.push([link]);
    }
  });

  const block = WebImporter.Blocks.createBlock(document, {
    name: 'Carousel-Hero',
    cells
  });

  element.replaceWith(block);
}
