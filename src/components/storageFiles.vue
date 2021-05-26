<template>
  <div class="image-css" style="background-color: #ffffff">

    <div>
      <br>
      <p class="p-file-card">הוספת תמונה</p>
      <q-input type="file" @change="previewImage" accept="image/*" class="fileInput"/>
    </div>

    <div>
      <p> progress:{{ uploadValue.toFixed() + "%" }}
        <progress :value="uploadValue" max="100"></progress>
      </p>
    </div>

    <div>
      <q-img class="=preview" :src="picture"/>
      <br>
      <div class="btn">
        <q-btn round icon="upload" color="primary" text-color="yellow-13" @click="onUpload"></q-btn>
        <q-btn round icon="delete" color="primary" text-color="yellow-13" @click="deleteImg"></q-btn>
        <q-btn round icon="download" color="primary" text-color="yellow-13" @click="onDownload"></q-btn>

      </div>
    </div>

    <div v-for="url of urlArray" class="imag">
      <img :src="url">
    </div>

  </div>
</template>

<script>
import firebaseInstance from '../middleware/firebase/index'
import firebaseStorage from '../middleware/firebase/storage'

export default {
  name: "storageFiles",
  data() {
    return {
      picture: null,
      urlArray: [],
      imageData: {},
      uploadValue: 0,
    }
  },
  methods: {

    previewImage(event) {
      this.uploadValue = 0;
      this.imageData = event.target.files[0];
    },

    onUpload() {
      this.picture = null
      const self = this
      const storageRef = firebaseInstance.firebase.storage().ref(`/images/${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`, snapshot => {
            this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          error => {
            console.error(error.message)
          },
          () => {
            this.uploadValue = 100;
            storageRef.snapshot.ref.getDownloadURL().then((url) => {

              self.$emit('imageAdd', url)
              this.picture = url
            });
          }
      )
    },
    async doDownload(){

    },

    async onDownload() {
      let picPath = "";
      let urlArray = [];

      await firebaseInstance.firebase.storage().ref("images/").listAll()
          .then((res) => {
            res.items.forEach(async (itemRef) => {
              picPath = itemRef.fullPath;
              let picUrl = await firebaseInstance.firebase.storage().ref(picPath).getDownloadURL()
              this.urlArray.push(picUrl)
              console.log(this.urlArray)
              console.log("url:", this.picture)

              // All the items under listRef.
            });
          }).catch((error) => {
            console.error(error)
            // Uh-oh, an error occurred!
          });

    },

    deleteImg() {
      const storage = firebaseInstance.firebase.storage().ref(`/files/${window.user.uid}`);
      storage.child(`${this.imageData.name}`).delete()
          .then(() => {

          }).catch((error) => {
        console.error(error.message)
      });
    },
  },
  created() {
  }
}
</script>

<style scoped>

preview {
  width: 400px;
  height: 400px;
}

.image-css {
margin-left: 37%;
  display: block;
  width: 300px;
  border: 15px solid white;
}

.btn {
  display: flex;
  justify-content: space-between;
}

.fileInput{
  background-color: #00ffc9;
}
.p-file-card{
  text-align: center;
  font-size: 20px;
  border: 15px solid #062cec;
  font-weight: 900;
}

</style>