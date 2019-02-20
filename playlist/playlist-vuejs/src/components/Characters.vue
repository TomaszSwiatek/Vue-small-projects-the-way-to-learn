!<template>
  <div id="characters">
    <ul>
      <li
        @click="character.show = !character.show"
        v-for="character in characters"
        :key="character.name"
      >
        <h2>{{character.name}}</h2>
        <h3 v-show="character.show">{{character.speciality}}</h3>
      </li>
    </ul>
    <button @click="deleteCharacter">Delete character</button>
  </div>
</template>

<script>
export default {
  // props: ["characters"], //chcemy otrzymac dane z root componentu i przekazac je dalej do v-for wiec piszemy to co napiszemy lub napisalismy w-forze czyli nazwe obiektu.
  //zamiast przekazywania tablicy z propsami mozemy stworzy obiekt by dodac validacje:
  props: {
    characters: {
      type: Array, //spodziewamy sie otrzymac tablice (obiektów)
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    deleteCharacter() {
      this.characters.pop(); //metoda pop wywala ostatni item z tablicy.
    }
  }
};
</script>

<style lang="scss" scoped>
#characters {
  width: 100%;
  max-width: 1200px; //powyzej zostaną puste boki?
  margin: 2rem auto; //align center
  padding: 0 1.2rem;
  box-sizing: border-box; //!
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
}
li {
  flex-grow: 1; //If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. z tego co pamietam to tez by ustawic wiekszy grow wpierw trzeba ustawic wszystkim pozostałym wlasnie grow na 1 bybylo do czego sie odniesc.
  flex-basis: 300px; //jakbym napisal width:300px; i flex-basis:auto; to wyszloby na to samo

  text-align: center;
  padding: 2rem;
  border: 1px solid #222;
  margin: 0.6rem;
}
</style>
