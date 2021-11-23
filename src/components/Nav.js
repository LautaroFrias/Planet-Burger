import React from 'react'

const Nav = () => {
    return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="/#"><img src = "../logo.png" width="50" alt="logo_burger" /></a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/#">Menú</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#">Categoría A</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/#">Categoría B</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Nav;
