<template>
  <q-page class="window-height window-width row justify-center items-center"
  >

    <!--    ////login-->
    <div class="column q-pa-lg">
      <div class="row">

        <q-card square class="shadow-24" style="width:300px;height:485px;">

          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-md">הכנס משתמש</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="add" color="primary"/>
            </div>
          </q-card-section>

          <q-card-section>
            <q-form class="q-px-sm q-pt-xl">
              <q-input square clearable v-model="email" type="email" label="Email">
                <template v-slot:prepend>
                  <q-icon name="email"/>
                </template>
              </q-input>

              <q-input square clearable v-model="password" type="password" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock"/>
                </template>
              </q-input>
            </q-form>
          </q-card-section>


          <q-card-section class="login-icons">
            <div class="text-center q-pa-md q-gutter-md">
              <q-btn round color="indigo-7">
                <q-icon name="fab fa-facebook-f" size="1.2rem"/>
              </q-btn>


              <login-with-google></login-with-google>


              <q-btn round color="light-blue-5">
                <q-icon name="fab fa-twitter" size="1.2rem"/>
              </q-btn>
            </div>

          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="primary" class="full-width text-white" label="היכנס" @click="login"/>
          </q-card-actions>

          <q-card-section class="text-center q-pa-sm">
            <q-btn @click="goRegister">לחץ כאן למעבר להרשמה</q-btn>
          </q-card-section>

        </q-card>
      </div>
    </div>

  </q-page>
</template>


<script>

import firebaseInstance from "../middleware/firebase"
import LoginWithGoogle from "./loginWithGoogle";

export default {
  name: 'loginInputs',
  components: {
    LoginWithGoogle
  },

  data() {
    return {
      email: '',
      username: '',
      password: '',
    }
  },
  methods: {
    goRegister(){
      this.$router.push('/register')
    },

    login() {

      const self = this;
      firebaseInstance.firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            console.log(user)
            self.$router.push('/HomePage')
          })
          .catch((error) => {
            alert(error)
            var errorCode = error.code;
            var errorMessage = error.message;
          });
    },
  },
  created() {
    // if (!window.user){
    //   this.$router.push(`/`)
    // }else
    if (window.user) { // אם יש יוזר מחובר הוא יישלח ישירות לדף הבית
      this.$router.push(`/HomePage`)
    }
  }
}

</script>


<style scoped>


</style>





