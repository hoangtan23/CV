import styles from './CrytoApp.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CrytoApp() {
    return <div className={cx('wrapper')}>CrytoApp</div>;
}

export default CrytoApp;
