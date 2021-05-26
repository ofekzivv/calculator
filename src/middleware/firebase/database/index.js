import firebaseInstance from '../';
import database from 'firebase/database';
import storage from 'firebase/storage';

export default {
    read,
    create,
    remove,
    updateItem,
    selectById,
    getRef
}

function getRef(options) {
    return firebaseInstance.firebase.database().ref(`employees/${window.user.uid}/data/${options.entity}`)
}

function read(options) {
    return firebaseInstance.firebase.database().ref(`employees/${window.user.uid}/data/${options.entity}`).once('value')
        .then(result => {
            const arr = [];
            const obj = result.val();

            for (const key in obj) {
                const item = obj[key];
                item.id = key;
                arr.push(item)
            }
            return arr
        })
}

function create(options) {
    return firebaseInstance.firebase.database().ref(`employees/${window.user.uid}/data/${options.entity}`).push(options.item);
}

function remove(options) {
    return firebaseInstance.firebase.database().ref(`employees/${window.user.uid}/data/${options.entity}/${options.id}`).remove()
        .then(result => {
            return result
        })
}

function updateItem(options) {
    return firebaseInstance.firebase.database().ref(`employees/${window.user.uid}/data/${options.entity}/${options.id}`).set(options.item)
        .then(result => {
            return result
        })
}

function selectById(options) {
    return firebaseInstance.firebase.database().ref(`employees/${window.user.uid}/data/${options.entity}/${options.id}`).once('value')
        .then(result => {
            const obj = result.val();
            return obj
        })
}