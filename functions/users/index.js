const functions = require('firebase-functions');
const admin = require('firebase-admin');


exports.makeUppercase = functions.database.ref(`/employees/{userId}/data/employees/{employeeId}`)
    .onCreate((snapshot, context) => {

        const original = snapshot.val();
        console.log('Uppercasing', context.params.userId, original);
        const uppercase = original.toUpperCase();

        return snapshot.ref.parent.child('uppercase').set(uppercase)
    });


exports.onCreateTest = functions.database.ref(`/employees/{userId}/data/employees/{employeeId}`)
.onCreate((snap,context) => {
    admin.database().ref('/test').set(snap.val())
        .then((result) => {
            return result
        })
})

exports.addUser = functions.auth.user().onCreate((userRecord) => {

    const user = {
        uid: userRecord.uid,
        email: userRecord.email,
        name: userRecord.displayName,
    }

        admin.firestore().collection('users').doc(user.uid)
        .set(user)
            .then(r => console.log(r))
            .catch(e => console.log('ERROR: ', e.message))
});
