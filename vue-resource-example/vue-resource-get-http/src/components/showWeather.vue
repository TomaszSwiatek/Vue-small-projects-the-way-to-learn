<template>
  <div id="show-weather">
    <button @click="getData">get poznan wheather</button>
    <!-- mozemy tak dobrac date by rozdzielic na tym etapie za pomoca vf0ra juz date na poszczegolne dni. -->
    <div class="weather" v-for="items in weather">
      {{items[6]}}
      <!-- {{items}} -->
      <!-- <div class="single-day-weather" v-for="item in items">{{item[0]}}</div> -->
      <!-- {{Math.floor(item[2].main.temp)}} -->
      <!-- <h3>Min. temp: {{Math.min(item.main.temp)}}</h3> -->
    </div>
  </div>
</template>

<script>
const API = "https://api.openweathermap.org/data/2.5/forecast?q=";
const API_ID = "&appid=8516c35a5aa25a2690f4dca7c0d11239";
import chunk from "lodash.chunk";

export default {
  data() {
    return {
      searchValue: "poznan",
      weather: []
      //   firstDay: this.weather[0]
    };
  },
  methods: {
    getData() {}
  },
  created() {
    this.$http.get(`${API}${this.searchValue}${API_ID}`).then(function(data) {
      console.log(chunk(data.body.list, 8));
      //we ll only pass first day : 3hour - period so - 24 h / 3h = 8 points to one day.

      this.weather = chunk(data.body.list, 8);
    });
  }
};
</script>

<style>
#show-weather {
  max-width: 800px;
  margin: 0 auto;
}
.single-day-weather {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
