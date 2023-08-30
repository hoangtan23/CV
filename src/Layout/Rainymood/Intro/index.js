import styles from './Intro.module.scss';
import className from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear, faSmileBeam } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../component/Button';
import happy from '../../../images/happy1.gif';
import tired from '../../../images/tired1.gif';

const cx = className.bind(styles);

function Intro() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('tiltle')}>how you feels today?</div>

                <div className={cx('status')}>
                    <div className={cx('happy')}>
                        <img src={happy} />
                        <Button status to="/home">
                            <span className={cx('happy-tiltle')}>Happy</span>
                            <FontAwesomeIcon icon={faSmileBeam} bounce />
                        </Button>
                    </div>
                    <div className={cx('tired')}>
                        <img src={tired} />
                        <Button status to="/home">
                            <span className={cx('tired-tiltle')}>Tired</span>
                            <FontAwesomeIcon icon={faSadTear} bounce />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;
