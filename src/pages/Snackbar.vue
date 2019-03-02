<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-flex d-flex lg2 sm6 xs12 />
      <v-flex d-flex lg6 sm6 xs12>
        <v-card>
          <v-card-text>
            <v-container fluid>
              <v-layout row wrap>
                <v-flex xs12 sm12>
                  <v-card-text>
                    Choose snackbar color:
                    <swatches v-model="color" inline colors="material-basic" :exceptions="['#FFFFFF']" shapes="circles" show-border></swatches>
                  </v-card-text>
                </v-flex>
                <v-flex xs12 sm3>
                  <v-checkbox
                    v-model="locationHorizontal"
                    label="Left"
                    value="left"
                    :color="$root.themeColor"/>
                </v-flex>

                <v-flex xs6 sm3>
                  <v-checkbox
                    v-model="locationHorizontal"
                    label="Right"
                    value="right"
                    :color="$root.themeColor"/>
                </v-flex>

                <v-flex xs6 sm3>
                  <v-checkbox
                    v-model="locationVertical"
                    label="Top"
                    value="top"
                    :color="$root.themeColor"/>
                </v-flex>

                <v-flex xs6 sm3>
                  <v-checkbox
                    v-model="locationVertical"
                    label="Bottom"
                    value="bottom"
                    :color="$root.themeColor"/>
                </v-flex>

                <v-flex xs12 sm3>
                  <v-checkbox
                    v-model="mode"
                    label="Multi-line (mobile)"
                    value="multi-line"
                    :color="$root.themeColor"/>
                </v-flex>

                <v-flex xs12 sm3>
                  <v-checkbox
                    v-model="mode"
                    label="Vertical (mobile)"
                    value="vertical"
                    :color="$root.themeColor"/>
                </v-flex>

                <v-flex xs12 sm4 offset-sm4>
                  <v-text-field
                    v-model="content"
                    label="Text"
                    type="text"/>
                </v-flex>

                <v-flex xs12 sm4>
                  <v-text-field
                    v-model.number="timeout"
                    label="Time to hide toast:"
                    type="number"/>
                </v-flex>
              </v-layout>

            </v-container>
            <v-btn
              block
              dark
              :color="$root.themeColor"
              @click="showSnackbar = true">
              Show Snackbar
            </v-btn>
          </v-card-text>

          <v-snackbar
            v-model="showSnackbar"
            :bottom="locationVertical === 'bottom'"
            :left="locationHorizontal === 'left'"
            :multi-line="mode === 'multi-line'"
            :right="locationHorizontal === 'right'"
            :timeout="timeout"
            :top="locationVertical === 'top'"
            :color="color"
            :vertical="mode === 'vertical'">
            {{ content }}
            <v-btn
              color="white"
              flat
              @click="showSnackbar = false">
              Close
            </v-btn>
          </v-snackbar>
        </v-card>
      </v-flex>
      <v-flex d-flex lg2 sm6 xs12 />
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      showSnackbar: false,
      locationVertical: 'top',
      locationHorizontal: null,
      mode: '',
      timeout: 2000,
      content: 'I\'m cool snackbar..',
      color: 'undefined'
    }
  }
}
</script>

<style>

</style>
