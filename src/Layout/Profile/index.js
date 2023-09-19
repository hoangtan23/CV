import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import HeaderProfile from '../../component/HeaderProfile';
import MenuProfile from '../../component/MenuProfile';
import IntroHome from '../../component/IntroHome';

const cx = classNames.bind(styles);

function Profile({ content, intro }) {
    const [active, setActive] = useState(false);

    const classes = cx('container', { active });
    return (
        <div className={classes}>
            <HeaderProfile active={active} setActive={setActive} />
            <div className={cx('main-container')}>
                <div className={cx('main')}>
                    <div className={cx('intro')}>
                        <IntroHome />
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('overlay')}>
                            <Outlet />
                            {content}
                        </div>
                    </div>
                </div>
            </div>
            <MenuProfile active={active} setActive={setActive} />
        </div>
    );
}

export default Profile;
