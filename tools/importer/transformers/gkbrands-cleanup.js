/* global WebImporter */

/**
 * Transformer for GK Brand Clothing site cleanup
 * Purpose: Remove navigation drawers, toolbars, and non-content elements
 * Applies to: All GK Brand Clothing pages
 * Generated: 2025-12-17
 */

const TransformHook = {
  beforeTransform: 'beforeTransform',
  afterTransform: 'afterTransform'
};

export default function transform(hookName, element, payload) {
  if (hookName === TransformHook.beforeTransform) {
    // Remove navigation drawers and mobile menus
    WebImporter.DOMUtils.remove(element, [
      '#NavDrawer',
      '#CartDrawer',
      '.drawer',
      '.toolbar',
      '.mobile-nav',
      '.mobile-nav__social'
    ]);
  }

  if (hookName === TransformHook.afterTransform) {
    // Additional cleanup after block parsing if needed
  }
}
