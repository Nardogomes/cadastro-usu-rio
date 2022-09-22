import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { User } from "./pages/User";

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuario" element={<User />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}
