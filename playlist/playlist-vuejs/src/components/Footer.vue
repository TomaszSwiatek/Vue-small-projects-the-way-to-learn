<template>
  <footer>
    <p>{{copyright}}</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      copyright: `Copyright ${this.getYear()}. Respect this or witcher will follow you.`
    };
  },
  methods: {
    getYear() {
      let year = new Date().getFullYear();
      return year;
    }
  }
};
</script>

<style lang="scss" scoped>
footer {
  background: #222;
  padding: 10px;
  p {
    text-align: center;
    color: lightgreen;
  }
}
</style>

