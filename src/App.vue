<template>
  <div class="row">
    <menuVue class="col-md-2" />
    <div class="col-md-10">
      <headerVue />
      <div class="">
        <fade-transition origin="center" mode="out-in" :duration="250">
          <router-view :key="$route.fullPath" />
        </fade-transition>
      </div>
    </div>
  </div>
</template>
<script>
import menuVue from "@/layout/menuVue.vue";
import headerVue from "@/layout/headerVue.vue";
export default {
  components: { menuVue, headerVue },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Assistant:wght@300;400&display=swap");
#app {
  font-family: Assistant, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: 300;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
