import firebaseInstance from '../';
import database from 'firebase/database';
import storage from 'firebase/storage';

export default {
    read,
    create,
    remove,
    updateItem,
    selectById,
    getRef,
    getHashRef
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

async function create(options) {
    const salaryRef = await firebaseInstance.firebase.database().ref(`employees/${window.user.uid}/data/${options.entity}`).push(options.item)

    // create hashmap
    const salary = options.item;
    salary.date = new Date(salary.firstDate);
    firebaseInstance.firebase.database().ref(`employees/${window.user.uid}/data/dateHM/${salary.date.getFullYear()}/${salary.date.getMonth() + 1}`).push(salaryRef.key)
    return salaryRef;
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

async function getHashRef(options) {
    const salariesArr = [];
    const salariesId = [];
    await firebaseInstance.firebase.database().ref(`employees/${window.user.uid}/data/dateHM/${options.year}/${options.month + 1}`)
        .once('value', result => {
            result.forEach((childSnapshot) => {
                salariesId.push(childSnapshot.val());
            })
        })
    for (const id of salariesId) {
        console.log(salariesId)
        let salary = await selectById({entity: "Calculations", id});
        salariesArr.push(salary);
    }
    console.log(salariesArr);
    return salariesArr
}