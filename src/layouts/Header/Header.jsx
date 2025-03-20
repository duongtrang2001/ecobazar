import CreateCx from '~/utils/cxHelper';
import styles from './Header.module.scss';

import HeaderTopBar from '../HeaderTopBar/HeaderTopBar';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';

const cx = CreateCx(styles);

function Header() {
    return (
        <div className={cx('container')}>
            <div className={cx('container-width')}>
                <HeaderTopBar />
            </div>
            <div className={cx('break-line')}></div>
            <div className={cx('container-width')}>
                <HeaderMain />
            </div>
            <Navbar />
        </div>
    );
}

export default Header;
