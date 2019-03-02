<template>
  <div id="app">
    <show-weather></show-weather>
  </div>
</template>

<script>
import showWeather from "./components/showWeather";

export default {
  name: "app",
  components: {
    "show-weather": showWeather
  },
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
