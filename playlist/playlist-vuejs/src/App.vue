
<template>
  <!-- to jest rootowy component aplikacji w ktorej mozemy zagniezdzac inne komponenty. -->
  <div>
    <!-- do @changetitle - tu emitujemy z wnetrza event i robimy nasluch, bo tu tworzymy event na changeTitle czyli nazwe funckji z glebi komponentu. do tego eventu przypisujemy metodę która zdefinujemy w root component, a jako params dajemy $event - który to parametr przechowuje w tej chwili wartosc przekazana z emitowanej metody z wewnatrz komponentu ( drugi argument w metodzie $emit) -->
    <app-header :title="title" @changeTitle="updateTitle($event)"></app-header>
    <!-- jezeli chcemy przekazac props musimy to zrobic dynamicznie - dlatego też musimy zbindowac propsa robimy to tak: :characters="characters", gdzie :nazwaPropaWewChildcomponent="nazwaZmiennej/ObiektuWewDatyApp-komponentuRodzica" -->
    <!-- reasumujac: jeżeli chcę w nawiasach przekazać obiekt a nie string to musze zbindować propsa.     <characters :prop="obiekt"></characters> -->
    <characters :characters="characters"></characters>
    <app-footer :title="title"></app-footer>
  </div>
</template>

<script>
// tak sie rejestruje komponent lokalnie - tylko app.vue bedzie mialo do niego dostęp. trzeba go tu importować:
// dodatkowo w export defaults dodajemy sekcje : components: {}
import Characters from './components/Characters.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    characters: Characters, //nazwa komponentu: nazwa obiektu komponentu
    'app-header': Header, //to w sumie tutaj nadaje nazwę obiektowi - pewnie jezeli by nadac taka samą nazwę tagowi html jak nazwa obiektu ktory przekazujemy - ktory jest nazwa pliku komponentu to bysmy mogli to dzieki es6 zapisać tylko: Header
    'app-footer': Footer
  },
  data() {
    return {
      title: "Witcher's characters", //goes to prop to app-header
      characters: [
        { name: 'Wiedźmin', speciality: 'Troubles', show: false },
        { name: 'Yennefer', speciality: 'Spell', show: false },
        { name: 'Ciri', speciality: 'Personal charm', show: false },
        { name: 'Zoltan', speciality: 'Card games', show: false },
        {
          name: 'Jaskier',
          speciality: 'Playing on the instruments',
          show: false
        },
        { name: 'Milva', speciality: 'Archery', show: false }
      ]
    };
  },
  methods: {
    // updatedTitle === $event z nasluchu na app-header w tym pliku.
    updateTitle(updatedTitle) {
      this.title = updatedTitle; //poprostu by zmiennic globalnie propa, który został zmodyfikowany w komponencie app-header, przypisujemy do defaultowej wartości z obiektu data root komponent nową wartość przekazaną w metodzie emit, którą przypieliśmy do buttonu w app-header component. I tym sposobem tak naprawde zmieniamy daną zapisana globalnie w root komponent ktora ma wpływ na wszystkie propy w child componentach
    }
  }
};
</script>

<style lang="scss" scoped>
// scopy dodaja specyficzny atrybut z unikalnym kluczem co tworzy zwykly selektor css, i przez to wszystkie style sa unikalne - mozna zobaczyc w inspektorze. jak mam dwa componenty z dodanym scope stylem to w headzie linkuje dwa pliki ze stylami gdzie sa dla kazdego taga specyficzne atrybuty.
h3 {
  color: pink;
}
</style>
