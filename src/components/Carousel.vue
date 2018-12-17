<template>
  <v-carousel :cycle="false">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i">
        <div>
          <div align="center" class="carousel-item">
            sub
          </div>
          <div align="center" class="carousel-item">
            message
          </div>
          <div align="center" class="carousel-item">
            sup
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
  carousel-item {
    width: 33%;
  }

</style>
