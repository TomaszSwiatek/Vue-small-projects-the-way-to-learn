
<template>
  <!-- to jest rootowy component aplikacji w ktorej mozemy zagniezdzac inne komponenty. -->
  <div>
    <app-header></app-header>
    <characters></characters>
    <app-footer></app-footer>
  </div>
</template>

<script>
// tak sie rejestruje komponent lokalnie - tylko app.vue bedzie mialo do niego dostęp. trzeba go tu importować:
// dodatkowo w export defaults dodajemy sekcje : components: {}
import Characters from "./components/Characters.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    characters: Characters, //nazwa komponentu: nazwa obiektu komponentu
    "app-header": Header, //to w sumie tutaj nadaje nazwę obiektowi - pewnie jezeli by nadac taka samą nazwę tagowi html jak nazwa obiektu ktory przekazujemy - ktory jest nazwa pliku komponentu to bysmy mogli to dzieki es6 zapisać tylko: Header
    "app-footer": Footer
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
// scopy dodaja specyficzny atrybut z unikalnym kluczem co tworzy zwykly selektor css, i przez to wszystkie style sa unikalne - mozna zobaczyc w inspektorze. jak mam dwa componenty z dodanym scope stylem to w headzie linkuje dwa pliki ze stylami gdzie sa dla kazdego taga specyficzne atrybuty.
h3 {
  color: pink;
}
</style>
