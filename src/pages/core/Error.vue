<template>
  <v-app id="error">
      <v-container fluid fill-height>
        <v-layout align-center justify-center row>
          <div class="text-md-center">
            <h1 class="errorCode">{{ $route.params.errorCode }}</h1>
            <h2 class="my-3 headline ">Sorry, the server is down.</h2>
            <div>
              <v-btn color="secondary" @click="$router.push({ name: 'Dashboard' })">Go To Dashboard</v-btn>
            </div>
          </div>
        </v-layout>
      </v-container>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>
  .d {
    margin: 0 auto;
    width: 25% !important;
  }
  .errorCode {

    text-align: center;
    vertical-align: middle;
    font-size: 170px;
    line-height: 170px;
    font-weight: 800;
    color: #424242 ;
    text-shadow: rgba(61,61,61,.3) 1px 1px, rgba(61,61,61,.2) 2px 2px, rgba(61,61,61,.3) 3px 3px;
  }
</style>
