// importy to zasługa es6
import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  //ta metoda renderuje importowany u gory root component nazwany : App.vue i przerabia ten vue component na kod html który znajdzie sie w tagu wybranym w kluczu : el: '#app', czyli w div#app w index.html
  render: h => h(App)
})
