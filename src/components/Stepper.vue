<template>
  <v-stepper v-model="step">
    <v-stepper-header>
      <v-stepper-step :complete="step > 1" step="1">Name of step 1</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="step > 2" step="2">Name of step 2</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Name of step 3</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-form ref="form" v-model="valid" lazy-validation>
          <h2> Form Wizard </h2>
          <p>Nostrud exercitation commodo consequat.</p>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :counter="10"
            label="Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required />
          <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="Item"
            required />
          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required/>

          <v-btn :disabled="!valid"
            @click="submit">
            submit
          </v-btn>
          <v-btn @click.native="clear">clear</v-btn>
        </v-form>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-form>
          <h2> Form Wizard </h2>
          <p>Nostrud exercitation commodo consequat.</p>
          <v-container>
            <v-layout flex wrap row>
              <v-flex d-flex lg6>
                <v-text-field
                  v-model="email"
                  label="Card Holder Name" />
              </v-flex>
              <v-flex d-flex lg6>
                <v-text-field
                  v-model="email"
                  label="Card Number" />
              </v-flex>
              <v-flex d-flex lg6>
                <v-text-field
                  v-model="email"
                  label="CVC" />
              </v-flex>
              <v-flex d-flex lg6>
                <v-text-field
                  v-model="email"
                  label="Phone Number" />
              </v-flex>
              <v-flex d-flex lg2></v-flex>
              <v-flex d-flex lg4>
                <v-btn @click="step=3">
                  submit
                </v-btn>
              </v-flex>
              <v-flex d-flex lg4>
                <v-btn @click="step=1">clear</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
      </v-stepper-content>

      <v-stepper-content step="3">
        <h2> Aggreement </h2>
        <p style="padding-top: 25px;">
            Nostrud exercitation commodo consequat.Nostrud exercitation commodo consequat.Nostrud exercitation commodo consequat.Nostrud exercitation commodo consequat.
            Nostrud exercitation commodo consequat.Nostrud exercitation commodo consequat.Nostrud exercitation commodo consequat.Nostrud exercitation commodo consequat.
            Nostrud exercitation commodo consequat.Nostrud exercitation commodo consequat.Nostrud exercitation commodo consequat.Nostrud exercitation commodo consequat.
        </p>
        <v-checkbox label="I read agreement and i have not any objection."></v-checkbox>

        <v-btn @click="step=1">continue</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
  export default {
    data () {
      return {
        step: 0,
        valid: true,
        name: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters'
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        select: null,
        items: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4'
        ],
        checkbox: false,
        date: new Date().toISOString().substr(0, 10)
      }
    },

    methods: {
      submit () {
        if (this.$refs.form.validate()) {

        }

        this.step = 2;
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style>
</style>
