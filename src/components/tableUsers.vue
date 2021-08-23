<template>

  <div class="tableUsers">
    <q-table dir="rtl"
             title="רשימת משתמשים"
             :data="employees"
             :columns="columns"
             row-key="name"
             binary-state-sort
    >
      <template v-slot:body="props">
        <q-tr :props="props">

          <q-td key="firstName" :props="props">{{ props.row.firstName }}</q-td>
          <q-td key="lastName" :props="props">{{ props.row.lastName }}</q-td>
          <q-td key="jobTitle" :props="props">{{ props.row.jobTitle }}</q-td>
          <q-td key="basicWage" :props="props">{{ props.row.basicWage }}</q-td>
          <q-td key="actions" :props="props">
            <q-btn outline class="deleteBtn" icon="delete" label="מחיקת משתמש" @click="remove(props.row.id)"/>
            <q-btn outline class="deleteBtn" icon="settings" label="עדכון משתמש" @click="goUpdatePage(props.row.id)"/>
          </q-td>

        </q-tr>
      </template>
    </q-table>
  </div>

</template>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

// import firebaseDatabase from '../middleware/firebase/database'
// import firebaseEvents from '../middleware/firebase/database/evenstHandler'

export default {
  name: "tableUsers",
  props: ['tableName', 'searchItem', 'sortedArr'],
  data() {
    return {

      columns: [
        {name: 'firstName', align: 'center', label: 'שם פרטי', field: 'firstName', sortable: true},
        {name: 'lastName', align: 'center', label: 'שם משפחה', field: 'lastName', sortable: true},
        {name: 'jobTitle', label: 'סוג עבודה', field: 'jobTitle', sortable: true},
        {name: 'basicWage', label: 'שכר שעתי', field: 'basicWage'},
        {name: 'actions', label: 'פעולות משתמש', field: 'actions', sortable: true},
      ],
    }
  },
  computed: mapState('employees', ['editedEmployeeId', 'employees']),

  methods: {
    ...mapActions('employees', ['deleteEmployee', "getEmployees"]),
    ...mapMutations('employees', ['setEditedEmployee', 'setEditedEmployeeId', 'resetEditedEmployeeId']),


    remove(id){
      this.setEditedEmployeeId(id)
      this.deleteEmployee()
      this.resetEditedEmployeeId();
    },
    goUpdatePage(id) {
      this.$router.push(`/update/${id}`);
    }
  },
  created() {
    this.getEmployees()
  }
}
</script>

<style scoped>
.tableUsers {
  border: 3px solid #000000;
  border-radius: 1em;
}

.deleteBtn {
  color: green;
}
</style>