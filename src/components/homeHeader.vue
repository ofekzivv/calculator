<template>
  <div class="header">
    <div class="center">

      <div class="ruler-pages">
        <div class="ruler-pages-links">

          <div class="link-page-wrapper">
            <q-btn class="link-page" @click="logout()">התנתק</q-btn>
          </div>

          <div class="link-page-wrapper">
            <q-btn class="link-page" @click="goOffice()">צור קשר</q-btn>
          </div>

          <div class="link-page-wrapper">
            <q-btn class="link-page" @click="goAboutPage()">עלינו</q-btn>
          </div>

          <div class="link-page-wrapper">
            <q-btn class="link-page" @click="goSumReports()">דוחות שכר</q-btn>
          </div>

          <div class="link-page-wrapper">
            <q-btn class="link-page" @click="goPrivetPage()">דף אישי</q-btn>
          </div>

          <div class="link-page-wrapper">
            <div class="dropdown">
              <q-btn class="link-page" @click="goCalculations()">חישובים מהירים</q-btn>
            </div>
          </div>

          <div class="link-page-wrapper">
            <q-btn class="link-page" @click="goCalculator()">מחשבון שכר</q-btn>
          </div>

          <div class="link-page-wrapper">
            <q-btn class="link-page" @click="goHome()">דף הבית</q-btn>
          </div>


        </div>
      </div>
    </div>
    <div class="header-img-container">
      <div class="img-wrapper">
        <img
            class="header-img"
            src="https://www.thyroid.org/wp-content/uploads/2016/10/calculator-icon-blue-2.png"
            alt="">
      </div>
    </div>
  </div>

</template>

<script>
import firebaseInstance from "../middleware/firebase"

export default {
  name: "homeHeader",
  data() {
    return {

    }
  },
  methods: {
    goHome() {
      this.$router.push(`/HomePage`);
    },
    goCalculator() {
      this.$router.push(`/salaryCalculator`);
    },
    goCalculations() {
      this.$router.push(`/calculations`);
    },
    goPrivetPage(id) {
      this.$router.push(`/employeePage/${id}`);
    },
    goSumReports() {
      this.$router.push(`/sumReports`);
    },
    goOffice() {
      this.$router.push(`/backOffice`);
    },
    goAboutPage() {
      this.$router.push(`/about`);
    },

    logout() {
      const self = this;
      firebaseInstance.firebase.auth().signOut().then( () => {
        self.$router.push('/');

      }).catch( (error) => {
        console.error(error)
      });
    },

  }
}
</script>

<style scoped lang="scss">

.header {
  //background-color: #F2C037;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  z-index: 1;

  @media (min-width: 600px) {
    height: 100px;
  }

  .center {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .header-img-container {
    height: 100%;

    .img-wrapper {
      height: calc(100% - 20px);
      border-radius: 50%;
      overflow: hidden;
      margin: 10px;

      .header-img {
        padding: inherit;
        height: 100%;
        width: auto;
      }
    }
  }
}

.ruler-pages {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex: 1;


  .ruler-pages-links {
    color: #fff;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .link-page-wrapper {
    flex: 1;
    height: 100%;
    padding: 10px;
  }

  .link-page {
    color: #fff;
    background-color: #1D1D1D;
    font-weight: bold;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>
