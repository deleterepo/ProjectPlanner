const initState = {
    projects: [
        { id: '1', title: 'project 1', content: 'yada yada yada'}
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.error('create project error', action.error);
            return state;
        default:
            return state;
    }
}

export default projectReducer