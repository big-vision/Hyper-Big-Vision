exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    borderColor: '#393f46',
    cursorColor: '#00acc8',
    foregroundColor: '#f9f7f6',
    backgroundColor: '#111820',
    colors: [
      // Normal Colors
      '#040303', // black
      '#f05f45', // red
      '#6ecb98', // green
      '#ffd756', // yellow
      '#00acc8', // blue
      '#44273a', // magenta
      '#00acc8', // cyan
      '#dbd9d6', // white
      // Bright Colors
      '#393f46', // black
      '#f98268', // red
      '#8ed6ac', // green
      '#ffd756', // yellow
      '#00bdd3', // blue
      '#674d5d', // magenta
      '#00bdd3', // cyan
      '#f9f7f6' // white
    ]
  });
}