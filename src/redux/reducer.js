const initialState = [];
function reducer(state = initialState, action)
  {
    switch(action.type)
    {
        
      case "addItem":
        return [...state, action.payload]

      case "deleteItem":
        var current = [...state]
        var news = current.splice(action.payload, 1)

        console.log(news);
        return current;//[action.payload];
      case "completeItem":
        current = [...state];
        current[action.payload].done = true;
        //console.log(current[action.payload]);
        return current;
      default:
        return state;
    }
  }

  export default reducer;