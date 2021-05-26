import firebaseInstance from "../firebase";
import database from 'firebase/database';

module.exports = {
    tableUsers
}

function tableUsers(options) {
        return firebaseInstance.firebase.database().ref(`employees/${window.user.uid}/data/${options.entity}`)
            .on('child_added', (snapShot) => {
                return snapShot
            })
}