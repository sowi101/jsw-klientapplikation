<script>
export default {
  name: "Header"
}
</script>


<template>
  <div class="bg-white shadow">
    <!-- Header -->
    <header class="d-flex justify-content-center py-3 fs-5">
      <!-- Navigation -->
      <nav class="navbar">
        <!-- Name of website with link to homepage -->
        <RouterLink to="/" class="text-dark navbar-brand fs-4 fw-bold">Handarbetsloggen</RouterLink>
        <ul class="nav nav-pills">
          <!-- Dropdown menu with links -->
          <li class="nav-item dropdown"><a href="#" class="nav-link text-dark dropdown-toggle" data-bs-toggle="dropdown"
              aria-expanded="false">Projekt</a>
            <ul class="dropdown-menu">
              <li>
                <RouterLink class="dropdown-item text-dark" to="lagg-till-projekt">Lägg till nytt projekt</RouterLink>
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
      </nav>
    </header>
  </div>
</template>