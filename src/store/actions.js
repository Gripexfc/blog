

export const addState = (payload) => ({type: 'CHANGE_LIST',list: [1,2,3]});

export const setCookToken = (payload) => {
    console.log(payload,'payload');
    return {
        type: 'SET_COOK_TOKEN',
        token: payload,
    }
}