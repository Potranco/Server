function getPage ({title, user, pageName}) {
  let pageContent = `
    <h1>${title}</h1>
    <h2>Bienvenido ${user.name}</h2>
  `
  return pageContent
}

export default getPage
