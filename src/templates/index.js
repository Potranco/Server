export default (body) => `<!DOCTYPE html>
<html>
<head>
  <title>Project D20</title>
  <link rel="stylesheet" type="text/css" href="/css/index.css">
</head>
<body class="ActiveMenu">
  <div id="app">
    ${body}
  </div>

  <!-- to create components -->
    <div class="SideBar">
      <div class="CloseSideBar"></div>
      <div class="OpenSideBar"></div>
      <div class="ShowUser">
        <div class="Avatar"></div>
        <a href=""></a>
      </div>
      <div class="Dialog ShowUserMenu">
        <a href="">Ajustes</a>
        <a href="">Logout</a>
      </div>
      <ul class="MenuApp">
        <li><a href="">Personajes</a></li>
        <li><a href="">Campañas</a></li>
        <li><a href="">Biblioteca</a></li>
      </ul>
    </div>

    <div class="wrap Content">
      <div class="Header">
        <h1>Personajes</h1>
        <div class="CreateRandom">Crear personaje</div>
        <div class="CharList">
          <ul>
            <li>
              <div class="More">+</div>
              Más...
            </li>
          </ul>
        </div>
      </div>
      <div class=CampaignList>
        Listado de Campañas por definir
      </div>
    </div>


  <script src="/main.js"></script>
</body>
</html>
`
