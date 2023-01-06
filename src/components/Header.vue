<script>
export default {
  name: "Header"
}
</script>


<template>
  <div class="bg-white shadow">
    <!-- Header -->
    <header class="d-flex col-10 col-md-7 mx-auto py-3 fs-5">
      <!-- Navigation -->
      <nav class="navbar navbar-expand-lg w-100">
        <div class="container-fluid">
          <!-- Name of website with link to homepage -->
          <RouterLink to="/" class="text-dark navbar-brand fs-4 fw-bold">Handarbetsloggen</RouterLink>
          <!-- Toggler for mobile menu -->
          <button class="navbar-toggler me-0" type="button" data-bs-toggle="collapse" data-bs-target="#menu"
            aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>


          <div class="collapse navbar-collapse" id="menu">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <!-- Dropdown menu with links -->
              <li class="nav-item dropdown">
                <a href="#" class="nav-link text-dark dropdown-toggle" data-bs-toggle="dropdown"
                  aria-expanded="false">Projekt</a>
                <ul class="dropdown-menu">
                  <li>
                    <RouterLink class="dropdown-item text-dark" to="lagg-till-projekt">Lägg till nytt projekt
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="dropdown-item text-dark" to="projekt">Se alla projekt</RouterLink>
                  </li>
                </ul>
              </li>
              <!-- Regular links -->
              <li class="nav-item">
                <RouterLink to="verktyg" class="nav-link text-dark">Verktyg</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="garn" class="nav-link text-dark">Garn</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>