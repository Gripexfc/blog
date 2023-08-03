const userState = {
    token: '1231321',
    abc: '999'
};
  
  export default (state = userState, action) => {
      switch (action.type) {
          case 'SET_COOK_TOKEN':
              const newState = {
                  ...state,
                  token: action.token 
                };
                console.log(newState,'action');
        return newState;
      default:
        return state;
    }
  };
  