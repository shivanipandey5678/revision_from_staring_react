import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Tickets from '../pages/Tickets';
import Login from '../pages/Login';
import {Route,Routes} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';


export default function AllRoute(){
    return(
        <Routes>
            <Route path='/' element=
            {<PrivateRoute><Home/></PrivateRoute>}>

            </Route>

            <Route path='/about' element=
            {<PrivateRoute><About/></PrivateRoute>}>

            </Route>
            <Route path='/contact' element=
            {<PrivateRoute><Contact/></PrivateRoute>}>

            </Route>
            <Route path='/tickets' element=
            {<PrivateRoute><Tickets/></PrivateRoute>}>

            </Route>
            <Route path='/login' element=
            {<Login/>}>

            </Route>
        </Routes>
    )
}


