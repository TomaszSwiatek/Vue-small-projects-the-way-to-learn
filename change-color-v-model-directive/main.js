// import Vue from "vue";

Vue.config.productionTip = false;

//[iszemy komponent by nauczyc sie go rejestrowac w glownym komponencie:
const NewComponent = {
  name: "NewComponent",
  data() {
    //robimy funkcje data zamiast obiektu by mozna bylo zarzadzac statami poszczegolnych kopii tego komponentu. gdybysmy tu nie zrobili funkcji zamiast obiektu to komponent by sie nie wyswietlal
    return {
      myColor: {
        color: "#fab"
      }
    };
  },
  template: `
  <div>
    <h2 v-bind:style="myColor">Best ever app i ve seen</h2>
    <label for="color">Change color</label>
    <input name="color" id="color" v-model="myColor.color"/>
  </div>`
}; //v-model spina dwie zależności - tutaj wartosc inputa z odzialywaniem na color który używamy pozniej w h2 ( w h2 robimy to za pomocą v-bind)

new Vue({
  el: "#app",
  components: {
    NewComponent
  },
  data: {
    name: "Tomek",
    myStyles: {
      color: "#fab"
    }
  },
  methods: {
    handleClick() {
      //tu koniecznie stary zapis funkcji ( inaczej zle odwola sie do this - my bedziemy sie tutaj odwolywac do zmiennych przechowywanych w obj. data)
      alert("hello tomek");
    }
  },
  template: `
  <div>
    <h1 v-bind:style="myStyles">Hello {{name}}!</h1>
    <NewComponent />
    <button v-on:click="handleClick">hello</button>
  </div>`
});
//v-bind binduje style z obiektem styl w w obiekcie data. i stamtąd ciągnie wszystkie  style zapisane javascriptowo.  ( skrót : v-bind:style="myStyles === :styles="myStyles"
// dykretywa v-on - zajmuje sie eventami. skrót to @. (v-on:click="handleClick" === @click="")
// v-model - two-way-binding
