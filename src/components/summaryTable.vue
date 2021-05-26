<template>

  <div class="q-pa-md" dir="rtl">
    <q-table
        title="חישובי שכר"
        :data="calculations"
        :columns="columns"
        row-key="name"
        :visible-columns="visibleColumns"
    >
      <template v-slot:top="props">
        <div class="col-2 q-table__title">היסטורית חישובי שכר</div>

        <q-space/>

        <div v-if="$q.screen.gt.xs" class="col">
          <q-toggle v-model="visibleColumns" val="firstDate" label="ינואר"/>
          <q-toggle v-model="visibleColumns" val="lastDate" label="פברואר"/>
          <q-toggle v-model="visibleColumns" val="workHours" label="מרץ"/>
          <q-toggle v-model="visibleColumns" val="brake" label="אפריל"/>
<!--          <q-toggle v-model="visibleColumns" val="calories" label="יוני"/>-->
<!--          <q-toggle v-model="visibleColumns" val="calories" label="יולי"/>-->
<!--          <q-toggle v-model="visibleColumns" val="calories" label="אוגוסט"/>-->
<!--          <q-toggle v-model="visibleColumns" val="calories" label="ספטמבר"/>-->
<!--          <q-toggle v-model="visibleColumns" val="calories" label="אוקטובר"/>-->
<!--          <q-toggle v-model="visibleColumns" val="calories" label="נובמבר"/>-->
<!--          <q-toggle v-model="visibleColumns" val="calories" label="דצמבר"/>-->

        </div>

        <q-select
            v-else
            v-model="visibleColumns"
            multiple
            borderless
            dense
            options-dense
            :display-value="$q.lang.table.columns"
            emit-value
            map-options
            :options="columns"
            option-value="name"
            style="min-width: 150px"
        />

      </template>

    </q-table>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

// import localStorageDriveCAL from '../middleware/local-storage/indexCalculator';

export default {
  name: "summaryTable",
  props: ['tableName'],
  data() {
    return {
      visibleColumns: ['firstDate', 'lastDate', 'workHours', 'brake'],

      columns: [
        {name: 'firstDate', align: 'center', label: 'מתאריך', field: 'firstDate', sortable: true},
        {name: 'lastDate', label: 'עד תאריך', field: 'lastDate', sortable: true},
        {name: 'workHours', label: 'שעות עבודה', field: 'workHours'},
        {name: 'brake', label: 'זמן הפסקה', field: 'brake'},
      ],
    }
  },
  computed: mapState('calculations', ['editedCalculationId', 'calculations']),
  methods: {
    ...mapActions('calculations', ["getCalculations"]),

  },
  created() {
    this.getCalculations()
  }
}
</script>

<style scoped>

</style>