import React, {useReducer} from 'react'

const initialState = {
    count: 0,
}

const reducer = (state, action) => {
    switch(action.type){
        case "decrement":
            state.count = state.count -1;
            return {...state};
        case "increment":
            state.count = state.count + 1;
            return {...state};
        default:
            return {...state}
    }
}


export default function DemoUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h3>Demo UseReducer</h3>
            <p>Number: {state.count}</p>
            <button className="btn btn-danger" onClick = {()=>{
                dispatch({ type: "decrement"});
            }}>Decrement (-)</button>
            <button className="btn btn-success" onClick= {()=>{
                 dispatch({ type: "increment"});
            }}>Increment (+)</button>

        </div>
    )
}
