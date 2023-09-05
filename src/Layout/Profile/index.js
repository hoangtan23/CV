import styles from './Profile.module.scss';
import className from 'classnames/bind';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import stick1 from '../../images/image 107.png';
import stick2 from '../../images/image 785.png';
import stick3 from '../../images/image 786.png';
import stick4 from '../../images/image 791.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { project, landingpages } from '../../images/object/index.js';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

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
                <div className={cx('project')} id="project">
                    <h3>Project</h3>

                    <Slider {...settings}>
                        {project.map((item, index) => (
                            <div className={cx('content-item')} key={index}>
                                <img src={item.img} alt="error" />
                                <div>{item.tiltle}</div>
                                <Link className={cx('btn')} to={item.router}>
                                    view
                                </Link>
                            </div>
                        ))}
                    </Slider>
                    <img src={stick1} className={cx('stick1')} alt="error" />
                    <img src={stick2} className={cx('stick2')} alt="error" />
                    <img src={stick3} className={cx('stick3')} alt="error" />
                    <img src={stick4} className={cx('stick4')} alt="error" />
                    <img src={stick4} className={cx('stick5')} alt="error" />
                    <a className={cx('move')} href="#landingpages">
                        Landingpages
                        <FontAwesomeIcon icon={faArrowDown} />
                    </a>
                </div>

                <div className={cx('ldpages')} id="landingpages">
                    <h3>Landing Page</h3>

                    <Slider {...settings}>
                        {landingpages.map((item, index) => (
                            <div className={cx('content-item')} key={index}>
                                <img src={item.img} alt="error" />
                                <div>{item.tiltle}</div>
                                <Link className={cx('btn')} to={item.router}>
                                    view
                                </Link>
                            </div>
                        ))}
                    </Slider>
                    <img src={stick1} className={cx('stick1')} alt="error" />
                    <img src={stick2} className={cx('stick2')} alt="error" />
                    <img src={stick3} className={cx('stick3')} alt="error" />
                    <img src={stick4} className={cx('stick4')} alt="error" />
                    <img src={stick4} className={cx('stick5')} alt="error" />
                    <a className={cx('move')} href="#project">
                        Project
                        <FontAwesomeIcon icon={faArrowUp} />
                    </a>
                </div>

                <button className={cx('cv')}>
                    View CV
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    );
}

export default Profile;
