import CreateCx from '~/utils/cxHelper';
import styles from './FooterSubscribe.module.scss';
import Input from '~/components/Input/Input';
import Button from '~/components/Button/Button';
import {
    FacebookActiveIcon,
    FacebookIcon,
    InstagramActiveIcon,
    InstagramIcon,
    PinterestActiveIcon,
    PinterestIcon,
    TwitterActiveIcon,
    TwitterIcon,
} from '~/components/Icons/Icons';

const cx = CreateCx(styles);

function FooterSubscribe() {
    return (
        <div className={cx('container')}>
            <div className={cx('container-width')}>
                <div className={cx('grid', 'wrapper')}>
                    <div className={cx('content')}>
                        <h3 className={cx('title')}>Subcribe our Newsletter</h3>
                        <p className={cx('text')}>
                            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit
                            eu magna.
                        </p>
                    </div>
                    <div className={cx('subscribe')}>
                        <Input className={cx('input')} placeholder="Your email address" />
                        <Button large normal className={cx('btn')}>
                            Subscribe
                        </Button>
                    </div>
                    <div className={cx('social')}>
                        <ul className={cx('list')}>
                            <li className={cx('item')}>
                                <FacebookIcon className={cx('icon')} /> <FacebookActiveIcon className={cx('active')} />
                            </li>
                            <li className={cx('item')}>
                                <TwitterIcon className={cx('icon')} /> <TwitterActiveIcon className={cx('active')} />
                            </li>
                            <li className={cx('item')}>
                                <PinterestIcon className={cx('icon')} />{' '}
                                <PinterestActiveIcon className={cx('active')} />
                            </li>
                            <li className={cx('item')}>
                                <InstagramIcon className={cx('icon')} />{' '}
                                <InstagramActiveIcon className={cx('active')} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterSubscribe;
