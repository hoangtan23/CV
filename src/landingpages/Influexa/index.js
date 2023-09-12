import styles from './Influexa.module.scss';
import className from 'classnames/bind';
import section11 from './img/section11.png';
import section12 from './img/section12.png';
import section21 from './img/section21.png';
import section22 from './img/section22.png';
import section23 from './img/section23.png';
import section31 from './img/section31.png';
import section32 from './img/section32.png';
import section41 from './img/section41.png';
import section42 from './img/section42.png';
import section43 from './img/section43.png';
import section44 from './img/section44.png';
import section45 from './img/section45.png';
import section46 from './img/section46.png';
import section51 from './img/section51.png';
import section52 from './img/section52.png';
import section53 from './img/section53.png';
import section54 from './img/section54.png';
import section61 from './img/section61.png';
import section62 from './img/section62.png';
import section63 from './img/section63.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const cx = className.bind(styles);

function Influexa() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('topnav')}>
                    <img src={section11} alt="img" />
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
                    <img src={section12} alt="img" />
                </div>
                <div className={cx('botnav')}>
                    <span>Facebook</span>
                    <span>Twitter</span>
                    <span>Google Plus</span>
                    <span>Linkedin</span>
                </div>
            </header>
            <main>
                <section className={cx('section2')}>
                    <h4>My Services</h4>
                    <h1>Why hire me for your next project</h1>
                    <div className={cx('section2-content')}>
                        <div className={cx('section2-item')}>
                            <img src={section21} alt="img" />
                            <h3>Blog articles</h3>
                            <span>
                                Mauris vel quam nunc. Quisque tempor tempus aliquet. Donec egestas odio et tempor.
                            </span>
                        </div>
                        <div className={cx('section2-item')}>
                            <img src={section22} alt="img" />
                            <h3>SEO strategy</h3>
                            <span>
                                Mauris vel quam nunc. Quisque tempor tempus aliquet. Donec egestas odio et tempor.
                            </span>
                        </div>
                        <div className={cx('section2-item')}>
                            <img src={section23} alt="img" />
                            <h3>Content architecture</h3>
                            <span>
                                Mauris vel quam nunc. Quisque tempor tempus aliquet. Donec egestas odio et tempor.
                            </span>
                        </div>
                    </div>
                </section>
                <section className={cx('section3')}>
                    <div className={cx('section3-left')}>
                        <div className={cx('section3-item')}>
                            <h2>UI/UX Design</h2>
                            <img className={cx('section3-arrow')} src={section31} alt="img" />
                            <div className={cx('section3-select')}>
                                <span>
                                    <img src={section32} alt="img" />
                                    Web Design
                                </span>
                                <span>
                                    <img src={section32} alt="img" />
                                    App Design
                                </span>
                                <span>
                                    <img src={section32} alt="img" />
                                    Dashboard Design
                                </span>
                            </div>
                        </div>
                        <div className={cx('section3-item')}>
                            <h2>Development</h2>
                            <img className={cx('section3-arrow')} src={section31} alt="img" />
                            <div className={cx('section3-select')}>
                                <span>
                                    <img src={section32} alt="img" />
                                    Web Development
                                </span>
                                <span>
                                    <img src={section32} alt="img" />
                                    App Development
                                </span>
                            </div>
                        </div>
                        <div className={cx('section3-item')}>
                            <h2>Branding</h2>
                            <img className={cx('section3-arrow')} src={section31} alt="img" />
                            <div className={cx('section3-select')}>
                                <span>
                                    <img src={section32} alt="img" />
                                    Branding Logo
                                </span>
                                <span>
                                    <img src={section32} alt="img" />
                                    Brand Promotion
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('section3-right')}>
                        <h2>Solving problems by the services</h2>
                        <h5>
                            I seek to push the limits of creativity to create high-engaging, user-friendly, and
                            memorable interactive experiences.
                        </h5>
                        <button>
                            Learn more
                            <FontAwesomeIcon icon={faArrowRightLong} />
                        </button>
                    </div>
                </section>
                <section className={cx('section4')}>
                    <h1>Let’s a have a look at my portfolio</h1>
                    <h5>
                        I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable
                        interactive experiences.
                    </h5>
                    <div className={cx('section4-img')}>
                        <img src={section41} alt="img" />
                        <img src={section42} alt="img" />
                        <img src={section43} alt="img" />
                        <img src={section44} alt="img" />
                        <img src={section45} alt="img" />
                        <img src={section46} alt="img" />
                    </div>
                    <button>VIEW MORE</button>
                </section>
                <section className={cx('section5')}>
                    <h1>What Prople Say</h1>
                    <p>
                        Welcome to our gym & fitness training centre. Sore today, strong tomorrow. Improve your fitness
                        today.
                    </p>
                    <div className={cx('section5-content')}>
                        <div className={cx('section5-item')}>
                            <h5>
                                <img className={cx('section5-item-top')} src={section51} alt="img" />
                                <img className={cx('section5-item-bot')} src={section52} alt="img" />I have been taking
                                gym and fitness training here since a long time and I found here so much easy, comfort
                                and flexibility. The mentors are so good and they train me very well.
                            </h5>
                            <div className={cx('section5-member')}>
                                <img src={section53} alt="img" />
                                <div>
                                    <h3>Ben Stokes</h3>
                                    <span>Members</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('section5-item')}>
                            <h5>
                                <img className={cx('section5-item-bot')} src={section52} alt="img" />
                                <img className={cx('section5-item-top')} src={section51} alt="img" />I have been taking
                                gym and fitness training here since a long time and I found here so much easy, comfort
                                and flexibility. The mentors are so good and they train me very well.
                            </h5>
                            <div className={cx('section5-member')}>
                                <img src={section54} alt="img" />
                                <div>
                                    <h3>Ben Fokes</h3>
                                    <span>Members</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('dots')}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </section>
            </main>
            <footer className={cx('footer')}>
                <div className={cx('footer-img')}>
                    <header>
                        <h3>Our Trusted Clients</h3>
                        <p>Proin eget tortor risus cras ultricies ligula sed portavamus suscipit tortor</p>
                    </header>
                    <span>
                        <img src={section61} alt="img" />
                        <img src={section62} alt="img" />
                        <img src={section63} alt="img" />
                    </span>
                </div>
                <div className={cx('footer-link')}>
                    <img src={section11} alt="img" />

                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffere</p>

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
