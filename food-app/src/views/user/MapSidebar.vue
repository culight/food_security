<template>
  <div class="sidebar">
    <div :key="l.id" v-for="l in locations" class="box">
      <p><strong>Garden</strong</p>
      <p>{{ l.address.street }}</p>
      <p>{{ l.city }}, {{ l.address.zip }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'locations',
  ],
};
</script>
