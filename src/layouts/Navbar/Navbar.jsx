import CreateCx from '~/utils/cxHelper';
import styles from './Navbar.module.scss';
import TextIcon from '~/components/TextIcon/TextIcon';
import { DropDownIcon, PhoneIcon } from '~/components/Icons/Icons';

const cx = CreateCx(styles);

function Navbar() {
    return (
        <div className={cx('container')}>
            <div className={cx('container-width')}>
                <div className={cx('wrapper')}>
                    <ul className={cx('list')}>
                        <li>
                            <TextIcon className={cx('item')} to="/" rightIcon={<DropDownIcon strokeWidth="1.5" />}>
                                <span className={cx('mr-6', 'text')}>Home</span>
                            </TextIcon>
                        </li>
                        <li>
                            <TextIcon className={cx('item')} to="/shop" rightIcon={<DropDownIcon strokeWidth="1.5" />}>
                                <span className={cx('mr-6', 'text')}>Shop</span>
                            </TextIcon>
                        </li>
                        <li>
                            <TextIcon className={cx('item')} to="/pages" rightIcon={<DropDownIcon strokeWidth="1.5" />}>
                                <span className={cx('mr-6', 'text')}>Pages</span>
                            </TextIcon>
                        </li>
                        <li>
                            <TextIcon className={cx('item')} to="/blog" rightIcon={<DropDownIcon strokeWidth="1.5" />}>
                                <span className={cx('mr-6', 'text')}>Blog</span>
                            </TextIcon>
                        </li>
                        <li>
                            <TextIcon
                                className={cx('item')}
                                to="/about-us"
                                rightIcon={<DropDownIcon strokeWidth="1.5" />}
                            >
                                <span className={cx('mr-6', 'text')}>About Us</span>
                            </TextIcon>
                        </li>
                        <li>
                            <TextIcon
                                className={cx('item')}
                                to="/contact-us"
                                rightIcon={<DropDownIcon strokeWidth="1.5" />}
                            >
                                <span className={cx('mr-6', 'text')}>Contact Us</span>
                            </TextIcon>
                        </li>
                    </ul>
                    <div className={cx('info')}>
                        <PhoneIcon />
                        <span>(219) 555-0114</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
