<template>
  <header>
    <h1 @click="changeTitle">{{title}}</h1>
  </header>
</template>

<script>
import { bus } from "../main";
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
      // this.title = "Charming characters";
      //natomiast jezeli chcemy wemitowac event aby ta funkcja zmieniala wszystkie propy we wszystkich komponentach to musimy zrobic tak: (taki sam prop jest jeszcze ustawiony w footerze - podejrzyj tagi html w app.vue):
      // this.$emit("changeTitle", "Charming characters"); //dwa argumenty metody: $emit('nazwaEmitowanejMetody', "zmienianaWartosc")
      //opcja trzecia : uzycie bus event:
      this.title = "Charming Characters";
      // emitujemy by reactywnie wplynac na footer, ale nie zmienimy za pomocą tego wartosci w headerze wiec powyzej poprostu przypisujemy wartosc nowa do title;
      bus.$emit("titleChanged", this.title);
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
