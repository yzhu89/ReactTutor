export default (state = {reduxName: 'reduxName'}, action) => {
    switch (action.type) {
     case 'SIMPLE_ACTION':
         console.log('我接到了simpleAction');
         console.log(action.payload);
      return {
       result: action.payload
      }

     default:
      return state
    }
   }

