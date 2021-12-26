import {useSelector} from 'react-redux';
import {getIsAuth} from '../redux/user/userSelectors';
import {Navigate} from 'react-router-dom';



export const PrivateRoute = (props) => {
    const isAuth = useSelector(getIsAuth);

    return isAuth ? props.children : <Navigate to='/' />
};