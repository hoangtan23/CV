import styles from './CarZone.module.scss';
import className from 'classnames/bind';
import cars from './img/sports-car-with-sun-and-birds-3946ld-removebg-preview 1.png';
import cars1 from './img/Rectangle 87.png';
import girl from './img/image 23.png';
import elip from './img/image 25.png';
import season11 from './img/seasion 1- 1.png';
import season12 from './img/seasion 1- 2.png';
import season13 from './img/seasion 1- 3.png';
import season2 from './img/seasion 2.png';
import season31 from './img/seasion 3-1.png';
import season32 from './img/seasion 3-2.png';
import season33 from './img/seasion 3-3.png';
import season34 from './img/seasion 3-4.png';
import season41 from './img/seasion 4-1.png';
import season42 from './img/seasion 4-2.png';
import season43 from './img/seasion 4-3.png';
import season51 from './img/seasion 5-1.png';
import season52 from './img/seasion 5-2.png';
import season53 from './img/seasion 5-3.png';
import season61 from './img/seasion 6-1.png';
import season62 from './img/seasion 6-2.png';
import season63 from './img/seasion 6-3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faStar } from '@fortawesome/free-solid-svg-icons';

const cx = className.bind(styles);

function CarZone() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('topnav')}>
                    <div className={cx('label')}>
                        <span>CarZone</span>
                        <img src={cars} alt="error" />
                    </div>

                    <div className={cx('header-menu')}>
                        <span>HOME</span>
                        <span>NEW</span>
                        <span>USED</span>
                        <span>CAR DETIL</span>
                        <span>PAGES</span>
                    </div>

                    <div className={cx('header-noti')}>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="28"
                                viewBox="0 0 25 28"
                                fill="none"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M1.00112 16.6709V16.3797C1.04457 15.5183 1.32551 14.6838 1.81495 13.962C2.62961 13.0951 3.18729 12.0325 3.42948 10.8861C3.42948 10 3.42948 9.10126 3.50825 8.2152C3.91516 3.94937 8.20749 1 12.4474 1H12.5524C16.7922 1 21.0844 3.94937 21.5045 8.2152C21.5832 9.10126 21.5045 10 21.5701 10.8861C21.8155 12.0352 22.3727 13.1009 23.1847 13.9747C23.6777 14.6901 23.9591 15.5216 23.9985 16.3797V16.6582C24.0279 17.8154 23.6223 18.9439 22.8565 19.8355C21.8448 20.8779 20.4717 21.5264 18.9974 21.6582C14.6742 22.1139 10.3123 22.1139 5.98913 21.6582C4.51648 21.5207 3.14543 20.8731 2.12998 19.8355C1.37611 18.9432 0.975966 17.8215 1.00112 16.6709Z"
                                    stroke="black"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M9 26C9.6225 26.5457 10.5367 26.899 11.5401 26.9815C12.5437 27.0639 13.5537 26.8689 14.3468 26.4395C14.5907 26.3125 14.8101 26.1648 15 26"
                                    stroke="black"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <span>4</span>
                        </div>
                        <button>Login</button>
                    </div>
                </div>

                <div className={cx('content')}>
                    <div className={cx('paragraph-first')}>
                        <div>
                            <span>Best In Auto</span>
                            <span>Rental & Service</span>
                        </div>

                        <img src={cars1} alt="img" />
                        <img src={elip} className={cx('elip')} alt="img" />
                    </div>
                    <div className={cx('paragraph-secound')}>
                        <img src={girl} alt="img" />
                        <img src={elip} className={cx('elip')} alt="img" />
                        <span>
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour, or randomised words which don't look
                            even slightly believable. If you are going to
                        </span>
                    </div>
                </div>
            </header>
            <main>
                <season className={cx('season1')}>
                    <header>Why Choose Us ?</header>
                    <div className={cx('season1-tiltle')}>
                        Why Choose Us ?
                        <span>
                            Delectus, nesciunt imperdiet dolor litora orci? Tristique per natus. Saepe convallis,
                            nostra. Ducimus convallis necessitatibus alias
                        </span>
                    </div>
                    <div className={cx('season1-container')}>
                        <div className={cx('season1-item')}>
                            <img src={season11} alt="img" />
                            <h3>Online Vehicle Rental Booking</h3>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly believable.
                            </p>
                        </div>
                        <div className={cx('season1-item')}>
                            <img src={season12} alt="img" />
                            <h3>Professional Technician Services</h3>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly believable.
                            </p>
                        </div>
                        <div className={cx('season1-item')}>
                            <img src={season13} alt="img" />
                            <h3>Full Auto Servicing Facility</h3>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly believable.
                            </p>
                        </div>
                    </div>
                </season>
                <season className={cx('season2')}>
                    <div className={cx('form')}>
                        <h1>Book And Rent A Car</h1>
                        <h5>
                            Delectus, nesciunt imperdiet dolor litora orci? Tristique per natus. Saepe convallis,
                            nostra. Ducimus convallis necessitatibus alias, bibendum elit nemo.
                        </h5>
                        <form>
                            <input placeholder="Your Name..."></input>
                            <input placeholder="Your Email..."></input>
                            <input placeholder="Phone Number..."></input>
                            <select>
                                <option value={1} disabled selected>
                                    Toyota
                                </option>
                                <option value={2}>Honda</option>
                                <option value={3}>BMW</option>
                                <option value={4}>Audi</option>
                            </select>
                            <input placeholder="Pick Up date..."></input>
                            <input placeholder="Drop Of date..."></input>
                            <button>Inquiry Now</button>
                        </form>
                    </div>
                    <div className={cx('img-form')}>
                        <img src={season2} alt="img" />
                    </div>
                </season>
                <season className={cx('season3')}>
                    <h1>Comfortable Car For Hire !</h1>
                    <h5>
                        Delectus, nesciunt imperdiet dolor litora orci? Tristique per natus. Saepe convallis, nostra.
                        Ducimus convallis necessitatibus alias, bibendum elit nemo.
                    </h5>
                    <div className={cx('season3-content')}>
                        <img className={cx('img34')} src={season34} alt="img" />
                        <div>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                                need to be sure there isn't anything embarrassing hidden in the middle of text. All the
                                Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessaryc.
                            </p>
                            <p>
                                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                                the Internet tend to repeat predefined chunks as necessaryc.
                            </p>
                        </div>
                        <div>
                            <img src={season33} alt="img" />
                            <img src={season32} alt="img" />
                            <img src={season31} alt="img" />
                        </div>
                    </div>
                </season>
                <season className={cx('season4')}>
                    <h1>Comfortable Car For Hire !</h1>
                    <header>
                        <h2>Comfortable Car</h2>
                        <span>
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour, or randomised words which don't look
                            even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
                            sure there isn't anything embarrassing hidden in the middle of text.
                        </span>
                    </header>
                    <div className={cx('season4-img')}>
                        <img src={season41} alt="img" />
                        <img src={season42} alt="img" />
                        <img src={season43} alt="img" />
                    </div>

                    <h2>Our Faithful Staff</h2>
                    <span>
                        Delectus, nesciunt imperdiet dolor litora orci? Tristique per natus. Saepe convallis, nostra.
                        Ducimus convallis necessitatibus alias, bibendum elit nemo.
                    </span>
                    <div className={cx('season4-content')}>
                        <div className={cx('season4-item')}>
                            <img src={season51} />
                            <h2>William Scott</h2>
                            <h4>Rental Agent</h4>
                            <p>
                                <FontAwesomeIcon icon={faPhone} />
                                (+89)652 555 320
                            </p>
                        </div>
                        <div className={cx('season4-item')}>
                            <img src={season52} />
                            <h2>William Scott</h2>
                            <h4>Rental Agent</h4>
                            <p>
                                <FontAwesomeIcon icon={faPhone} />
                                (+89)652 555 320
                            </p>
                        </div>
                        <div className={cx('season4-item')}>
                            <img src={season53} />
                            <h2>William Scott</h2>
                            <h4>Rental Agent</h4>
                            <p>
                                <FontAwesomeIcon icon={faPhone} />
                                (+89)652 555 320
                            </p>
                        </div>
                    </div>
                </season>
                <season className={cx('season5')}>
                    <header>
                        <h1>Read the best review from our users</h1>
                        <span>
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour, or randomised
                        </span>
                    </header>
                    <div className={cx('season5-content')}>
                        <div className={cx('season5-item')}>
                            <span>
                                I am very satisfied with the services provided and the consultation is very pleasant.
                                The doctors are also friendly and very trustworthy and reliable
                            </span>
                            <p>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </p>
                            <div className={cx('season5-person')}>
                                <img src={season61} alt="img" />
                                <h4>Ronney Samba</h4>
                            </div>
                        </div>
                        <div className={cx('season5-item')}>
                            <span>
                                I am very happy with the service so friendly and the doctor who is really great with his
                                expertise and can be relied on. and I can call the doctor whenever I want it can be
                                morning, noon, or night, this is very helpful for me. thank you for the service
                            </span>
                            <p>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </p>
                            <div className={cx('season5-person')}>
                                <img src={season62} alt="img" />
                                <h4>Jenniver Janet</h4>
                            </div>
                        </div>
                        <div className={cx('season5-item')}>
                            <span>
                                I am very satisfied with the services provided and the consultation is very pleasant.
                                The doctors are also friendly and very trustworthy and reliable
                            </span>
                            <p>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </p>
                            <div className={cx('season5-person')}>
                                <img src={season63} alt="img" />
                                <h4>Ronney Samba</h4>
                            </div>
                        </div>
                    </div>
                </season>
            </main>
            <footer className={cx('footer')}>
                <header>
                    <h1>Welcame car zone</h1>
                    <button>View Car</button>
                </header>
                <div className={cx('footer-content')}>
                    <p>
                        <h1>
                            Car zone
                            <img src={cars} />
                        </h1>
                        <h5>Eiusmod condimentum totam, ultrices, quis elem entum, dui.</h5>
                    </p>
                    <ul>
                        <li>ABOUT US</li>
                        <li>Home</li>
                        <li>About</li>
                        <li>Car</li>
                        <li>Team</li>
                    </ul>
                    <ul>
                        <li>COMPANY</li>
                        <li>Core Value</li>
                        <li>Partner w/us</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                    <ul>
                        <li>SUPPORT</li>
                        <li>Support Center</li>
                        <li>Feedback</li>
                        <li>Accessibility</li>
                    </ul>
                    <div>
                        GET IN TOUCH
                        <input placeholder="Your name here..." />
                        <button>Get Access</button>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default CarZone;
