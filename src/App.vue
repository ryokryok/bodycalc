<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <router-view/>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
  @import "../node_modules/bulma/bulma.sass";
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    color: #2c3e50;
  }
  
  #nav {
    padding: 10px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
