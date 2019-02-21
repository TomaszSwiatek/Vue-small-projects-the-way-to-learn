<template>
  <footer>
    <p>Title of website: {{title}}</p>
    <p>{{copyright}}.</p>
  </footer>
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
    return {
      copyright: `Copyright ${this.getYear()}. Respect this or witcher will follow you.`
    };
  },
  created() {
    //to life cycle hooks ktory odpowiada za odpalenie tej funkcji kiedy component jest po raz pierwszy stworzony.
    //w drugim argumencie metody $on, do ktorej przekazujemy (w pierwszym arg.) nazwe funkcji z headera, przekazujemy callback function - to znaczy taka funkcje tkora sie wykona na koniec tej funkcji.
    //w konsoli beda pokazywac sie ostrzeżenia ponieważ jest ot niewskazana metoda komunikowania sie pomiedzy komponnentami i mam jej tylko uzyc kiedy chce porozumiec pomiedzy dwoma danymi komponentami.
    bus.$on("titleChanged", data => {
      this.title = data; //w data przekazujemy po prostu ten string ktory ma sie wyswielic z fukncji $emit - czyli charming characters. natomiast ta pierwsza wartosc to nazwa funkcji ktora przekazujemy przez emit. Składnia jest taka ze drugi argument musimy podac za pomoca funkcji anonimowej.
    });
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

