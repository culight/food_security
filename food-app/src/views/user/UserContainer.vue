<template>
  <div class="user-container">
    <div class="top-row grid-x grid-padding-x align-center">
      <div class="cell shrink grid-x">
        <div class="cell medium-8">
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
      </div>
    </div>

    <div class="grid-x grid-padding-x grid-padding-y align-center">

      <!-- Consumer content -->
      <Consumer v-if="currentUserType === 'consumer'" />

      <!-- Gardener content -->
      <Gardener v-else-if="currentUserType === 'gardener'" />

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
import Volunteer from '@/views/user/Volunteer.vue';

export default {
  components: {
    Consumer,
    Gardener,
    Volunteer,
  },
  data() {
    return {
      currentUserType: '',
    };
  },
  methods: {
    switchUser(userType) {
      this.currentUserType = userType;
    },
  },
};
</script>

<style lang="sass">
</style>
