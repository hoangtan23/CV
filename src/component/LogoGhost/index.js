import styles from './LogoGhost.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);

function LogoGhost() {
    return (
        <Tippy content="Move to Home">
            <div className={cx('wrapper')}>
                <Link to="/">
                    <FontAwesomeIcon icon={faGhost} />
                </Link>
            </div>
        </Tippy>
    );
}

export default LogoGhost;
