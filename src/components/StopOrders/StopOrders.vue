<template>
  <div class="stop-orders">
    <p>Orders:</p>
    <ul>
      <li v-for="stopOrder in stopOrders" :key="stopOrder.order_id">
        <StopOrder
          v-on:orderDone=updateOrder
          :orderDetails=stopOrder
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import StopOrder from '../StopOrder/StopOrder.vue';
import { Order } from '../../types/index';

export default Vue.extend({
  name: 'StopOrders',
  components: {
    StopOrder,
  },
  props: {
    stopOrders: Array as () => Array<Order>,
  },
  methods: {
    updateOrder() {
      console.log('SENT');
    },
  },
});
</script>

<style lang="scss" scoped>
.stop-orders{
  border: 1px solid green;
}
</style>
