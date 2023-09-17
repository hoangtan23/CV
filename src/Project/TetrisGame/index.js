import styles from './TetrisGame.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Tetris() {
    return <div className={cx('wrapper')}>TetrisGame</div>;
}

export default Tetris;
