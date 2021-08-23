import firebaseInstance from '../index';
import firestore from 'firebase/firestore';

async function read() {
    let array = [];
    await firebaseInstance.firebase.firestore().collection('employees').doc(window.user.uid)
        .collection('Calculations').get().then(docs => {

            docs.forEach(doc => {
                const id = doc.id
                const data = doc.data()
                data.id = id
                array.push(data)
            })
        })
    return array
}

async function add(calculation) {
    await firebaseInstance.firebase.firestore().collection('employees').doc(window.user.uid)
        .collection('Calculations').doc(calculation.id).set(calculation)
}

async function remove(calculationId) {
    await firebaseInstance.firebase.firestore().collection('employees').doc(window.user.uid)
        .collection('Calculations').doc(calculationId).delete()
}

async function getById(calculationId){
    await firebaseInstance.firebase.firestore().collection('employees').doc(window.user.id)
        .collection('Calculations').doc(calculationId).get()
}

async function update(data){
    await firebaseInstance.firebase.firestore().collection('employees').doc(window.user.uid)
        .collection('Calculations').doc(data.id).update(data)
}

export default {
    read,
    add,
    remove,
    getById,
    update
}