import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PublicLayout } from "@/layouts/public-layout";
import HomePage from "@/routes/home";

const App = () => {
  return (
    <Router>
      <Routes>
        {/*public routes*/}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        {/*protected routes*/}
        
      </Routes>
    </Router>
  )
}

export default App
