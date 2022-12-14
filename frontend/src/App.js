import { useState } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import "./App.css"
import { AppProvider } from "./AppContext"
import Authenticate from "./components/Authenticate"
import Header from "./components/Header"
import Logout from "./components/Logout"
import Register from "./components/Register"

function App() {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")))

  return (
    <AppProvider currentUser={currentUser}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Navigate to="/login" />} path="/" />
          <Route element={<Authenticate />} path="login" />
          <Route element={<Register />} path="signup" />
          <Route element={<Logout />} path="logoutpage" />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
