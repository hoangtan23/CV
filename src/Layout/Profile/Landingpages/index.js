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
                    <p>
                        <div className="tiltle">LandingPages</div>
                        <SlickSlider tiltle={'landingpages'} />
                    </p>
                }
            />
        </div>
    );
}

export default Landingpages;
