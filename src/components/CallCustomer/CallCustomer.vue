<template>
  <div class="call-customer">
    <template v-if="phoneNumber">
      <a title="Call the customer" :href=phoneLink>Call customer</a>
    </template>
    <span v-else>phone number unavailable</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'StopOrder',
  props: {
    phoneNumber: {
      default: null,
      type: String,
    },
  },
  computed: {
    phoneLink() {
      return `tel:${this.phoneNumber}`;
    },
  },

});
</script>

<style lang="scss" scoped>
.stop-order{
  border: 1px solid rgb(51, 128, 0);
}
</style>
