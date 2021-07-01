<template>
<div class="app">
  <MasterHeader />
  <router-view />
</div>
</template>

<script>
import MasterHeader from "@/components/Header"
export default {
  name: "App",
  components:  {
    MasterHeader
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: 'Roboto Condensed', sans-serif;
  background: #313131;
  * {
    color: #fff;  
  }
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
