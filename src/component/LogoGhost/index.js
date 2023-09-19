import styles from './LogoGhost.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function LogoGhost() {
    return (
        <div className={cx('wrapper')}>
            <Link to="/">
                <FontAwesomeIcon icon={faGhost} />
            </Link>
        </div>
    );
}

export default LogoGhost;
