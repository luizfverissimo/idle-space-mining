
/**
 * Create a random plant with size and color.
 */
export function planetGenerator () {
  const minSize = 100
  const maxSize = 300

  const size = Math.floor(Math.random() * (maxSize - minSize) + minSize)

  // Generate a random color for the planet in the HSL model, with a fixed lightness of 50%
  const h = Math.floor(Math.random() * 360);  // Generate a random hue value between 0 and 359
  const s = Math.floor(Math.random() * 101);  // Generate a random saturation value between 0 and 100
  const l = 40;  
  const color = `hsl(${h}, ${s}%, ${l}%)`;

  return { size, color };
}

/**
 * Insert a SVG in a random location of the container.
 * @param {string} svgUrl - Path or url to SVG image.
 */
export function addSvgToRandomLocation(svgUrl) {
  const containerId = 'planet-container'
  const container = document.getElementById(containerId);
  if (!container) return

  const img = document.createElement('img');

  img.src = svgUrl;

  img.width = 32;
  img.height = 32;

  const x = Math.floor(Math.random() * (container.offsetWidth - img.width));
  const y = Math.floor(Math.random() * (container.offsetHeight - img.height));

  img.style.left = `${x}px`;
  img.style.top = `${y}px`;
  img.style.position = 'absolute'

  container.appendChild(img);
}