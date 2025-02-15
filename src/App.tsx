import { AuthLayout } from "layouts"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />} path="/auth/*" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
