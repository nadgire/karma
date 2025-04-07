import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './components/home/Home'
import Dashboard from './components/dashboard/Dashboard'
import Signin from './components/home/Signin'
import Signup from './components/home/signup/Signup'
import PrivateRoute from './components/privateRoute'
import Profile from './components/dashboard/Profile'
import EmpToCompReview from './components/review/EmpToCompReview'
import ChangePassword from './components/dashboard/ChangePassword'
import DeleteAccount from './components/dashboard/DeleteAccount'
import { Provider } from 'react-redux';
import  store from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>

        <BrowserRouter>
          <Routes>
            <Route element={<Home />} >
              <Route path='/login' element={<Signin />} />
              <Route path='/signup' element={<Signup />} />
            </Route>
            <Route path="/" element={<PrivateRoute element={<Dashboard />} />} >
              <Route path="/profile" element={<Profile />} />
              <Route path="/review" element={<EmpToCompReview />} />
              <Route path="/change-password" element={<ChangePassword />} />
              <Route path="/delete-account" element={<DeleteAccount />} />
              <Route path="/logout" element={<Home />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </Provider>

    </>
  )
}

export default App
