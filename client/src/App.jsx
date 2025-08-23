import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes,BrowserRouter, Outlet} from 'react-router-dom'
import {client} from './ApolloConection'

import { ApolloProvider } from "@apollo/client";
function App() {
  const [count, setCount] = useState(0)

  return (
    <ApolloProvider client={client}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<div >hi<Outlet/> </div>}>
                <Route index element={<div >knkbckdbckbdhhhhhhhhhh</div>} />
                <Route path="/articles" element={<div >h3</div>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ApolloProvider>
  )
}

export default App
