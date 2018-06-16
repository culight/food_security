<template>
  <div class="user-container">
    <div class="top-row grid-x grid-padding-x align-center">
      <div class="cell shrink grid-x" style="border: 2px solid red">
        <div class="cell">
          <h3>I am a:</h3>
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
  </div>
</template>

<script>
export default {
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
