import { useState } from 'react'
import './App.css'
import ReactDOM from 'react-dom'
import './index.css'
import Profile from './Profile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 class="background">React Assignment!!!</h1>
      <div className="card p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg">
          <button onClick={() => setCount((count) => count + 1)} className="mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 transition duration-300">

          count is {count}
        </button>
      </div>
      <div>
        <h2 className="mt-6 text-lg font-semibold text-gray-700">User Profile</h2>
        <Profile />
      </div>
    </>
  )
}

export default App
