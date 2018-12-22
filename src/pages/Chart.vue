<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <!-- Statistics -->
      <v-flex d-flex lg4 sm6 xs12>
        <pie-chart :data="data" legend="bottom"></pie-chart>
      </v-flex>
      <v-flex d-flex lg4 sm6 xs12>
        <column-chart :data="data" :colors="['#b00']" label="Population" ytitle="Population"></column-chart>
      </v-flex>
      <v-flex d-flex lg4 sm6 xs12>
        <bar-chart :data="data" :colors="['#75e569']" xtitle="Population"></bar-chart>
      </v-flex>

      <v-flex d-flex lg4 sm6 xs12>
        <area-chart :data="areaStatisticData" xtitle="Time" ytitle="Population" :dataset="{borderWidth: 3}"></area-chart>
      </v-flex>
      <v-flex d-flex lg4 sm6 xs12>
        <scatter-chart :data="scatterStatisticData" xtitle="Size" :colors="['#107250']" ytitle="Population"></scatter-chart>
      </v-flex>
      <v-flex d-flex lg4 sm6 xs12>
        <line-chart :data="lineChartData" :colors="['#8b47d8']" xtitle="Time" ytitle="Population" :dataset="{borderWidth: 3}"></line-chart>
      </v-flex>

      <v-flex d-flex lg4 sm6 xs12>
        <line-chart :data="lineChartData" :colors="['#47d8a5']" :curve="false" xtitle="Time" ytitle="Population" :dataset="{borderWidth: 3}"></line-chart>
      </v-flex>
      <v-flex d-flex lg4 sm6 xs12>
        <pie-chart :data="data" legend="bottom" :donut="true"></pie-chart>
      </v-flex>
      <v-flex d-flex lg4 sm6 xs12>
        <line-chart :data="linearMultipleChartdata" />
      </v-flex>
      <!-- Statistics Ends -->
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      data: {'USA': 90, 'China': 70, 'Russia': 40, 'Germany': 30, 'United Kingdom': 35, 'Turkey': 22},
      lineChartData: {
        '2018-05-13': 640,
        '2018-05-14': 200,
        '2018-05-15': 250,
        '2018-05-16': 350,
        '2018-05-17': 200,
        '2018-05-18': 670,
        '2018-05-19': 600,
        '2018-05-20': 800
      },
      areaStatisticData: {
        '2018-01-01 00:00:00 -0800': 250,
        '2018-01-02 00:00:00 -0800': 150,
        '2018-01-03 00:00:00 -0800': 450,
        '2018-01-04 00:00:00 -0800': 350,
        '2018-01-05 00:00:00 -0800': 700,
        '2018-01-06 00:00:00 -0800': 360
      },
      scatterStatisticData: {
        '174.0': '30.0',
        '176.5': '79.3',
        '142.5': '68.3',
        '155.5': '37.3',
        '165.5': '54.3',
        '140.5': '15.3',
        '153.5': '24.3',
        '152.5': '75.3',
        '146.5': '98.3'
      },
      linearMultipleChartdata: [
        {name: 'Workout',
          data: {
            '2017-01-01 00:00:00 -0800': 3,
            '2017-01-02 00:00:00 -0800': 9,
            '2017-01-03 00:00:00 -0800': 14,
            '2017-01-04 00:00:00 -0800': 7,
            '2017-01-05 00:00:00 -0800': 4
          }
        },
        {name: 'Go to concert',
          data: {
            '2017-01-01 00:00:00 -0800': 3,
            '2017-01-02 00:00:00 -0800': 2,
            '2017-01-03 00:00:00 -0800': 5,
            '2017-01-04 00:00:00 -0800': 9,
            '2017-01-05 00:00:00 -0800': 14
          }
        },
        {name: 'Call Parents',
          data: {
            '2017-01-01 00:00:00 -0800': 9,
            '2017-01-02 00:00:00 -0800': 13,
            '2017-01-03 00:00:00 -0800': 8,
            '2017-01-04 00:00:00 -0800': 4,
            '2017-01-05 00:00:00 -0800': 9
          }
        },
        {name: 'Eat Breakfast',
          data: {
            '2017-01-01 00:00:00 -0800': 5,
            '2017-01-02 00:00:00 -0800': 3,
            '2017-01-03 00:00:00 -0800': 5,
            '2017-01-04 00:00:00 -0800': 8,
            '2017-01-05 00:00:00 -0800': 5
          }
        }
      ]
    }
  }
}
</script>

<style>

</style>
