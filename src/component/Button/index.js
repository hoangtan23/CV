import styles from './Button.module.scss';
import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

const cx = className.bind(styles);

function Button({ to, href, onClick, icon, children, login, audio, status, ...passProps }) {
    const context = useContext(ThemeContext);
    let Comp = 'button';
    const classes = cx('wrapper', { icon, login, audio, status }, context.theme);
    const props = {
        onClick,
        href,
        to,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    );
}

export default Button;
