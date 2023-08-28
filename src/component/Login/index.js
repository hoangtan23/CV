import styles from './Login.module.scss';
import className from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const cx = className.bind(styles);

function Login(props) {
    return (
        <section>
            <div className={cx('wrapper')}>
                <form action="">
                    <h2 className={cx('tiltle')}>Login</h2>
                    <div className={cx('inputbox')}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <input type="email" required />
                        <label htmlFor="">Email</label>
                    </div>
                    <div className={cx('inputbox')}>
                        <FontAwesomeIcon icon={faLock} />
                        <input type="password" required />
                        <label htmlFor="">Password</label>
                    </div>
                    <div className={cx('forget')}>
                        <label htmlFor="">
                            <input type="checkbox" />
                            Remember Me <a href="#">Forget Password</a>
                        </label>
                    </div>
                    <button className={cx('btn')}>Log in</button>
                    <div className={cx('register')}>
                        <p>
                            Don't have a account{' '}
                            <button onClick={() => props.onFormSwitch('register')}>Register</button>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;
