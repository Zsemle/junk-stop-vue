<template>
  <div class="stop-overview"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import json from '../../mocks/driver_route_sample.json';

export default Vue.extend({
  name: 'StopOverview',
  computed: {
    driverRoute() {
      return json;
    },
  },
});
</script>

<style lang="scss" scoped>
.stop-overview{
  min-height: 70vh;
}
</style>
