import styles from './CV.module.scss';
import className from 'classnames/bind';
import Profile from '..';
import CVVietnamese from '../../../component/CVVietnamese';
import CVEnglish from '../../../component/CVEnglish';
import { useState } from 'react';

function CV({ active, setActive }) {
    const cx = className.bind(styles);
    const [current, setCurrent] = useState('vn');

    const toggleCV = (language) => {
        setCurrent(language);
    };
    return (
        <div className={cx('wrapper')}>
            <Profile
                content={
                    current === 'vn' ? <CVVietnamese onSwitchCV={toggleCV} /> : <CVEnglish onSwitchCV={toggleCV} />
                }
            />
        </div>
    );
}

export default CV;
