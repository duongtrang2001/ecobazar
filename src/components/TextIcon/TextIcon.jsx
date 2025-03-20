import PropTypes from 'prop-types';

import CreateCx from '~/utils/cxHelper';
import styles from './TextIcon.module.scss';
import { Link } from 'react-router-dom';

const cx = CreateCx(styles);

function TextIcon({ leftIcon, rightIcon, children, to, className, ...props }) {
    let Comp = 'div';
    if (to) {
        (props.to = to), (Comp = Link);
    }

    return (
        <Comp className={cx('container', className)} {...props}>
            {leftIcon && leftIcon}
            {children}
            {rightIcon && rightIcon}
        </Comp>
    );
}

TextIcon.propTypes = {
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    classNames: PropTypes.string,
};

export default TextIcon;
