const initialState = {
    miniPackages: []
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'ADD_MINI_PACKAGE':
            return {
                miniPackages: [...state.miniPackages, payload]
            };

        default:
            return state;
    }
}