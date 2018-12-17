<template>
  <div style="height: 1400px;">
    Calendar
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().toISOString().substr(0, 10)
    }
  }
}
</script>

<style>

</style>
