<template>

  <div class="upload-files">
    <progress value="0" max="100">0%</progress>
    <q-input type="file" value="upload" id="uploadButton" @change="fileSelected"/>
    <q-btn @click="upload">העלאה</q-btn>
    <q-btn @click="download">הורדה</q-btn>
    <img :src="url">
    <img :src="url">
  </div>

</template>

<script>
import firebaseStorage from '../middleware/firebase/storage'

export default {
  name: "uploadFiles",
  data() {
    return {
      selectedFile: null,
      url:""
    }
  },
  methods: {

    fileSelected(event) {
      this.selectedFile = event.target.files[0]
      console.log(event)
    },

    upload() {
      firebaseStorage.uploadFile(this.selectedFile);
    },

    async download() {
      this.url = await firebaseStorage.downloadFile();
    },
  }
}
</script>

<style scoped>

.upload-files {
  background-color: #ffffff;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>