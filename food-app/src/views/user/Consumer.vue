<template>
  <div class="consumer-container cell grid-x grid-padding-x">

    <div class="search-container large-8 cell">
      <input type="search" name="search" placeholder="Search.." class="animated-search-form">
      <!-- <div class="button">Search</div> -->
    </div>

    <div class="map-container large-8 cell">
      <l-map :zoom="zoom" ref="mymap" :center="L.latLng(lat, lng)" style="width: 100%; height: 500px" :options='{zoomControl: true}'>
        <l-tile-layer :url="url"></l-tile-layer>
        <l-marker v-for="item in markers" :key="item.id" :lat-lng="item.latlng">
          <l-popup :content="item.content"></l-popup>
        </l-marker>
      </l-map>
    </div>

    <div class="sidebar-container">
      <map-sidebar />
    </div>
  </div>
</template>

<script>
import L from 'leaflet';
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';
import MapSidebar from './MapSidebar.vue';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    MapSidebar
  },
  data() {
    return {
      zoom: 13,
      lat: 39.765477,
      lng: -86.164100,
      url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      marker: L.latLng(47.413220, -1.219482),
      markers: [],
      L
    };
  },
  methods: {
    onPan(e) {
      console.log(e);
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
      enableHighAccuracy: true
    })
      .then(coordinates => {
        console.log(coordinates);
        this.lat = coordinates.lat;
        this.lng = coordinates.lng;
      });
  },
};
</script>
