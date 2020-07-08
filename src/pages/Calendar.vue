<template>
  <div id="calendar">
    <!-- detail event -->
    <v-dialog
      v-model="dialog"
      max-width="340">
      <v-card v-if="selectedEvent">
        <v-card-title class="headline">{{ selectedEvent.title }}</v-card-title>

        <v-card-text>
          Event Start At: {{ selectedEvent.start }}
        </v-card-text>
        <v-card-text>
          Event End At: {{ selectedEvent.end }}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false">
            Okey
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- creating new event -->
    <v-dialog
      v-model="dialogCreateEvent"
      max-width="525">
      <v-card v-if="dialogCreateEvent">
        <v-card-title class="headline">Do you want to create event on {{ createEventDate.toLocaleDateString() }} ?</v-card-title>

        <v-card-text>
          <v-text-field
            v-model="newEventTitle"
            label="Title"
            hint="Type event title" />
        </v-card-text>

        <v-card-text>
          <v-radio-group v-model="selectedEventClass" row>
            <v-radio
              label="Default"
              color="blue"
              value=""/>
            <v-radio
              label="Caution"
              color="red"
              value="event-item-caution"/>
            <v-radio
              label="Meeting"
              color="green"
              value="event-item-meeting"/>
            <v-radio
              label="Warning"
              color="yellow"
              value="event-item-warning"/>
            <v-radio
              label="Trip"
              color="purple"
              value="event-item-trip"/>
          </v-radio-group>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialogCreateEvent = false">
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="createEvent()">
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <full-calendar
      :events="events"
      locale="en"
      @eventClick="eventClick($event)"
      @dayClick="dayClick($event)"/>
  </div>
</template>

<script>
export default {
  data() {
    var d = new Date();
    
    return {
      dialog: false,
      dialogCreateEvent: false,
      newEventTitle: null,
      createEventDate: null,
      selectedEventClass: null,
      selectedEvent: null,
      events: [
        {
          title : 'Test',
          start : `${d.getFullYear()}-${d.getMonth()+1}-01`,
          end : `${d.getFullYear()}-${d.getMonth()+1}-03`,
          cssClass : 'event-item-caution',
        },
        {
          title : 'Meeting',
          start : `${d.getFullYear()}-${d.getMonth()+1}-05`,
          end : `${d.getFullYear()}-${d.getMonth()+1}-07`,
          cssClass : 'event-item-trip'
        },
        {
          title : 'Europe Trip',
          start : `${d.getFullYear()}-${d.getMonth()+1}-03`,
          end : `${d.getFullYear()}-${d.getMonth()+1}-07`,
          cssClass : 'event-item-warning'
        },
        {
          title : 'Event',
          start : `${d.getFullYear()}-${d.getMonth()+1}-12`,
          cssClass : 'event-item-meeting'
        },
        {
          title : 'Event',
          start : `${d.getFullYear()}-${d.getMonth()+1}-16`,
          cssClass : 'event-item-meeting'
        },
        {
          title : 'Europe Trip',
          start : `${d.getFullYear()}-${d.getMonth()+1}-20`,
          end : `${d.getFullYear()}-${d.getMonth()+1}-23`,
          cssClass : 'event-item-caution'
        },

        {
          title : 'Test',
          start : `${d.getFullYear()}-${d.getMonth()+1}-05`,
          cssClass : 'event-item-caution'
        },
        {
          title : 'Test',
          start : `${d.getFullYear()}-${d.getMonth()+1}-27`,
          end : `${d.getFullYear()}-${d.getMonth()+1}-28`,
          cssClass : 'event-item-meeting'
        },
        {
          title : 'Test',
          start : `${d.getFullYear()}-${d.getMonth()+1}-17`,
          end : `${d.getFullYear()}-${d.getMonth()+1}-19`,
          cssClass : 'event-item-trip'
        },
        {
          title : 'Event example',
          start : `${d.getFullYear()}-${d.getMonth()+1}-08`,
          cssClass : 'event-item-meeting'
        },
        {
          title : 'Event example',
          start : `${d.getFullYear()}-${d.getMonth()+1}-16`,
          cssClass : 'event-item-meeting'
        }
      ]
    }
  },

  methods: {
    eventClick($event) {
      const vm = this;

      vm.dialog = true;

      vm.selectedEvent = $event;
    },

    dayClick($event) {
      const vm = this;

      vm.dialogCreateEvent = true;

      vm.createEventDate = $event;
    },

    createEvent() {
      const vm = this;

      vm.events.push({
        title: vm.newEventTitle ? vm.newEventTitle : 'Sample Event',
        start: vm.createEventDate,
        cssClass: vm.selectedEventClass ? vm.selectedEventClass : null
      });

      vm.createEventDate = null;
      vm.newEventTitle = '';
      vm.dialogCreateEvent = false;
    }
  }
}
</script>

<style>
  #calendar {
    height: 100%;
  }

  .prev-month {
    font-size: 20px !important;
    font-weight: bold;
  }

  .next-month {
    font-size: 20px !important;
    font-weight: bold;
  }

  .event-item {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif !important;
    font-size: 14px !important;
  }

  .event-item-caution {
    background-color: #e89a9a !important;
  }

  .event-item-warning {
    background-color: #ffffa5 !important;
  }

  .event-item-meeting {
    background-color: #71d48e !important;
  }

  .event-item-trip {
    background-color: #8d78e6 !important;
  }

</style>
