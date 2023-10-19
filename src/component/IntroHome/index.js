import styles from './IntroHome.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function IntroHome() {
    return (
        <div className={cx('intro')}>
            <span>Hi, I am Tan. My parent was born dev but my work is accountant</span>
            <span>And NOW I will listen them and become</span>
            <span>DEVELOPER</span>
        </div>
    );
}

export default IntroHome;
