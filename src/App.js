
import { useDispatch, useSelector } from "react-redux";
import { deposet, withdrow } from "./redux-Toolkit/slicellis/bankSlice";
import Products from "./components/Products";

function App() {
 const state= useSelector(state =>state.bank)
 const dispach =useDispatch()
 console.log(state);
 console.log(dispach);
  return (
    <div className="App">
          <p>my account is: {state}</p>
          <button  onClick={()=>dispach(withdrow(100))}>withdrow</button>
          
          <button  onClick={()=>dispach(deposet(100))}>deposet</button>


      <Products/>


    </div>
  );
}

export default App;
