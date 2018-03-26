export default function(content) {
  return `
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Katherine Manning</title>
      </head>
      <body>
        <div id="app">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
}
