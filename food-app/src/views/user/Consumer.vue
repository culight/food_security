<template>
  <div class="consumer-container cell grid-x grid-padding-x">

    <div class="search-container large-8 cell">
      <input @keyup.enter="doSearch" v-model="searchTerm" type="search" name="search" placeholder="Search.." class="animated-search-form">
      <!-- <div class="button">Search</div> -->
    </div>

    <div class="large-1 cell"></div>

    <div class="map-container large-8 cell">
      <l-map :zoom="zoom" ref="mymap" :center="L.latLng(lat, lng)" style="width: 100%; height: 500px" :options='{zoomControl: true}'>
        <l-tile-layer :url="url"></l-tile-layer>
        <l-marker v-for="item in searchResults" :key="item.id" :lat-lng="[item.lat, item.lon]">
          <!-- <l-popup :content="item.content"></l-popup> -->
        </l-marker>
      </l-map>
    </div>

    <div class="sidebar-container large-2 cell">
      <map-sidebar :locations="searchResults" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import L from 'leaflet';
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';
import MapSidebar from './MapSidebar.vue';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    MapSidebar,
  },
  data() {
    return {
      zoom: 13,
      lat: 39.915709,
      lng: -86.065747,
      url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      marker: L.latLng(47.413220, -1.219482),
      markers: [],
      L,
      searchTerm: '',
      searchResults: [],
    };
  },
  methods: {
    onPan(e) {
      console.log(e);
    },
    doSearch() {
      console.log('searching...', this.searchTerm);
      // axios.get(`http://localhost:5000/produce/${this.searchTerm}`)
      //   .then((response) => {
      //     this.searchResults = response.data;

      //     console.log(this.searchResults);
      //   // handle map marker placement here
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      function shuffle(array) {
        let currentIndex = array.length,
          temporaryValue,
          randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }

        return array;
      }

      axios.get('https://0bc0p6q94l.execute-api.us-east-1.amazonaws.com/dev/recycle')
        .then((res) => {
          console.log(res.data.Items);
          const arr = res.data.Items;

          const num = Math.floor(Math.random() * arr.length) + 1;

          this.searchResults = shuffle(arr.slice(0, num));
        });
      // axios.get(`https://flask-foodapp.herokuapp.com/produce/${this.searchTerm}`)
      //   .then((response) => {
      //     // this.searchResults = response.data;

      //     // this.searchResults = shuffle(arr.slice(0, num));
      //   });
    },
  },
  // computed: {
  //   center: function () {
  //     return L.latlng(this.lat, this.lng);
  //   }
  // },
  mounted() {
    const L = L;
  	this.$getLocation({
      enableHighAccuracy: true,
    })
      .then((coordinates) => {
        console.log(coordinates);
        // this.lat = coordinates.lat;
        // this.lng = coordinates.lng;
      });
  },
};
</script>
