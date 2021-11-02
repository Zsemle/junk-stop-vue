<template>
  <div class="current-stop">
    <p>Customer: {{stop.name}}</p>
    <div>
      <p>House number: {{address.house_number}}</p>
      <p>Street: {{address.street}}</p>
      <p>Town: {{address.town}}</p>
      <p>Postal code: {{address.postal_code}}</p>
    </div>
    <div>
      <StopOrders
        :stopOrders=stopOrders
      />
    </div>
    <p>Comment: {{stop.comment}}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Stop, Address, Order } from '../../types/index';
import StopOrders from '../StopOrders/StopOrders.vue';

export default Vue.extend({
  name: 'CurrentStop',
  props: {
    stop: Object as () => Stop,
  },
  components: {
    StopOrders,
  },
  computed: {
    address(): Address {
      return this.stop.address;
    },
    stopOrders(): Array<Order> {
      return this.stop.orders;
    },
  },
});
</script>

<style lang="scss" scoped>
.current-stop {
  background-color: lavender;
}
</style>
