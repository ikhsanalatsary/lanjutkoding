module.exports = {
  "presets": ["next/babel"],
  "plugins": [
    ["prismjs", {
      "languages": ["javascript", "css", "html", "php", "typescript", "json"],
      "plugins": ["line-numbers", "show-language"],
      "theme": "okaidia",
      "css": true
    }]
  ]
};
