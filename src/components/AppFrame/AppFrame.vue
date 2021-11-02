<template>
  <div class="app-frame">
    <TheHeader/>
    <div>
      <StopOverview/>
    </div>
    <TheFooter/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import StopOverview from '../StopOverview/StopOverview.vue';
import TheHeader from '../TheHeader/TheHeader.vue';
import TheFooter from '../TheFooter/TheFooter.vue';

export default Vue.extend({
  name: 'AppFrame',
  components: {
    TheHeader,
    TheFooter,
    StopOverview,
  },
});
</script>

<style lang="scss" scoped>

</style>
