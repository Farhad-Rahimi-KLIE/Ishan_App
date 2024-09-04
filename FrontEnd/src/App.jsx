import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import { Toaster } from "react-hot-toast"
import Admin from './components/Admin/Admin'
import AdminLayouts from "./Layouts/AdminLayouts";
import UserLayouts from "./Layouts/UserLayouts";
import PublicLayouts from "./Layouts/PublicLayouts";
import Dashboard from './components/Dashboard/Dashboard'
import PostMenu from './components/PostController/PostMenu'
import Jahan from './components/Jan/Jahan';
import SinglePage from './components/watch/SinglePage'
function App() {

  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path="/" element={<UserLayouts />}>
            <Route index element={<Jahan />} />
            <Route path="/singlepage/:id" element={<SinglePage/>}/>
          </Route>

          <Route path="/admin" element={<AdminLayouts />}>
            <Route index element={<Admin />} />
            <Route path='post' element={<PostMenu/>}/>
            <Route path='dash' element={<Dashboard/>}/>
          </Route>

          <Route path="/" element={<PublicLayouts />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
