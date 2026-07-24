import {createBrowserRouter} from 'react-router'
import LandingPage from './features/landing/pages/LandingPage'
import Login from './features/authentication/pages/Login'
import Register from './features/authentication/pages/Register'
import Protected from './features/authentication/components/Protected'
import Home from './features/interview/pages/Home'
import Interview from './features/interview/pages/interview'

export const router = createBrowserRouter([
    {
        path : "/",
        element : <Protected><Home /></Protected>
    },
    {
        path : "/landing",
        element : <LandingPage />
    },
    {
        path : "/login",
        element : <Login/>
    },
    {
        path : "/register",
        element : <Register/>
    },
    {
        path : "/interview/:interviewId",
        element: <Protected><Interview/></Protected>
    }
])