import { useState } from 'react'

export function Form({ dispatch }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        type="text"
        name="username"
        autoComplete="off"
        onChange={e => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        name="password"
        autoComplete="off"
        onChange={e => setPassword(e.target.value)}
        required
      />
      <input
        type="submit"
        value="Login"
        onClick={() =>
          dispatch({ type: 'login', payload: { username, password } })
        }
      />
      <input
        type="button"
        value="Simulate an error"
        onClick={() => dispatch({ type: 'error' })}
      />
    </form>
  )
}
