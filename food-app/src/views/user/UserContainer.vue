<template>
  <div class="user-container">
    <div class="top-row grid-x grid-padding-x align-center">
      <div class="cell grid-x center-content">
        <div class="cell medium-8 center-content">
          <div class="mobile-app-toggle" data-mobile-app-toggle>
            <button :class="[currentUserType === 'consumer' ? 'is-active' : '', 'button']"
              @click="switchUser('consumer')">Consumer
            </button>
            <button :class="[currentUserType === 'gardener' ? 'is-active' : '', 'button']"
              @click="switchUser('gardener')">Gardener
            </button>
            <button :class="[currentUserType === 'volunteer' ? 'is-active' : '', 'button']"
              @click="switchUser('volunteer')">Volunteer
            </button>
          </div>
        </div>

        <div v-if="currentUserType === 'gardener'" class="cell medium-10 center-content">
          <div class="mobile-app-toggle" data-mobile-app-toggle>
            <button :class="[currentGardenType === 'garden-metrics' ? 'is-active' : '', 'button']"
              @click="switchGardenType('garden-metrics')">Garden Metrics
            </button>
            <button :class="[currentGardenType === 'plant-details' ? 'is-active' : '', 'button']"
              @click="switchGardenType('plant-details')">Plant Details
            </button>
            <button :class="[currentGardenType === 'new-garden' ? 'is-active' : '', 'button']"
              @click="switchGardenType('new-garden')">Register New Garden
            </button>
            <button :class="[currentGardenType === 'help' ? 'is-active' : '', 'button']"
              @click="switchGardenType('help')">Help & Tutorials
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="grid-x grid-padding-x grid-padding-y align-center">

      <!-- Consumer content -->
      <Consumer v-if="currentUserType === 'consumer'" />

      <!-- Gardener content -->
      <div v-else-if="currentUserType === 'gardener'">
        <Gardener v-if="currentGardenType === 'garden-metrics'" />
        <NewGarden v-else-if="currentGardenType === 'new-garden'" />
      </div>

      <!-- Volunteer content -->
      <Volunteer v-else-if="currentUserType === 'volunteer'" />

      <!-- Default content -->
      <div class="cell medium-8" v-else>
      <h3>Choose a user type</h3>
      </div>

    </div>

  </div>
</template>

<script>
import Consumer from '@/views/user/Consumer.vue';
import Gardener from '@/views/user/Gardener.vue';
import NewGarden from '@/views/user/NewGarden.vue';
import Volunteer from '@/views/user/Volunteer.vue';

export default {
  components: {
    Consumer,
    Gardener,
    NewGarden,
    Volunteer,
  },
  data() {
    return {
      currentUserType: '',
      currentGardenType: ''
    };
  },
  methods: {
    switchUser(userType) {
      this.currentUserType = userType;
    },
    switchGardenType(gardenType) {
      this.currentGardenType = gardenType;
    }
  }
};
</script>

<style lang="sass">
</style>
