import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudShowersHeavy, faCloudSun } from '@fortawesome/free-solid-svg-icons';

import className from 'classnames/bind';
import styles from './DarkMode.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

const cx = className.bind(styles);

const DarkMode = () => {
    const context = useContext(ThemeContext);

    return (
        <div className={cx('wrapper')}>
            <input
                className={cx('dark_mode_input')}
                type="checkbox"
                id="darkmode-toggle"
                onChange={context.toggleTheme}
            />
            <label className={cx('dark_mode_label')} htmlFor="darkmode-toggle">
                <FontAwesomeIcon className={cx('sunny')} icon={faCloudSun} />
                <FontAwesomeIcon className={cx('rainy')} icon={faCloudShowersHeavy} />
            </label>
        </div>
    );
};

export default DarkMode;
