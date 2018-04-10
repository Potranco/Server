export default (body) => `<!DOCTYPE html>
<html>
<head>
  <title>Project D20</title>
  <link rel="stylesheet" type="text/css" href="/css/index.css">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body class="ActiveSideBar">
  <div id="app">${body}</div>
  <script src="/main.js"></script>
</body>
</html>
`
