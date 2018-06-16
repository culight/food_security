<template>
  <div class="grid-container fluid" style="border: 2px solid yellow">

    <div class="grid-x">
      <div class="cell medium-3" style="border: 2px solid red">
      left
      </div>

      <div class="cell medium-8" style="border: 2px solid blue">
        <GmapMap
          :center="{lat:10, lng:10}"
          :zoom="7"
          map-type-id="terrain"
          style="width: 500px; height: 300px"
        >
          <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
          />
        </GmapMap>
      </div>

    </div>
  </div>
  </section>
</template>
