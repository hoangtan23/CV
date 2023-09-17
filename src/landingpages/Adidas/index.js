import styles from './Adidas.module.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

function Adidas() {
    return <div className={cx('wrapper')}>Adidas</div>;
}

export default Adidas;
