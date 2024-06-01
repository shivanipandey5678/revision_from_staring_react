import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Tickets from '../pages/Tickets';
import Login from '../pages/Login';
import TicketCreate from '../pages/TicketCreate';
import TicketEdit from '../pages/TicketEdit';
import TicketView from '../pages/TicketView';
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
            <Route path='/ticket/create' element=
            {<PrivateRoute><TicketCreate/></PrivateRoute>}>
            </Route>

            <Route path='/ticket/view/:id' element=
            {<PrivateRoute><TicketView/></PrivateRoute>}>
            </Route>

            <Route path='/ticket/edit/:id' element=
            {<PrivateRoute><TicketEdit/></PrivateRoute>}>
            </Route>
        </Routes>
    )
}


