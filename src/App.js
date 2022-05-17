
import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Navbar from './Pages/Shared/Navbar';
import RequireAuth from './Pages/Shared/RequireAuth';
import { Toaster } from 'react-hot-toast';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import Myhistory from './Pages/Dashboard/Myhistory';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequireAdmin from './Pages/Shared/RequireAdmin';

export const RouteContext = createContext()

function App() {

  const routes = {
    home: "/",
    appointment: "/appointment",
    about: "/about",
    login: "/login",
    register: "/register",
    dashboard: "/dashboard",
    allusers: "/allusers",

  }
  return (
    <div>
      <Navbar />
      <RouteContext.Provider value={{ routes: routes }}>

        <Routes>
          <Route path={routes.home} element={<Home />} />

          <Route
            path={routes.appointment}
            element={<RequireAuth><Appointment /></RequireAuth>}
          />


          <Route path="/about" element={<About />} />
          <Route path={routes.login} element={<Login />} />
          <Route path={routes.register} element={<Register />} />

          {/* nested route for dashboard */}
          <Route path={routes.dashboard} element={<RequireAuth><Dashboard /></RequireAuth>}>
            
            <Route index element={<MyAppointment/>}></Route>

            <Route path="review" element={<MyReview/>}></Route>
            <Route path="history" element={<Myhistory/>}></Route>
            <Route path="allusers" element={<RequireAdmin><AllUsers/></RequireAdmin>}></Route>

          </Route>

        </Routes>

        {/* toast */}
        <Toaster />

      </RouteContext.Provider>
    </div>
  );
}

export default App;
