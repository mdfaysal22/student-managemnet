import { createBrowserRouter } from "react-router-dom";
import AddStudent from "../Components/Pages/AddStudent/AddStudent";
import Login from "../Components/Pages/Login/Login";
import ManageStudent from "../Components/Pages/ManageStudent/ManageStudent";
import SignUp from "../Components/Pages/SignUp/SignUp";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/add-student',
                element: <AddStudent></AddStudent>
            },
            {
                path: '/manage-student',
                element: <ManageStudent></ManageStudent>
            }
        ]
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>
    },
    {
        path: '/login',
        element: <Login></Login>
    }
])