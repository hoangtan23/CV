import styles from './Influexa.module.scss';
import className from 'classnames/bind';
import season11 from './img/season11.png';
import season12 from './img/season12.png';
import season21 from './img/season21.png';
import season22 from './img/season22.png';
import season23 from './img/season23.png';
import season31 from './img/season31.png';
import season32 from './img/season32.png';
import season41 from './img/season41.png';
import season42 from './img/season42.png';
import season43 from './img/season43.png';
import season44 from './img/season44.png';
import season45 from './img/season45.png';
import season46 from './img/season46.png';
import season51 from './img/season51.png';
import season52 from './img/season52.png';
import season53 from './img/season53.png';
import season54 from './img/season54.png';
import season61 from './img/season61.png';
import season62 from './img/season62.png';
import season63 from './img/season63.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const cx = className.bind(styles);

function Influexa() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('topnav')}>
                    <img src={season11} alt="img" />
                    <div>
                        <span>Home</span>
                        <span>Case Studíe</span>
                        <span>Blog</span>
                        <span>Services</span>
                        <span>Contact</span>
                    </div>
                    <button>Contact</button>
                </div>
                <div className={cx('header-content')}>
                    <div className={cx('header-item')}>
                        <h1>
                            I am <span>William</span> a UX Designer from the Bronx
                        </h1>
                        <h5>
                            Hi, my name is Alex Smith and I love creating unique interfaces using code. Pixel perfect
                            every time just try me out.
                        </h5>
                        <button>- My Works</button>
                    </div>
                    <img src={season12} alt="img" />
                </div>
                <div className={cx('botnav')}>
                    <span>Facebook</span>
                    <span>Twitter</span>
                    <span>Google Plus</span>
                    <span>Linkedin</span>
                </div>
            </header>
            <main>
                <season className={cx('season2')}>
                    <h4>My Services</h4>
                    <h1>Why hire me for your next project</h1>
                    <div className={cx('season2-content')}>
                        <div className={cx('season2-item')}>
                            <img src={season21} alt="img" />
                            <h3>Blog articles</h3>
                            <span>
                                Mauris vel quam nunc. Quisque tempor tempus aliquet. Donec egestas odio et tempor.
                            </span>
                        </div>
                        <div className={cx('season2-item')}>
                            <img src={season22} alt="img" />
                            <h3>SEO strategy</h3>
                            <span>
                                Mauris vel quam nunc. Quisque tempor tempus aliquet. Donec egestas odio et tempor.
                            </span>
                        </div>
                        <div className={cx('season2-item')}>
                            <img src={season23} alt="img" />
                            <h3>Content architecture</h3>
                            <span>
                                Mauris vel quam nunc. Quisque tempor tempus aliquet. Donec egestas odio et tempor.
                            </span>
                        </div>
                    </div>
                </season>
                <season className={cx('season3')}>
                    <div className={cx('season3-left')}>
                        <div className={cx('season3-item')}>
                            <h2>UI/UX Design</h2>
                            <div className={cx('season3-select')}>
                                <span>
                                    <img src={season32} alt="img" />
                                    Web Design
                                </span>
                                <span>
                                    <img src={season32} alt="img" />
                                    App Design
                                </span>
                                <span>
                                    <img src={season32} alt="img" />
                                    Dashboard Design
                                </span>
                            </div>
                        </div>
                        <div className={cx('season3-item')}>
                            <h2>Development</h2>
                            <div className={cx('season3-select')}>
                                <span>
                                    <img src={season32} alt="img" />
                                    Web Development
                                </span>
                                <span>
                                    <img src={season32} alt="img" />
                                    App Development
                                </span>
                            </div>
                        </div>
                        <div className={cx('season3-item')}>
                            <h2>Branding</h2>
                            <div className={cx('season3-select')}>
                                <span>
                                    <img src={season32} alt="img" />
                                    Branding Logo
                                </span>
                                <span>
                                    <img src={season32} alt="img" />
                                    Brand Promotion
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('season3-right')}>
                        <h2>Solving problems by the services</h2>
                        <h5>
                            I seek to push the limits of creativity to create high-engaging, user-friendly, and
                            memorable interactive experiences.
                        </h5>
                        <button>
                            learn more
                            <FontAwesomeIcon icon={faArrowRightLong} />
                        </button>
                    </div>
                </season>
                <season className={cx('season4')}>
                    <h1>Let’s a have a look at my portfolio</h1>
                    <h5>
                        I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable
                        interactive experiences.
                    </h5>
                    <div className={cx('season4-img')}>
                        <img src={season41} alt="img" />
                        <img src={season42} alt="img" />
                        <img src={season43} alt="img" />
                        <img src={season44} alt="img" />
                        <img src={season45} alt="img" />
                        <img src={season46} alt="img" />
                    </div>
                    <button>VIEW MORE</button>
                </season>
                <season className={cx('season5')}>
                    <h1>What Prople Say</h1>
                    <span>
                        Welcome to our gym & fitness training centre. Sore today, strong tomorrow. Improve your fitness
                        today.
                    </span>
                    <div className={cx('season5-content')}>
                        <div className={cx('season5-item')}>
                            <img src={season51} alt="img" />
                            <img src={season52} alt="img" />
                            <h5>
                                I have been taking gym and fitness training here since a long time and I found here so
                                much easy, comfort and flexibility. The mentors are so good and they train me very well.
                            </h5>
                            <div className={cx('season5-member')}>
                                <img src={season53} alt="img" />
                                <h3>Ben Stokes</h3>
                                <span>Members</span>
                            </div>
                        </div>
                        <div className={cx('season5-item')}>
                            <img src={season51} alt="img" />
                            <img src={season52} alt="img" />
                            <h5>
                                I have been taking gym and fitness training here since a long time and I found here so
                                much easy, comfort and flexibility. The mentors are so good and they train me very well.
                            </h5>
                            <div className={cx('season5-member')}>
                                <img src={season54} alt="img" />
                                <h3>Ben Fokes</h3>
                                <span>Members</span>
                            </div>
                        </div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </season>
            </main>
            <footer className={cx('footer')}>
                <div className={cx('footer-img')}>
                    <header>
                        <h3>Our Trusted Clients</h3>
                        <span>Proin eget tortor risus cras ultricies ligula sed portavamus suscipit tortor</span>
                    </header>
                    <span>
                        <img src={season61} alt="img" />
                        <img src={season62} alt="img" />
                        <img src={season63} alt="img" />
                    </span>
                </div>
                <div className={cx('footer-link')}>
                    <div>
                        <img src={season11} alt="img" />
                        <span>
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffere
                        </span>
                    </div>
                    <div>
                        <h3>Newsletter</h3>
                        <input placeholder="Submit your email.." />
                    </div>
                    <div>
                        <h3>Follow Me</h3>
                        <span>
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faLinkedin} />
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faYoutube} />
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Influexa;
