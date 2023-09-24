import styles from './User.module.scss';
import className from 'classnames/bind';
import Login from '../../../component/Login';
import Register from '../../../component/Register';
import { useState } from 'react';
import LogoGhost from '../../../component/LogoGhost';

const cx = className.bind(styles);

function User() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (forName) => {
        setCurrentForm(forName);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('logoghost')}>
                <LogoGhost />
            </div>
            {currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />}
        </div>
    );
}

export default User;
