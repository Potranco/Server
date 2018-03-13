const menu = `<div id="app"></div>
  <script src="app.js"></script>` // Future template Sidebar
function getPage ({title, user, pageName}) {
  let pageContent = `
    <h1>${title}</h1>
    <h2>Bienvenido ${user.name}</h2>
    ${menu}
  `
  return pageContent
}

export default getPage
