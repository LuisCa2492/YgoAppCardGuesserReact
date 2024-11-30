import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/slices/counter'
function App() {

  const {counter} = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
      <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <p >
          count is {counter}
        </p>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          Increment by 2
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
