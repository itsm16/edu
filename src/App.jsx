import { Route, Routes } from "react-router"
import WelcomePage from "./pages/WelcomePage"
import SignInPage from "./pages/SignInPage"
import SignUp from "./pages/SignUp"
import Account from "./pages/Account"

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage/>}/>
      <Route path="/signin" element={<SignInPage/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/account" element={<Account/>}/>
    </Routes>
  )
}

export default App