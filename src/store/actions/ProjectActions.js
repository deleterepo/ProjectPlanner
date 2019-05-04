export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to db
        console.log('dispatched CREATE_PROJECT');
        dispatch({ type: 'CREATE_PROJECT', project });
    }
};