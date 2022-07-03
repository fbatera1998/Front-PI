<template>
  <div class="">
    <nav
      class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white py-0 menu-Fixed"
    >
      <div class="container-fluid column" style="position: initial">
        <div class="collapse navbar-collapse adjust-column-menu">
          <h6 class="navbar-heading text-right">Bem Vindo</h6>
          <ul class="navbar-nav mb-mb-3 adjust-column-menu">
            <li class="nav-item">
              <router-link class="nav-link" to="/home"> Home </router-link>
            </li>
          </ul>
          <hr />
          <ul class="navbar-nav mb-mb-3 adjust-column-menu">
            <li class="nav-item">
              <router-link class="nav-link" to="/cadastro/aluno">
                Cadastrar Aluno
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/cadastro/docente">
                Cadastrar Docente
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/ListaAlunos">
                Lista de Alunos
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
.adjust-column-menu {
  flex-direction: column;
}
</style>
