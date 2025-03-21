import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import CreateCx from '~/utils/cxHelper';
import styles from './FooterColumn.module.scss';

const cx = CreateCx(styles);

function FooterColumn({ title, items, className }) {
    return (
        <div className={className}>
            <h4 className={cx('title')}>{title}</h4>
            <ul>
                {items.map((item) => (
                    <li className={cx('item')} key={item.label}>
                        <Link className={cx('link-item')} to={item.to}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

FooterColumn.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            to: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default FooterColumn;
