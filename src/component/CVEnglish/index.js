import styles from './CVEnglish.module.scss';
import classNames from 'classnames/bind';
import ava from '../../images/happy1.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faCode, faLocationDot, faPalette, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
    faCss3,
    faFacebook,
    faFigma,
    faGithub,
    faHtml5,
    faJs,
    faNode,
    faReact,
} from '@fortawesome/free-brands-svg-icons';
import STU from './img/STULogo.png';
import F8 from './img/f8-icon.png';
import FPT from './img/FPT.png';
import W3 from './img/W3.png';

const cx = classNames.bind(styles);

function CVEnglish(props) {
    return (
        <div className={cx('wrapper')}>
            <img src={ava} alt="img" className={cx('img-ava')} />
            <div className={cx('left')}>
                <h1>Tran Hoang Tan</h1>
                <h2>Frontend Development</h2>
                <div>
                    "Change..."
                    <h4>Everything-Everywhere</h4>
                </div>
                <div className={cx('left-content')}>
                    <div className={cx('left-item')}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <div className={cx('left-tiltle')}>
                            <h4>Email</h4>
                            <span>hoangtan2398@gmail.com</span>
                        </div>
                    </div>
                    <div className={cx('left-item')}>
                        <FontAwesomeIcon icon={faPhone} />
                        <div className={cx('left-tiltle')}>
                            <h4>Phone</h4>
                            <span>0901.875387</span>
                        </div>
                    </div>
                    <div className={cx('left-item')}>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <div className={cx('left-tiltle')}>
                            <h4>Address</h4>
                            <span>District 8,HCM City,Vietnam</span>
                        </div>
                    </div>
                </div>
                <div className={cx('socials')}>
                    <h4>socials</h4>
                    <div className={cx('socials-item')}>
                        <FontAwesomeIcon icon={faFacebook} />
                        <div className={cx('socials-tiltle')}>
                            <h4>FaceBook</h4>
                            <span>hoangtan2398@gmail.com</span>
                        </div>
                    </div>
                    <div className={cx('socials-item')}>
                        <FontAwesomeIcon icon={faGithub} />
                        <div className={cx('socials-tiltle')}>
                            <h4>Github</h4>
                            <span>hoangtan2398@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className={cx('languages')}>
                    <h4>Languages</h4>
                    <div className={cx('languages-item')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                            <g clip-path="url(#clip0_304_8731)">
                                <path
                                    d="M15.5556 -1H0.444526C-0.537314 -1 -1.33325 -0.164265 -1.33325 0.866667V11.1333C-1.33325 12.1643 -0.537314 13 0.444526 13H15.5556C16.5375 13 17.3334 12.1643 17.3334 11.1333V0.866667C17.3334 -0.164265 16.5375 -1 15.5556 -1Z"
                                    fill="#22438B"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M1.33336 -0.0666504L-0.467529 -0.0423837L-0.444418 1.80002L14.6507 12.0928L16.4614 12.0583L16.4276 10.2271L1.33336 -0.0666504Z"
                                    fill="white"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0.444553 -0.0666504L-0.444336 0.866683L15.5557 12.0667L16.4446 11.1334L0.444553 -0.0666504Z"
                                    fill="#C7152A"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M14.6667 -0.0666504H16.4444V1.80002C16.4444 1.80002 5.99999 8.70295 1.34932 12.0928C1.29332 12.1339 -0.426675 12.0956 -0.426675 12.0956L-0.564453 10.3214L14.6667 -0.0666504Z"
                                    fill="white"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M15.5939 -0.0927734L16.4446 0.866693L0.444553 12.0667L-0.444336 11.1334L15.5939 -0.0927734Z"
                                    fill="#C7152A"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5.77789 -0.0666504H10.2223V3.66668H16.4446V8.33335H10.2223V12.0667H5.77789V8.33335H-0.444336V3.66668H5.77789V-0.0666504Z"
                                    fill="white"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M6.66678 -0.0666504H9.33344V4.60002H16.4446V7.40002H9.33344V12.0667H6.66678V7.40002H-0.444336V4.60002H6.66678V-0.0666504Z"
                                    fill="#C7152A"
                                />
                                <path
                                    d="M15.5555 -0.533325H0.444417C-0.291962 -0.533325 -0.888916 0.0934762 -0.888916 0.866675V11.1333C-0.888916 11.9065 -0.291962 12.5333 0.444417 12.5333H15.5555C16.2919 12.5333 16.8889 11.9065 16.8889 11.1333V0.866675C16.8889 0.0934762 16.2919 -0.533325 15.5555 -0.533325Z"
                                    stroke="black"
                                    stroke-opacity="0.1"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_304_8731">
                                    <rect width="18.6667" height="14" fill="white" transform="translate(-1.33325 -1)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div>
                            English
                            <span>Native</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('right')}>
                <div className={cx('education')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path
                            d="M5.00008 7.08333C3.84949 7.08333 2.91675 6.15059 2.91675 5C2.91675 3.84941 3.84949 2.91667 5.00008 2.91667C6.15067 2.91667 7.08341 3.84941 7.08341 5C7.08341 6.15059 6.15067 7.08333 5.00008 7.08333Z"
                            fill="#C696FC"
                        />
                    </svg>
                    <h1>Education</h1>
                    <div className={cx('education-item')}>
                        <img src={STU} alt="img" />
                        <span>Business</span>
                    </div>
                    <div className={cx('education-item')}>
                        <img src={F8} alt="img" />
                        <span>HTML,CSS,ReactJS</span>
                    </div>
                    <div className={cx('education-item')}>
                        <img src={W3} alt="img" />
                        <span>HTML,CSS,JS</span>
                    </div>
                </div>
                <div className={cx('skills')}>
                    <svg
                        className={cx('skills-svg')}
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                    >
                        <path
                            d="M5.00008 7.08333C3.84949 7.08333 2.91675 6.15059 2.91675 5C2.91675 3.84941 3.84949 2.91667 5.00008 2.91667C6.15067 2.91667 7.08341 3.84941 7.08341 5C7.08341 6.15059 6.15067 7.08333 5.00008 7.08333Z"
                            fill="#C696FC"
                        />
                    </svg>
                    <h1>Skills</h1>
                    <div className={cx('skills-item')}>
                        <div className={cx('design')}>
                            <div className={cx('design-item')}>
                                <FontAwesomeIcon icon={faPalette} />
                                <h4>Design</h4>
                            </div>
                            <div className={cx('design-item')}>
                                <FontAwesomeIcon icon={faFigma} />
                                Figma
                            </div>
                            <div className={cx('design-item')}>
                                <FontAwesomeIcon icon={faFigma} />
                                Figma
                            </div>
                        </div>
                        <div className={cx('design')}>
                            <div className={cx('design-item')}>
                                <FontAwesomeIcon icon={faCode} />
                                <h4>Development</h4>
                            </div>
                            <div className={cx('design-item')}>
                                <FontAwesomeIcon icon={faHtml5} />
                                HTML5
                            </div>
                            <div className={cx('design-item')}>
                                <FontAwesomeIcon icon={faCss3} />
                                CSS3
                            </div>
                            <div className={cx('design-item')}>
                                <FontAwesomeIcon icon={faJs} />
                                Javasrcipt
                            </div>
                            <div className={cx('design-item')}>
                                <FontAwesomeIcon icon={faReact} />
                                ReactJS
                            </div>
                        </div>
                        <div className={cx('design')}>
                            <div className={cx('design-item')}>
                                <FontAwesomeIcon icon={faPaperPlane} />
                                <h4>Planing</h4>
                            </div>
                            <div className={cx('design-item')}>
                                <FontAwesomeIcon icon={faNode} />
                                ExpressJS
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('experience')}>
                    <svg
                        className={cx('experience-svg')}
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                    >
                        <path
                            d="M5.00008 7.08333C3.84949 7.08333 2.91675 6.15059 2.91675 5C2.91675 3.84941 3.84949 2.91667 5.00008 2.91667C6.15067 2.91667 7.08341 3.84941 7.08341 5C7.08341 6.15059 6.15067 7.08333 5.00008 7.08333Z"
                            fill="#C696FC"
                        />
                    </svg>
                    <h3>Experience</h3>
                    <div className={cx('experience-item')}>
                        <p>
                            <svg
                                width="72"
                                height="72"
                                viewBox="0 0 72 72"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="jsx-ddfb0b416b0db288 mx-auto block h-10 w-10"
                            >
                                <path
                                    d="M0 8C0 3.58172 3.58172 0 8 0H64C68.4183 0 72 3.58172 72 8V64C72 68.4183 68.4183 72 64 72H8C3.58172 72 0 68.4183 0 64V8Z"
                                    fill="#A50064"
                                    class="jsx-ddfb0b416b0db288"
                                ></path>
                                <path
                                    d="M51.859 10C45.6394 10 40.5057 15.0349 40.5057 21.3533C40.5057 27.5729 45.5407 32.7065 51.859 32.7065C58.0786 32.7065 63.2123 27.6716 63.2123 21.3533C63.2123 15.1337 58.1774 10 51.859 10ZM51.859 26.1908C49.1935 26.1908 47.0215 24.0188 47.0215 21.3533C47.0215 18.6877 49.1935 16.5158 51.859 16.5158C54.5246 16.5158 56.6965 18.6877 56.6965 21.3533C56.6965 24.0188 54.5246 26.1908 51.859 26.1908Z"
                                    fill="white"
                                    class="jsx-ddfb0b416b0db288"
                                ></path>
                                <path
                                    d="M28.7576 10C26.8818 10 25.1048 10.5923 23.6239 11.6783C22.2418 10.5923 20.4648 10 18.4903 10C13.7515 10 10 13.8502 10 18.4903V32.7065H16.5158V18.4903C16.5158 17.4043 17.4043 16.6145 18.3915 16.6145C19.4775 16.6145 20.2673 17.503 20.2673 18.4903V32.7065H26.7831V18.4903C26.7831 17.4043 27.6716 16.6145 28.6589 16.6145C29.7448 16.6145 30.5346 17.503 30.5346 18.4903V32.7065H37.0504V18.589C37.2479 13.8502 33.4963 10 28.7576 10Z"
                                    fill="white"
                                    class="jsx-ddfb0b416b0db288"
                                ></path>
                                <path
                                    d="M51.859 37.6427C45.6394 37.6427 40.5057 42.6776 40.5057 48.996C40.5057 55.2156 45.5407 60.3492 51.859 60.3492C58.0786 60.3492 63.2123 55.3143 63.2123 48.996C63.2123 42.6776 58.1774 37.6427 51.859 37.6427ZM51.859 53.7347C49.1935 53.7347 47.0215 51.5628 47.0215 48.8972C47.0215 46.2317 49.1935 44.0598 51.859 44.0598C54.5246 44.0598 56.6965 46.2317 56.6965 48.8972C56.6965 51.6615 54.5246 53.7347 51.859 53.7347Z"
                                    fill="white"
                                    class="jsx-ddfb0b416b0db288"
                                ></path>
                                <path
                                    d="M28.7576 37.6427C26.8818 37.6427 25.1048 38.235 23.6239 39.321C22.2418 38.235 20.4648 37.6427 18.4903 37.6427C13.7515 37.6427 10 41.4929 10 46.133V60.3492H16.5158V46.0342C16.5158 44.9483 17.4043 44.1585 18.3915 44.1585C19.4775 44.1585 20.2673 45.047 20.2673 46.0342V60.2505H26.7831V46.0342C26.7831 44.9483 27.6716 44.1585 28.6589 44.1585C29.7448 44.1585 30.5346 45.047 30.5346 46.0342V60.2505H37.0504V46.133C37.2479 41.3942 33.4963 37.6427 28.7576 37.6427Z"
                                    fill="white"
                                    class="jsx-ddfb0b416b0db288"
                                ></path>
                            </svg>
                            <img src={FPT} alt="img" />
                        </p>
                        <span>Accountant-Reconciliation</span>
                        <ul>
                            Work related to IT:
                            <li>Handle bigdata</li>
                            <li>Write getting key reconciliation process </li>
                        </ul>
                    </div>
                </div>
            </div>
            <button className={cx('btn')} onClick={() => props.onSwitchCV('vn')}>
                Tiếng Việt
            </button>
        </div>
    );
}

export default CVEnglish;
