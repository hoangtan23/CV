import styles from './Profile.module.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

function Profile() {
    return (
        <div className={cx('wrapper')}>
            <header>Header</header>
            <div className={cx('content')}>
                <h3>Project</h3>
                <div>Content</div>
                <h3>Landing Page</h3>
                <div>Content</div>
                <button>CV</button>
            </div>
        </div>
    );
}

export default Profile;
