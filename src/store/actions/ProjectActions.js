export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        console.log('dispatched CREATE_PROJECT');

        // make async call to db
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Jack',
            authorLastName: 'Sparrow',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch(error => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', error });
        })
    }
};