<template>
  <div class="stop-order">
    <p>order type: {{orderDetails.type}}</p>
    <p>content: {{orderDetails.stream_type}}</p>
    <p>quantity: {{orderDetails.quantity}}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Order } from '../../types/index';

export default Vue.extend({
  name: 'StopOrder',
  props: {
    orderDetails: Object as () => Order,
  },

});
</script>

<style lang="scss" scoped>
.stop-order{
  border: 1px solid rgb(51, 128, 0);
}
</style>
