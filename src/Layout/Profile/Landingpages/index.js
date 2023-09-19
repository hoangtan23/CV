import styles from './Landingpages.module.scss';
import className from 'classnames/bind';
import SlickSlider from '../../../component/SlickSlider';
import Profile from '..';

const cx = className.bind(styles);

function Landingpages() {
    return (
        <div className={cx('wrapper')}>
            <Profile
                content={
                    <div className={cx('content')}>
                        <div className="tiltle">LandingPages</div>
                        <SlickSlider tiltle={'landingpages'} />
                    </div>
                }
            />
        </div>
    );
}

export default Landingpages;
