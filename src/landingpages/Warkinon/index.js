import styles from './Warkinon.module.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

function Warkinon() {
    return <div className={cx('wrapper')}>Warkinon</div>;
}

export default Warkinon;
