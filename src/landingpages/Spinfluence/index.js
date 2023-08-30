import styles from './Spinfluence.module.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

function Spinfluence() {
    return <div className={cx('wrapper')}>Spinfluence</div>;
}

export default Spinfluence;
