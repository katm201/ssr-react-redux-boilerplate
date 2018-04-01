module.exports = {
    "rules": {
      "react/jsx-filename-extension": "disable",

    },
    "extends": "airbnb",
    "env": {
      "browser": true,
      "node": true
    },
    "globals": {
      "document": false
    },
    "overrides": [
      {
        "excludedFiles": "*.test.js",
      }
    ]
};
