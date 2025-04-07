import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = (props) => {
    const { element } = props;
    const navigate = useNavigate();

    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]);

    return token ? element : null;
}

export default PrivateRoute;
