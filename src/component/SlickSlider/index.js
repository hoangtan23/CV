import styles from './SlickSlider.module.scss';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { project, landingpages } from '../../images/object/index';

const cx = className.bind(styles);

function SlickSlider({ tiltle }) {
    var settings = {
        dots: true,
        className: `${styles.slickslider}`,
        dotsClass: `slick-dots ${styles.dots}`,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 2000,
    };

    let ojb;

    if (tiltle === 'project') {
        ojb = project;
    } else ojb = landingpages;

    console.log(ojb);

    return (
        <div className={cx('wrapper')}>
            <Slider {...settings}>
                {ojb.map((item, index) => (
                    <div className={cx('content-item')} key={index}>
                        <img src={item.img} alt="error" />
                        <div>{item.tiltle}</div>
                        <Link className={cx('btn')} to={item.router}>
                            view
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SlickSlider;
