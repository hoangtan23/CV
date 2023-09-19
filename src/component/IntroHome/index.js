import styles from './IntroHome.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function IntroHome() {
    return (
        <div className={cx('intro')}>
            <span>Hi, I am Tan. My parent was porn dev but my work is accountant</span>
            <span>And NOW I will listen them and become</span>
            <span>DEVELOPMENT</span>
        </div>
    );
}

export default IntroHome;
