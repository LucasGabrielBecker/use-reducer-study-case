import { useReducer } from 'react'
import { Form, Logged } from './components'
import { loginReducer, initialState } from './reducer'
import './index.css'

function App() {
  const [state, dispatch] = useReducer(loginReducer, initialState)

  if (state.logged)
    return <Logged username={state.username} dispatch={dispatch} />
  return (
    <div className="App">
      {state.error && <h2 className="error">{state.error}</h2>}
      <Form dispatch={dispatch} />

      {state.loading && <h4>Loading...</h4>}
    </div>
  )
}

export default App
