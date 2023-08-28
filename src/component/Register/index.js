import styles from './Register.module.scss';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

const cx = className.bind(styles);

function Register(props) {
    return (
        <section>
            <div className={cx('wrapper')}>
                <form action="">
                    <h2 className={cx('tiltle')}>Register</h2>
                    <div className={cx('inputbox')}>
                        <FontAwesomeIcon icon={faUser} />
                        <input type="email" required />
                        <label htmlFor="">Name</label>
                    </div>
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
                            Don't have a account <button onClick={() => props.onFormSwitch('login')}>Login</button>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Register;
