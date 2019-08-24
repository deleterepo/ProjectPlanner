export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        console.log('dispatched CREATE_PROJECT');

        // make async call to db
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch(error => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', error });
        })
    }
};