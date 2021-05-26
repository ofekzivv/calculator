<template>
  <div class="userInputs" dir="rtl">
    <h4>הכנסת פרטים אישיים</h4>
    <q-input outlined v-model="LocalEditedEmployee.firstName" type="text" label="שם פרטי"/>
    <q-input outlined v-model="LocalEditedEmployee.lastName" type="text" label="שם משפחה"/>
    <q-input outlined v-model="LocalEditedEmployee.jobTitle" type="text" label="סוג עבודה"/>
    <q-input outlined v-model="LocalEditedEmployee.basicWage" type="number" label="שכר שעתי" value="0"/>

    <q-btn v-if="!editedEmployee.id" class="glossy" rounded color="green" label="צור עובד" @click="insert()"/>

    <q-btn v-if="editedEmployee.id" class="glossy" rounded color="green" label="עדכון נתונים" @click="update()"/>

    <q-btn v-show="!editedEmployee.id" class="glossy" rounded color="green" label="חפש עובד" @click="search()"/>

  </div>
</template>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

// import firebaseDatabase from '../middleware/firebase/database'

export default {
  name: "inputsUsers",
  props: ['tableName', 'user'],
  data() {
    return {
      LocalEditedEmployee: {
        firstName: '',
        lastName: '',
        jobTitle: '',
        basicWage: 0,
      }
    }
  },

  computed: mapState('employees', ['editedEmployee']),
  methods: {
    ...mapActions('employees', ['insertEmployee', 'updateEmployee', 'setEditedEmployeeById']),
    ...mapMutations('employees', ['setEditedEmployee', 'setEditedEmployeeId', 'resetEditedEmployeeId']),

    localSetEditedEmployee() {
      this.setEditedEmployee(this.LocalEditedEmployee)
    },

    insert() {
      this.localSetEditedEmployee();
      this.insertEmployee();
    },
    update() {
      this.localSetEditedEmployee();
      this.updateEmployee();
      this.resetEditedEmployeeId();
      this.backToBO()
    },
    backToBO() {
      this.$router.push(`/backOffice`);
    },
    search() {
      this.localSetEditedEmployee();
    }
  },
  created() {
    if (this.$route.params.id) {
      this.setEditedEmployeeId(this.$route.params.id)
      this.setEditedEmployeeById()
          .then(() => {
            Object.assign(this.LocalEditedEmployee, this.editedEmployee)
          })
    }
  }
}

</script>

<style scoped>
.userInputs {
  background-color: #fffcfc;
  /*margin-left: 65%;*/
  width: 500px;
  padding: 1em;
  border: 3px solid #000000;
  border-radius: 1em;
  font-size: 30px;
}
</style>