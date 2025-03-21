import PropTypes from 'prop-types';

import CreateCx from '~/utils/cxHelper';
import styles from './Button.module.scss';

const cx = CreateCx(styles);
function Button({
    children,
    className,
    small = false,
    medium = false,
    large = false,
    normal = false,
    outline = false,
    ghost = false,
    to,
    href,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    const props = {
        onClick,
        ...passProps,
    };

    let Comp = 'button';

    if (to) {
        props.to = to;
        Comp = 'Link';
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        small,
        medium,
        large,
        normal,
        outline,
        ghost,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
    normal: PropTypes.bool,
    outline: PropTypes.bool,
    ghost: PropTypes.bool,
    to: PropTypes.string,
    href: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
