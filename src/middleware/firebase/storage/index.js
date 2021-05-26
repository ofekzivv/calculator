import firebaseInstance from '../index';
import storage from 'firebase/storage';
import {format} from "quasar";


function uploadFile(specificFile) {
    return firebaseInstance.firebase.storage().ref('files/image').put(specificFile)
        .then(response => {
            console.log(response)
        });
}

function downloadFile() {
    return firebaseInstance.firebase.storage().ref('files,/image').getDownloadURL()
        .then(url => {
                window.open(url)
        })
}

export default {
    uploadFile,
    downloadFile
}