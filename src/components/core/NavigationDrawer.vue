<template>
  <v-navigation-drawer
    v-model="toggle"
    fixed app>
    <v-toolbar flat dark :color="$root.themeColor" class="toolbar">
      <router-link :to="{ name: 'Dashboard' }">
        <img src="static/logo.png" width="36px"></img>
      </router-link>
      <router-link :to="{ name: 'Dashboard' }" class="text">
         Vue Admin Template
      </router-link>
    </v-toolbar>
    <v-list>
      <v-list-tile @click="changeRoute('Dashboard', 1)">
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 1}, 'item-title' ]" >{{ $t('dashboard') }}</v-list-tile-title>
      </v-list-tile>

      <v-list-tile @click="changeRoute('Calendar', 2)">
        <v-list-tile-action>
          <v-icon>calendar_today</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 2}, 'item-title' ]"> {{ $t('calendar') }}</v-list-tile-title>
      </v-list-tile>

      <v-list-tile @click="changeRoute('Mailbox', 3)">
        <v-list-tile-action>
          <v-icon>mail</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 3}, 'item-title' ]">{{ $t('mailbox') }}</v-list-tile-title>
      </v-list-tile>

      <v-list-group
        prepend-icon="pageview">
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">{{ $t('widgets') }}</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('Social', 4)">
          <v-list-tile-action>
            <v-icon>group</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 4}, 'item-title' ]">{{ $t('social') }}</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('Chart', 5)">
          <v-list-tile-action>
            <v-icon>bar_chart</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 5}, 'item-title' ]">{{ $t('charts') }}</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('Media', 6)">
          <v-list-tile-action>
            <v-icon>perm_media</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 6}, 'item-title' ]">{{ $t('media') }}</v-list-tile-title>
        </v-list-tile>
    </v-list-group>

      <v-list-group
        prepend-icon="select_all">
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">{{ $t('overlays') }}</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('Snackbar', 7)">
          <v-list-tile-action>
            <v-icon>event_note</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 7}, 'item-title' ]">{{ $t('snackbar') }}</v-list-tile-title>
        </v-list-tile>
    </v-list-group>

      <v-list-group
        prepend-icon="fingerprint">
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">{{ $t('authorization') }}</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="$router.push({ name: 'Error', params: { errorCode: '403' } })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="item-title">403</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="$router.push({ name: 'Error', params: { errorCode: '404' } })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="item-title">404</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="$router.push({ name: 'Error', params: { errorCode: '500' } })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="item-title">500</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="$router.push({ name: 'Login' })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="item-title">{{ $t('login') }}</v-list-tile-title>
        </v-list-tile>
    </v-list-group>

      <v-list-group
      prepend-icon="account_circle">
      <v-list-tile slot="activator">
        <v-list-tile-title class="item-title">{{ $t('users') }}</v-list-tile-title>
      </v-list-tile>
        <v-list-tile  @click="">
            <v-list-tile-action>
              <v-icon v-text="'people_outline'"></v-icon>
            </v-list-tile-action>
            <v-list-tile-title v-text="'Management'"></v-list-tile-title>
      </v-list-tile>
      <v-list-tile  @click="">
          <v-list-tile-action>
            <v-icon v-text="'settings'"></v-icon>
          </v-list-tile-action>
          <v-list-tile-title v-text="'Settings'"></v-list-tile-title>
      </v-list-tile>
    </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    toggle: {
        type: Boolean,
        required: false,
        default: true
    }
  },

  data() {
    return {
      selectedIndex: 1
    }
  },

  methods: {
    changeRoute(routeName, selectedIndex) {
      const vm = this;

      vm.selectedIndex = selectedIndex;

      return vm.$router.push({ name: routeName });
    }
  }
}
</script>

<style>
  .toolbar {
    font-weight: bold;
    font-size: 18px;
  }

  .toolbar .text {
    padding-left: 15px;
    color: white;
    text-decoration:none;
  }

  .item-title {
    font-size: 17px;
    font-weight: 500;
  }
  .item-sub-title {
    font-size: 15px;
    font-weight: 500;
  }

  .active {
    font-weight: bold;
  }
</style>
