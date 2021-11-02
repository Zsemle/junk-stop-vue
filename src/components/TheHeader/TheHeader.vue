<template>
  <div class="the-header">
    <p>Great App</p>
    <MainMenu/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MainMenu from '../MainMenu/MainMenu.vue';

export default Vue.extend({
  name: 'TheHeader',
  components: {
    MainMenu,
  },
});
</script>

<style lang="scss" scoped>
.the-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid grey;
}

</style>
