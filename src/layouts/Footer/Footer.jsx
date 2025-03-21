import CreateCx from '~/utils/cxHelper';
import styles from './Footer.module.scss';

import FooterSubscribe from '../FooterSubscribe/FooterSubscribe';
import Logo from '~/assets/Logo-light.png';
import { Link } from 'react-router-dom';
import FooterColumn from './FooterColumn/FooterColumn';
import applePay from '~/assets/payment/ApplePay.png';
import discover from '~/assets/payment/Discover.png';
import masterCard from '~/assets/payment/Mastercard.png';
import secure from '~/assets/payment/Secure.png';
import visa from '~/assets/payment/Visa.png';

const cx = CreateCx(styles);

function Footer() {
    return (
        <>
            <FooterSubscribe />
            <footer className={cx('container')}>
                <div className={cx('container-width')}>
                    <div className={cx('grid', 'group')}>
                        <div className={cx('company')}>
                            <Link to="/">
                                <img src={Logo} alt="Logo Ecobazar" />
                            </Link>
                            <p className={cx('text')}>
                                Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum
                                magna congue nec.
                            </p>
                            <div className={cx('wrapper')}>
                                <span className={cx('tel')}>(219) 555-0114</span>
                                or
                                <span className={cx('email')}>Proxy@gmail.com</span>
                            </div>
                        </div>

                        <FooterColumn
                            className={cx('navigation')}
                            title="My Account"
                            items={[
                                { label: 'My Account', to: '/my-account' },
                                { label: 'Order History', to: '/order-history' },
                                { label: 'Shopping Cart', to: '/shopping-cart' },
                                { label: 'Wishlish', to: '/wishlish' },
                            ]}
                        />
                        <FooterColumn
                            className={cx('navigation')}
                            title="Helps"
                            items={[
                                { label: 'Contact', to: '/contact' },
                                { label: 'Faqs', to: '/faqs' },
                                { label: 'Terms & Condition', to: '/rerms-condition' },
                                { label: 'Privacy Policy', to: '/privacy-policy' },
                            ]}
                        />
                        <FooterColumn
                            className={cx('navigation')}
                            title="Proxy"
                            items={[
                                { label: 'About', to: '/about' },
                                { label: 'Shop', to: '/shop' },
                                { label: 'Product', to: '/product' },
                                { label: 'Track Order', to: '/track-order' },
                            ]}
                        />
                        <FooterColumn
                            className={cx('navigation')}
                            title="Categories"
                            items={[
                                { label: 'Fruit & Vegetables', to: '/fruit-vegetables' },
                                { label: 'Meat & Fish', to: '/meat-fish' },
                                { label: 'Bread & Bakery', to: '/bread-bakery' },
                                { label: 'Beauty & Health', to: '/beauty-health' },
                            ]}
                        />
                    </div>
                    <div className={cx('copy-right')}>
                        <p>Ecobazar eCommerce © 2021. All Rights Reserved</p>
                        <ul className={cx('list-payment')}>
                            <li className={cx('item')}>
                                <img src={applePay} alt="Apple Pay" />
                            </li>
                            <li className={cx('item')}>
                                <img src={visa} alt="Visa" />
                            </li>
                            <li className={cx('item')}>
                                <img src={discover} alt="Discover" />
                            </li>
                            <li className={cx('item')}>
                                <img src={masterCard} alt="Master Card" />
                            </li>
                            <li className={cx('item')}>
                                <img src={secure} alt="Secure Payment" />
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
