import styles from './Weather.module.scss';
import classNames from 'classnames/bind';
import axios from 'axios';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function WeatherApp() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    const apiURl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            axios
                .get(apiURl)
                .then((res) => {
                    setData(res.data);
                    console.log(res.data);
                })
                .catch();
            setLocation('');
        }
    };

    console.log(location);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onKeyDown={handleSearch}
                    placeholder="Enter Location"
                    type="text"
                />
            </div>
            <div className={cx('content')}>
                <h2>{data.name}</h2>
                <div className={cx('temp')}>
                    {data.main ? <h1>{(((data.main.temp - 32) * 5) / 9).toFixed(1)}°C</h1> : null}
                </div>
                <div className={cx('decription')}>{data.main ? <h3>{data.weather[0].main}</h3> : null}</div>
            </div>

            {data.name !== undefined && (
                <div className={cx('footer')}>
                    <div className={cx('local')}>
                        <h3>
                            <FontAwesomeIcon icon={faLocationDot} />
                            Local
                        </h3>
                        {data.main ? (
                            <p>
                                {data.name},{data.sys.country}
                            </p>
                        ) : null}
                    </div>
                    <div className={cx('sea-level')}>
                        <h3>Sea Levels</h3>
                        {data.main ? <p>{(data.main.sea_level / 3.2808).toFixed()}Meters</p> : null}
                    </div>

                    <div className={'wind'}>
                        <h3>Wind Speed</h3>
                        {data.wind ? <p>{data.wind.speed}MPH</p> : null}
                    </div>
                </div>
            )}
        </div>
    );
}

export default WeatherApp;
