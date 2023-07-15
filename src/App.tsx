import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {

  const {count} = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

 
  return (
    <div className="text-center mt-10">
      <h2 className="p-10 text-red-400 text-2xl">Counter</h2>
    <button onClick={()=> dispatch(increment())} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
 
          increment
     </button>
     <div>{count}</div>
     <button onClick={()=> dispatch(decrement())} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Decrement
      </button>
     <button onClick={()=> dispatch(incrementByAmount(5))} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        ByAmount
      </button>
    </div>
  )
}

export default App
