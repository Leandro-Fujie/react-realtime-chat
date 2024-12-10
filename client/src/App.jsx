import { useState } from 'react'
import './App.css'
import Join  from './components/Join/Join'
import Chat from './components/Chat/Chat'

function App() {
  const [chatVisibility, setChatVisibility] = useState(false) /*quando der modificar para um router*/ 
  const [socket, setSocket] = useState(null)

  return (
    <div className='app'>
      {
        chatVisibility ? <Chat socket={socket}/> : <Join setSocket={setSocket} setChatVisibility={setChatVisibility} />/*Vdux*/
      }
    </div>
  )
}

export default App
