<template>
  <q-page-container dir="rtl">
    <h1>מה השכר שלך?</h1>
    <div class="calInputs" dir="rtl">
      <q-input outlined v-model="LocalCalculations.firstDate" type="date" label="מתאריך"/>
      <q-input outlined v-model="LocalCalculations.lastDate" type="date" label="עד תאריך"/>
      <q-input outlined v-model="LocalCalculations.workHours" type="time" label="שעות עבודה" value="0"/>
      <q-input outlined v-model="LocalCalculations.brake" type="time" label="זמן הפסקה"/>

      <q-btn v-if="!this.$route.params.id" class="glossy" rounded color="green" label="חשב את השכר שלך"
             @click="insertCal()"/>
      <q-btn v-else class="glossy" rounded color="green" label="עדכן חישוב" @click="update()"/>
    </div>
  </q-page-container>
</template>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

// import localStorageDriveCAL from '../middleware/local-storage/indexCalculator';
// import api from '../middleware/API/index'

export default {
  name: "calculatorInputs",
  props: ['tableName', 'calculation'],
  data() {
    return {
      LocalCalculations: {
        firstDate: '',
        lastDate: '',
        workHours: 0,
        brake: 0,
      }
    }
  },

  computed: mapState('calculations', ['editedCalculation', 'calculations', "editedCalculationId"]),
  methods: {
    ...mapActions('calculations', ['insertCalculation', 'setEditedCalculationById', 'updateCalculation']),
    ...mapMutations('calculations', ['setCalculations', 'setEditedCalculationId', 'resetEditedCalculationId', 'setEditedCalculation']),

    LocalSetCalculations() {
      this.setEditedCalculation(this.LocalCalculations)
      this.LocalCalculations = this.editedCalculationId
    },


    insertCal() {
      this.LocalSetCalculations(this.LocalCalculations);
      this.insertCalculation(this.LocalCalculations);
    },

    update() {
      this.LocalSetCalculations(this.LocalCalculations);
      this.setEditedCalculationId(this.$route.params.id);
      this.updateCalculation()
      this.$router.push(`/sumReports`);
    }
  },
  created() {
    if (this.$route.params.id) {
      this.setEditedCalculationId(this.$route.params.id);
      this.setEditedCalculationById()
          .then(() => {
            Object.assign(this.LocalCalculations, this.editedCalculation)
          })
    }

  }
}
</script>

<style>
h1 {
  text-align: right;
  margin-right: 10px;
  text-shadow: 0 1px 0 #ccc,
  0 2px 0 #c9c9c9,
  0 3px 0 #bbb,
  0 4px 0 #b9b9b9,
  0 5px 0 #aaa,
  0 6px 1px rgba(0, 0, 0, .1),
  0 0 5px rgba(0, 0, 0, .1),
  0 1px 3px rgba(0, 0, 0, .3),
  0 3px 5px rgba(0, 0, 0, .2),
  0 5px 10px rgba(0, 0, 0, .25),
  0 10px 10px rgba(0, 0, 0, .2),
  0 20px 20px rgba(0, 0, 0, .15);
}

.calInputs {
  background-color: #fffcfc;
  width: 500px;
  padding: 1em;
  border: 3px solid #000000;
  border-radius: 1em;
  font-size: 30px;
}


</style>