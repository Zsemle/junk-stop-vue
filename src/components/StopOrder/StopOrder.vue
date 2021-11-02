<template>
  <div class="stop-order">
    <p>order status: {{orderStatusReadable}}</p>
    <p>order type: {{orderDetails.type}}</p>
    <p>content: {{orderDetails.stream_type}}</p>
    <p>quantity: {{orderDetails.quantity}}</p>
    <button v-if=displayDone v-on:click="orderDone">Done</button>
    <span v-else>Order is done</span>
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
  data() {
    return {
      orderStatus: this.orderDetails.status,
    };
  },
  computed: {
    orderStatusReadable(): string {
      const lookup = [
        'new',
        'pending',
        'scheduled',
        'in progress',
        'completed',
      ];
      return lookup[this.orderStatus];
    },
    displayDone(): boolean {
      return this.orderStatus !== 4;
    },
  },
  methods: {
    orderDone(): void {
      this.orderStatus = 4;
      this.$emit('orderDone');
    },
  },
});
</script>

<style lang="scss" scoped>
.stop-order{
  border: 1px solid rgb(51, 128, 0);
}
</style>
