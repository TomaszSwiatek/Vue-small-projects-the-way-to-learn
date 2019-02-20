<template>
  <header>
    <h1 @click="changeTitle">{{title}}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {};
  },
  methods: {
    changeTitle() {
      this.title = "Charming characters";
    }
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
