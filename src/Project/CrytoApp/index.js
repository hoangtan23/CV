import styles from './CrytoApp.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function CrytoApp() {
    const [coin, setCoin] = useState;
    const params = useParams();

    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

    return <div className={cx('wrapper')}></div>;
}

export default CrytoApp;
