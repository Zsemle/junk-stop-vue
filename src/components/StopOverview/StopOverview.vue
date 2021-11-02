<template>
  <div class="stop-overview">
    <CurrentStop
      :stop=currentStop
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import json from '../../mocks/driver_route_sample.json';
import CurrentStop from '../CurrentStop/CurrentStop.vue';
import { Stop } from '../../types/index';

export default Vue.extend({
  name: 'StopOverview',
  components: {
    CurrentStop,
  },
  data() {
    return {
      stops: json.stops,
    };
  },
  computed: {
    currentStop(): Stop {
      return this.stops.find((stop) => stop.status !== 4) || this.stops[this.stops.length - 1];
    },
  },
  methods: {
    completeCurrentStop() {
      console.log('complete current stop sent to api');
    },
  },
});
</script>

<style lang="scss" scoped>
.stop-overview{
  min-height: 70vh;
}
</style>
