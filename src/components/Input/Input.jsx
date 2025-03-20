import CreateCx from '~/utils/cxHelper';
import styles from './Input.module.scss';

const cx = CreateCx(styles);

function Input({ type, value, placeholder = null, noBorder = false, className, ...props }) {
    const classes = {
        [className]: className,
        noBorder,
    };

    return <input className={cx(classes)} type={type} value={value} placeholder={placeholder} {...props} />;
}

export default Input;
