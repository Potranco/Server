const menu = 'Menu' // Future template Sidebar
function getPage ({title, user, pageName}) {
  let pageContent = `
    <body>
        <h1>${title}</h1>
        <h2>Bienvenido ${user.name}</h2>
        ${menu}
    </body>
    `
  return pageContent
}

export default getPage
