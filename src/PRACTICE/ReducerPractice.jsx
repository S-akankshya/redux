import React, { useReducer } from 'react'

function ReducerPractice(){
    function reducer(state,action){
        switch(action.type){
            case "INCREMENT":
                return state + 1
            case "DECREMENT":
                return state - 1
            default:
                return state        
        }
    }

    function handleInc(){
        dispatch({type:"INCREMENT"})
    }
    function handleDec(){
        dispatch({type:"DECREMENT"})
    }
    const initialState = 0;
    const[state,dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            <h6>{state}</h6>
            <button onClick={handleInc}>Inc</button>
            <button onClick={handleDec}>Dec</button>
        </div>
    )
}
export default ReducerPractice












// import React, { useReducer } from 'react'

// function reducer(state,action){
//     switch(action.type){
//         case "INCREMENT":
//                return state + 1;
//         case "DECREMENT":
//                return state - 1;
//         default :
//                return state;              
//     }
// }



// const initialState = 0

// function ReducerPractice() {
//     const[state,dispatch] = useReducer(reducer,initialState)

//     function handleInc(){
//         dispatch({type:"INCREMENT"})
//     }
    
//     function handleDec(){
//         dispatch({type:"DECREMENT"})
    
//     }
//   return (
//     <div>
//         <div>{state}</div>
//       <button onClick={handleInc}>Inc</button>
//       <button onClick={handleDec}>Dec</button>
//     </div>
//   )
// }

// export default ReducerPractice















// import React, { useReducer } from 'react'

// function ReducerPractice() {
//     const initialState = 0;
//     const reducer = (state,action) =>{
//         switch(action){
//             case "INCREMENT": 
//                    return state + 1;

//             case "DECREMENT" : 
//                    return state - 1;

//             default : 
//                    return state;
//         }
//     }
//     const[state,dispatch] = useReducer(reducer,initialState)
//   return (
//     <div>
//         <div>{state}</div>
//       <button onClick={()=>dispatch("INCREMENT")}>Inc</button>
//       <button onClick={()=>dispatch("DECREMENT")}>Dec</button>
//     </div>
//   )
// }

// export default ReducerPractice
