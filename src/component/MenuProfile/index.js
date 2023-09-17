import styles from './MenuProfile.module.scss';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
const cx = classNames.bind(styles);

function MenuProfile({ active, setActive }) {
    const location = useLocation;

    useEffect(() => {
        setActive(false);
    }, [location]);

    let className = cx('menu', { active });
    return (
        <ul className={className}>
            <li>
                <Link to="/ProJect">ProJect</Link>
            </li>
            <li>
                <Link to="/LandingPages">LandingPages</Link>
            </li>
            <li>
                <Link to="/CV">CV</Link>
            </li>
        </ul>
    );
}

export default MenuProfile;
