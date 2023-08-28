import styles from './User.module.scss';
import className from 'classnames/bind';
import Login from '../../component/Login';
import Register from '../../component/Register';
import { useState } from 'react';

const cx = className.bind(styles);

function User() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (forName) => {
        setCurrentForm(forName);
    };

    return (
        <div className={cx('wrapper')}>
            {currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />}
        </div>
    );
}

export default User;
