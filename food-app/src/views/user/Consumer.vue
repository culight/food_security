<template>
  <div class="consumer-container cell grid-x grid-padding-x">

    <div class="search-container large-8 cell">
      <input type="search" name="search" placeholder="Search.." class="animated-search-form">
      <!-- <div class="button">Search</div> -->
    </div>

    <div class="map-container large-8 cell">
      <l-map :zoom="zoom" ref="mymap" :center="center" style="width: 100%; height: 500px" :options='{zoomControl: true}'>
        <l-tile-layer :url="url"></l-tile-layer>
        <l-marker v-for="item in markers" :key="item.id" :lat-lng="item.latlng">
          <l-popup :content="item.content"></l-popup>
        </l-marker>
      </l-map>
    </div>
    <!-- <div style="height: 10%; overflow: auto;">
      <h3>Simple map</h3>
      Marker is placed at {{ marker.lat }}, {{ marker.lng }}
    </div>
    <l-map style="height: 90%" :zoom="zoom" :center="center">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker :lat-lng="marker"></l-marker>
    </l-map> -->
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data() {
    return {
      zoom:13,
      center: L.latLng(47.413220, -1.219482),
      url:'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      marker: L.latLng(47.413220, -1.219482),
      markers: []
    }
  },
  methods: {
    onPan(e) {
      console.log(e);
    }
  },
  mounted() {
  	const map = this.$refs.mymap.mapObject;
    map.addControl(new L.Control.Fullscreen());
  }
}
</script>
