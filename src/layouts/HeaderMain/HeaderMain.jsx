import logo from '~/assets/Logo.svg';

import CreateCx from '~/utils/cxHelper';
import styles from './HeaderMain.module.scss';
import Input from '~/components/Input/Input';
import { FavouriteIcon, SearchIcon, ShoppingCartIcon } from '~/components/Icons/Icons';

const cx = CreateCx(styles);

function HeaderMain() {
    return (
        <div className={cx('container')}>
            <img src={logo} alt="Logo Ecobazar" />
            <div className={cx('search')}>
                <SearchIcon className={cx('search-icon')} />
                <Input noBorder className={cx('search-input')} placeholder="Search" />
                <button className={cx('btn')}>Search</button>
            </div>
            <div className={cx('actions')}>
                <FavouriteIcon />
                <div className={cx('line')}></div>
                <div className={cx('group')}>
                    <div className={cx('icon')}>
                        <ShoppingCartIcon />
                        <span className={cx('quantity')}>2</span>
                    </div>
                    <div className={cx('content')}>
                        <span className={cx('text')}>Shopping cart:</span>
                        <span className={cx('price')}>$57.00</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderMain;
