<template>
  <v-card class="card">
    <v-card-text class="pa-1">
      <area-chart :data="data" :dataset="{borderWidth: 3}" :colors="['#b00']"  ytitle="Earnings" ></area-chart>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      data: {
          '2018-01-01 00:00:00 -0800': 250,
          '2018-01-02 00:00:00 -0800': 150,
          '2018-01-03 00:00:00 -0800': 450,
          '2018-01-04 00:00:00 -0800': 350,
          '2018-01-05 00:00:00 -0800': 700,
          '2018-01-06 00:00:00 -0800': 360
        }
    }
  }
}
</script>

<style>
  .card {
    border-radius: 3px;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.21);
    background-color: transparent;
  }
</style>
