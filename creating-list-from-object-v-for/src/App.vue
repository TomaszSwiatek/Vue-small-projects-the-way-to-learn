    <!-- https://www.youtube.com/watch?v=PmlipEkFSOk&index=2&t=0s&list=PLKnxnWdLGM49Lf7V-nl5zKf-JNMlZpACA-->
<template>
  <div>
    <Header />
    <h1>Heey!</h1>
    <ul>
    <!-- v-for powiela kolejno element li pobierajac dane z tablicy w data. comment to zmienna stworzona na potrzeby iteracji - coś jak i w petli for-->
    <!-- przy v-for musimy dodac atrybut key, który bindujemy (: -> v-bind:) do jakiejkolwiek unikatowej wartosci ktora powtarza sie. najlepiej jednak zrobic osobny klucz w obiekcie o nazwie id, ponieważ przyda sie to przy sciaganiu danych z public api. tego teraz nie zrobilem-->
    <li v-for="comment in comments" class="comment" :key="comment.name"> 
    <p>{{ comment.name }}</p>
    <p>{{ comment.content }}</p>
    </li>
    </ul>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header
  },
  data(){
    return{
      comments: [
      {
        name: 'Tomek',
        content: "najlepszy komentarz"
      },
      {
        name: 'Wacek',
        content: "Oł je"
      },
      {
        name: 'Kasia',
        content: "śmiga"
      },
      {
        name: 'Ania',
        content: "komentuję to"
      }
      ]
    }
  }
};
</script>
<!--
  scoped izoluje style tylko do tego component, by nawet jezeli maja taka sama nazwe to nie maja na siebie wpływu
-->
<style lang="scss" scoped>
h1 {
  color: #fab;
}
.comment{
  background: #fab;
  padding: 20px;
  margin-bottom: 10px;
  list-style: none;
  p:first-child{
    font-weight: bold;

  }
  p:last-child{
    font-size: 2em;
  }

}
</style>
