<template>
  <div class="name-card">
    <v-card :color="color" ref="card" :dark="dark" :img="cardBgImage">
      <v-responsive v-if="showTopNav">
        <v-layout row justify-space-between class="ma-0">
          <v-flex xs2>
            <v-icon>clear</v-icon>
          </v-flex>
          <v-flex xs2 class="text-sm-right">
            <v-icon>more_vert</v-icon>
          </v-flex>
        </v-layout>
      </v-responsive>
      <v-card-text>
        <div class="layout ma-0 align-center" :class="cardLayout">
          <v-avatar :size="avatarSize">
            <img v-bind:src="avatar.src" v-bind:alt="name" v-if="showAvatar">
            <span v-else class="white--text headline">{{ name.charAt(0) }}</span>
          </v-avatar>
          <div class="flex" :class="textAlign">
            <div class="subheading">{{name}}</div>
            <span class="caption">{{jobTitle}}</span>
          </div>
        </div>
      </v-card-text>
    </v-card>
    <v-bottom-nav :value="true" color="transparent" :height="64" v-if="showBottomNav">
      <v-btn flat color="teal" value="recent">
        <span>Recent</span>
        <v-icon>history</v-icon>
      </v-btn>
      <v-btn flat color="teal" value="favorites">
        <span>Favorites</span>
        <v-icon>favorite_border</v-icon>
      </v-btn>
      <v-btn flat color="teal" value="nearby">
        <span>Nearby</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    avatar: {
      type: Object,
      default: null
    },
    jobTitle: {
      type: String,
      default: ''
    },
    cardBgImage: {
      type: String,
    },
    color: {
      type: String,
      default: ''
    },
    dark: {
      type: Boolean,
      default: false
    },
    bottomNav: {
      type: Boolean,
      default: false
    },
    topNav: {
      type: Boolean,
      default: false
    },
    mini: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
    }
  },

  computed: {
    cardLayout () {
      const vm = this;

      return vm.mini ? 'row' : 'column';
    },

    textAlign () {
      const vm = this;

      return vm.mini ? 'text-sm-right' : 'text-sm-center';
    },

    avatarSize () {
      const vm = this;

      return vm.mini ? '54' : '96';
    },

    showAvatar () {
      const vm = this;

      return vm.avatar && vm.avatar.src;
    },

    showBottomNav () {
      const vm = this;

      return !vm.mini && vm.bottomNav;
    },

    showTopNav () {
      const vm = this;

      return !vm.mini && vm.topNav;
    }
  }
}
</script>

<style>

</style>
