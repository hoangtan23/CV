import styles from './UXUI_Desogner.module.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

function UXUI_Desogner() {
    return <div className={cx('wrapper')}>UXUI_Desogner</div>;
}

export default UXUI_Desogner;
