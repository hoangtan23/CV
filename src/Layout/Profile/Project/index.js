import styles from './Project.module.scss';
import className from 'classnames/bind';
import SlickSlider from '../../../component/SlickSlider/index';
import Profile from '..';

const cx = className.bind(styles);

function Project() {
    return (
        <div className={cx('wrapper')}>
            <Profile
                content={
                    <p>
                        <div className="tiltle">Project</div>
                        <SlickSlider tiltle={'project'} />
                    </p>
                }
            />
        </div>
    );
}

export default Project;
