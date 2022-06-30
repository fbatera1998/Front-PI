<template>
  <div id="wrapper">
    <headerVue />
    <div>
      <section class="shop-page">
        <div class="adjust-page">
          <div class="row">
            <menu-vue class="col-sm-2" />

            <div class="col-sm-10 adjust-home-float">
              <fade-transition origin="center" mode="out-in" :duration="250">
                <router-view :key="$router.fullPath"></router-view>
              </fade-transition>
            </div>
          </div>
        </div>
      </section>
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
