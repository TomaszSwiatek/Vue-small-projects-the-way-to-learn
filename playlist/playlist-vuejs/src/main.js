// importy to zasługa es6
import Vue from 'vue'
import App from './App.vue'
// import Characters from './Characters.vue'  //tego chyba tu nie potrzebujemy jak juz importujemy ten komponent do rootowego komponentu

// rejestrowanie komponentu globalnie odbywa sie w ten sposób. jako drugi argument przekazujemy obiekt, ten który importujemy z scriptu w ktorym jest export{}. taka akcja. Taki globalny component bedzie mogl byc uzywany przez kazdego - tzn kazdy component w apce - też te child parenty.
// Vue.component('characters', Characters);

new Vue({
  el: '#app',
  //ta metoda renderuje importowany u gory root component nazwany : App.vue i przerabia ten vue component na kod html który znajdzie sie w tagu wybranym w kluczu : el: '#app', czyli w div#app w index.html
  render: h => h(App)
})
