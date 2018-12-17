<template>
  <v-card class="card">
    <v-card-text class="pa-3">
      <line-chart :data="data" xtitle="Time" ytitle="Site Views" :dataset="{borderWidth: 3}"/>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      data: {
        '2018-05-13': 640,
        '2018-05-14': 200,
        '2018-05-15': 250,
        '2018-05-16': 350,
        '2018-05-17': 200,
        '2018-05-18': 670,
        '2018-05-19': 600,
        '2018-05-20': 800
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
