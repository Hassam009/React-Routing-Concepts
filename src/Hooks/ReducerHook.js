 import { useReducer } from "react";

 import Reducer from "./Reducer";

 const initialValue=0;

 const ReducerHook=()=>{
    const[count, dispatch]=useReducer(Reducer, initialValue)
 

    return (
<>

<h1>I am from Use Reducer Hook</h1>
<button
            type="button"
            class="btn btn-primary"
            onClick={()=>dispatch({type:"INC"})}
          >
            Increase
          </button>
          <span>{count}</span>
          <button
            type="button"
            class="btn btn-secondary"
            onClick={()=>dispatch({type:"DEC"})}
          >
            Decrease
          </button>
</>

    )
}

export default ReducerHook