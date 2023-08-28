import styles from './Home.module.scss';
import className from 'classnames/bind';

import DarkMode from '../../component/DarkMode';
import Button from '../../component/Button';
import Audio from '../../component/Audio/index.js';
import SoundMenu from '../../component/SoundMenu';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const cx = className.bind(styles);

function Home() {
    const context = useContext(ThemeContext);

    var className = cx('wrapper-home', context.theme);

    return (
        <div className={className}>
            <header className={cx('header')}>
                <DarkMode />

                <div className={cx('login')}>
                    <Button login to="/user">
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                        Login
                    </Button>
                </div>
            </header>
            <div className={cx('content')}>
                <Audio />

                <div className={cx('tiltle')}>Rainy Mood</div>
                <div className={cx('detail')}>Rain Sounds for Sleep & Study</div>
                <SoundMenu />
            </div>
        </div>
    );
}

export default Home;
