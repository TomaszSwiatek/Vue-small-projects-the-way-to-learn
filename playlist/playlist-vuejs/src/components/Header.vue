<template>
  <header>
    <h1>{{title}}</h1>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: "Witcher's characters"
    };
  }
};
</script>



<style lang="scss" scoped>
header {
  background: lightgreen;
  padding: 0.5rem;
  h1 {
    color: #222;
    text-align: center;
  }
}
</style>
