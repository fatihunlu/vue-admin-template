<template>
  <v-card>
    <v-card-text class="pa-0">
      <pie-chart :data="data" legend="bottom" :colors="['#d11', '#112', '#23f', '#45a']"></pie-chart>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      data: {'Blueberry': 44, 'Strawberry': 23, 'Abc': 11, 'Def': 88}
    }
  }
}
</script>

<style>

</style>
