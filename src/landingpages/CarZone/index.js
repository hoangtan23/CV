import styles from './CarZone.module.scss';
import className from 'classnames/bind';
import cars from './img/sports-car-with-sun-and-birds-3946ld-removebg-preview 1.png';
import cars1 from './img/Rectangle 87.png';
import girl from './img/image 23.png';
const cx = className.bind(styles);

function CarZone() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('topnav')}>
                    <div className={cx('label')}>
                        CarZone
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
                        <div className="ring">
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
                        <button className="login">Login</button>
                    </div>
                </div>

                <div className={cx('content')}>
                    <div className={cx('paragraph-first')}>
                        <span>Best In Auto</span>
                        <span>Rental & Service</span>
                        <img src={cars1} />
                    </div>
                    <div className={cx('paragraph-secound')}>
                        <img src={girl} />
                        <span>
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour, or randomised words which don't look
                            even slightly believable. If you are going to
                        </span>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default CarZone;
