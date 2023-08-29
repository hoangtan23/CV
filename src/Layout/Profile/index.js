import styles from './Profile.module.scss';
import className from 'classnames/bind';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { project, landingpages } from '../../images/index.js';

const cx = className.bind(styles);

function Profile() {
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

    return (
        <div className={cx('wrapper')}>
            <header>Header</header>
            <div className={cx('content')}>
                <h3>Project</h3>

                <Slider {...settings}>
                    {project.map((item, index) => (
                        <div className={cx('content-item')} key={index}>
                            <img src={item.img} />
                            <div>{item.tiltle}</div>
                            <Link className={cx('btn')}>view</Link>
                        </div>
                    ))}
                </Slider>

                <h3>Landing Page</h3>

                <Slider {...settings}>
                    {landingpages.map((item, index) => (
                        <div className={cx('content-item')} key={index}>
                            <img src={item.img} />
                            <div>{item.tiltle}</div>
                            <Link className={cx('btn')}>view</Link>
                        </div>
                    ))}
                </Slider>

                <button>CV</button>
            </div>
        </div>
    );
}

export default Profile;
