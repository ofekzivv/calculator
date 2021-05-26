<template>
  <q-page class="window-height window-width row justify-center items-center"
  >

    <!--    ///register-->
    <div class="column q-pa-lg">
      <div class="row">

        <q-card square class="shadow-24" style="width:300px;height:485px;">

          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-md">הירשמו כאן</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="close" color="primary"/>
            </div>
          </q-card-section>

          <q-card-section>

            <q-form class="q-px-sm q-pt-xl q-pb-lg">
              <q-input square clearable v-model="email" type="email" label="Email">

                <template v-slot:prepend>
                  <q-icon name="email"/>
                </template>
              </q-input>
              <q-input square clearable v-model="username" type="username" label="Username">

                <template v-slot:prepend>
                  <q-icon name="person"/>
                </template>
              </q-input>
              <q-input square clearable v-model="password" type="password" label="Password">


                <template v-slot:prepend>
                  <q-icon name="lock"/>
                </template>
              </q-input>
            </q-form>
          </q-card-section>

          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="primary" class="full-width text-white" label="לחץ להרשמה" @click="register()"/>
          </q-card-actions>

          <q-card-section class="text-center q-pa-sm">
            <q-btn @click="moveLogin()">היכנס ממשתמש קיים</q-btn>
<!--            <p><b><a </a></b></p>-->
<!--            <p class="text-grey-6">היכנס ממשתמש קיים</p>-->
          </q-card-section>

        </q-card>
      </div>
    </div>

  </q-page>
</template>

<script>

import firebaseInstance from "../middleware/firebase"

export default {
  name: 'register',
  components: {

  },

  data() {
    return {
      email: '',
      username: '',
      password: '',
    }
  },
  methods: {

    moveLogin() {
      this.$router.push('/')
    },

    register() {
      const self = this;
      firebaseInstance.firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            console.log(user)
            self.$router.push('/HomePage')
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error)
          });
    },
  },
}

</script>


<style scoped>


</style>