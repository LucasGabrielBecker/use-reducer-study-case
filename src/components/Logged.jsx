export function Logged({ username, dispatch }) {
  return (
    <div className="App">
      <h2>Hello {username}</h2>

      <div className="logout" onClick={() => dispatch({ type: 'logout' })}>
        ❌
      </div>
    </div>
  )
}
