<template>
  <v-card class="widget-card">
    <v-card-text class="pa-0">
      <v-container class="pa-0">
        <div class="layout row ma-0" :style="{ backgroundColor: color }">
          <div class="sm4 xs4 flex">
            <div class="layout column ma-0 justify-center align-center">
              <v-icon size="76px" color="white" style="opacity: 0.8;">{{icon}}</v-icon>
            </div>
          </div>
          <div class="layout column ma-0 justify-center" style="color: white;">
            <span class="caption">{{ subTitle }}</span>
            <div class="headline">{{ title }}</div>
            <span class="caption">{{ supTitle }}</span>
          </div>
        </div>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    supTitle: {
      type: String,
      required: false
    },
    subTitle: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    icon: {
      type: String,
      required: false
    },
    color: {
      type: String,
      required: false
    }
  },

  data() {
    return {
    }
  }
}
</script>

<style>
  .widget-card {
    border-radius: 5%;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.21);
    background-color: transparent;
  }
</style>
