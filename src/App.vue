<template>
  <div id="app">
    <AppFrame/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppFrame from './components/AppFrame/AppFrame.vue';

export default Vue.extend({
  name: 'App',
  components: {
    AppFrame,
  },
});
</script>

<style lang="scss" scoped>

</style>
