<template>
  <div>

    <div class="searching">
      <p>חיפוש דוח שכר </p>
      <q-input type="month" min="1970-01" max="2022-12" dir="rtl" v-model="selectedMonth"></q-input>
      <q-btn class="glossy" rounded color="green" label="חיפוש דוח לפי חודש" @click="search()"/>
      <!--      <q-select rounded outlined v-model="model" :options="options" label="חיפוש דוח חודשי" dir="rtl"/>-->
    </div>


    <div class="q-pa-md" dir="rtl" style="background-color:#027BE3">
      <q-table
          title="דוחות חישובי שכר:"
          :data="rows"
          :columns="columns"
          row-key="name"
          binary-state-sort

      >
        <template v-slot:body="props">
          <q-tr :props="props">

            <q-td key="firstDate" :props="props">{{ props.row.firstDate }}</q-td>
            <q-td key="lastDate" :props="props">{{ props.row.lastDate }}</q-td>
            <q-td key="workHours" :props="props">{{ props.row.workHours }}</q-td>
            <q-td key="brake" :props="props">{{ props.row.brake }}</q-td>
            <q-td key="actions" :props="props">
              <q-btn outline class="deleteBtn" icon="delete" label="מחיקת דוח חישוב" @click="remove(props.row.id)"/>
              <q-btn outline class="deleteBtn" icon="settings" label="עדכון דוח חישוב" @click="update(props.row.id)"/>
            </q-td>

          </q-tr>
        </template>
      </q-table>
    </div>

  </div>
</template>


<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
import firebaseDatabase from '../middleware/firebase/database'
// import localStorageDriveCAL from '../middleware/local-storage/indexCalculator';

export default {
  name: "summaryTable",
  props: ['tableName'],
  data() {
    return {
      selectedMonth: "2021-05",

      columns: [
        {name: 'firstDate', align: 'center', label: 'מתאריך', field: 'firstDate', sortable: true},
        {name: 'lastDate', label: 'עד תאריך', field: 'lastDate', sortable: true},
        {name: 'workHours', label: 'שעות עבודה', field: 'workHours'},
        {name: 'brake', label: 'זמן הפסקה', field: 'brake'},
        {name: 'actions', label: 'פעולות', field: 'actions'},
      ],
      rows: []
    }
  },
  computed: mapState('calculations', ['editedCalculationId', 'calculations']),
  methods: {
    ...mapActions('calculations', ["getCalculations", "deleteCalculation"]),
    ...mapMutations('calculations', ["setCalculations", "setEditedCalculationId", "resetEditedCalculationId"]),

    remove(id) {
      firebaseDatabase.remove()
      debugger
      this.setEditedCalculationId(id)
      this.deleteCalculation()
      this.resetEditedCalculationId()
    },

    update(id) {
      this.$router.push(`/update/${id}`);
      this.setEditedCalculationId(id);
    },

    async search() {
      const date = new Date(this.selectedMonth)
      const year = date.getFullYear();
      const month = date.getMonth();
      this.rows = await firebaseDatabase.getHashRef({entity: 'Calculations', year, month})
    }
  },
  async created() {
    await this.getCalculations();
    this.calculations.map(salary => this.rows.push(JSON.parse(JSON.stringify(salary))))
  }
}
</script>

<style scoped>
.searching {
  background-color: #fffcfc;
  margin-left: 550px;
  height: 150px;
  width: 300px;
  padding: 1em;
  border: 3px solid #000000;
  border-radius: 1em;
  font-size: 14px;
  font-weight: bolder;
  text-align: center;
}
</style>