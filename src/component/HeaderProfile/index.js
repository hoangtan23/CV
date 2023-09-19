import styles from './HeaderProfile.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGhost, faX } from '@fortawesome/free-solid-svg-icons';
import LogoGhost from '../LogoGhost';

const cx = classNames.bind(styles);

function HeaderProfile({ active, setActive }) {
    let className = cx('menu-toggle', { active });

    return (
        <div className={cx('header')}>
            <div className={cx('header__content')}>
                <LogoGhost />
                <div className={className} onClick={() => setActive(!active)}>
                    <FontAwesomeIcon icon={faBars} className={cx('bx-menu')} />
                    <FontAwesomeIcon icon={faX} className={cx('bx-x')} />
                </div>
            </div>
        </div>
    );
}

export default HeaderProfile;
