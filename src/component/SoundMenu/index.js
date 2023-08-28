import styles from './SoundMenu.module.scss';
import className from 'classnames/bind';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh, faVolumeMute } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button';
import { sounds } from '../../Sounds';
import { useState } from 'react';
import { useRef } from 'react';
import React from 'react';

const cx = className.bind(styles);

function SoundMenu() {
    var settings = {
        dots: true,
        className: `${styles.slickslider}`,
        dotsClass: `slick-dots ${styles.dots}`,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 2000,
    };

    const [turnon, setTurnOn] = useState(false);
    const [checkPlay, setCheckPlay] = useState([]);
    const soundRef = useRef([]);

    console.log(soundRef.current);

    const handleCheck = (id) => {
        setCheckPlay((prev) => {
            const isCheck = checkPlay.includes(id);
            if (isCheck) {
                return checkPlay.filter((item) => item !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    const toggleSound = (id) => {
        if (turnon) {
            soundRef.current[id].pause();
            setTurnOn(false);
        } else {
            soundRef.current[id].play();
            setTurnOn(true);
        }
    };

    return (
        <div className={cx('slick')}>
            <Slider {...settings}>
                {sounds.map((item, index) => (
                    <div className={cx('wrapper')} key={index}>
                        <div className={cx('sound-item')}>
                            <Button icon>
                                <img src={item.icon} alt={item.name} />
                                <span>{item.name}</span>
                            </Button>
                            <span className={cx('suggest')}>{item.suggest}</span>
                        </div>
                        <button
                            className={cx('volume-item')}
                            onClick={function (event) {
                                handleCheck(item.id);
                                toggleSound(item.id);
                            }}
                        >
                            {!checkPlay.includes(item.id) ? (
                                <FontAwesomeIcon icon={faVolumeMute} />
                            ) : (
                                <FontAwesomeIcon icon={faVolumeHigh} />
                            )}
                        </button>
                        <audio src={item.link} ref={(node) => (soundRef.current[item.id] = node)} loop></audio>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SoundMenu;
