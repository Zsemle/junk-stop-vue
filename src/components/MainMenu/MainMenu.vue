<template>
  <div class="main-menu">
    <div class="main-menu__trigger"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MainMenu',
});
</script>

<style lang="scss" scoped>
.main-menu__trigger{
  width: 30px;
  height: 30px;
  background-color: green;
}

</style>
