import styles from './Audio.module.scss';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePause, faCirclePlay, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';
import frog from './frog.mp3';
import rain from './frog.mp3';

const cx = className.bind(styles);

function Audio() {
    const [play, setPlay] = useState(false);
    const oceanRef = useRef();
    const MAX = 20;

    function toggleAudio() {
        if (play) {
            oceanRef.current.pause();
            setPlay(false);
        } else {
            oceanRef.current.play();
            setPlay(true);
        }
    }

    function handleVolume(e) {
        const { value } = e.target;
        const volume = Number(value) / MAX;
        oceanRef.current.volume = volume;
    }

    return (
        <div className={cx('audio')}>
            <button className={cx('play')} onClick={toggleAudio}>
                {!play ? <FontAwesomeIcon icon={faCirclePlay} /> : <FontAwesomeIcon icon={faCirclePause} />}
            </button>
            <button className={cx('volume')}>
                <input className={cx('slider')} type="range" min={0} max={20} onChange={(e) => handleVolume(e)} />
                <FontAwesomeIcon icon={faVolumeHigh} />
            </button>
            <audio ref={oceanRef} src={frog} loop />
        </div>
    );
}

export default Audio;
