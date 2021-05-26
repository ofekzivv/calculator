import firebaseInstance from "../../index";
import database from 'firebase/database';

module.exports = {
    addEvent,
    changeEvent,
    removeEvent,
    movedEvent
}

function addEvent(options) {
        return firebaseInstance.firebase.database().ref(`employees/${window.user.uid}/data/${options.entity}`)
            .on('child_added', (snapShot) => {
                return snapShot
            })
}
function changeEvent(options) {
    return firebaseInstance.firebase.database().ref(`employees/${window.user.uid}/data/${options.entity}`)
        .on('child_changed', (snapShot) => {
            return snapShot
        })
}
function removeEvent(options) {
    return firebaseInstance.firebase.database().ref(`employees/${window.user.uid}/data/${options.entity}`)
        .on('child_removed', (snapShot) => {
            return snapShot
        })
}
function movedEvent(options) {
    return firebaseInstance.firebase.database().ref(`employees/${window.user.uid}/data/${options.entity}`)
        .on('child_moved', (snapShot) => {
            return snapShot
        })
}
