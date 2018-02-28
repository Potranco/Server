const menu = 'Menu' // Future template Sidebar
const home = (title, user) => `
<body>
    <h1>${title}</h1>
    <h2>Bienvenido ${user.name}</h2>
    ${menu}
</body>
`

export default home
