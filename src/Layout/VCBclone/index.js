import styles from './VCBclone.module.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

function VCBclone() {
    return <div className={cx('wrapper')}>VCBclone</div>;
}

export default VCBclone;
