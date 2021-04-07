module.exports = {
  "presets": ["next/babel"],
  "plugins": [
    ["prismjs", {
      "languages": ["javascript", "css", "html", "php"],
      "plugins": ["line-numbers", "show-language"],
      "theme": "okaidia",
      "css": true
    }]
  ]
};
