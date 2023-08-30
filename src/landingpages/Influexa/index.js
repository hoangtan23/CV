import styles from './Influexa.module.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

function Influexa() {
    return <div className={cx('wrapper')}>Influexa</div>;
}

export default Influexa;
