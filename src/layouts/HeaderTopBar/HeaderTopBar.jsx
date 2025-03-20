import CreateCx from '~/utils/cxHelper';
import styles from './HeaderTopBar.module.scss';
import { DropDownIcon, LocationIcon } from '~/components/Icons/Icons';
import TextIcon from '~/components/TextIcon/TextIcon';
import { Link } from 'react-router-dom';

const cx = CreateCx(styles);

function HeaderTopBar() {
    return (
        <div className={cx('container')}>
            <TextIcon leftIcon={<LocationIcon className={cx('mr-8', 'location-icon')} />}>
                <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
            </TextIcon>
            <div className={cx('group')}>
                <TextIcon rightIcon={<DropDownIcon />}>
                    <span className={cx('mr-6')}>USD</span>
                </TextIcon>
                <TextIcon rightIcon={<DropDownIcon />}>
                    <span className={cx('mr-6')}>Eng</span>
                </TextIcon>
                <div className={cx('line')}></div>
                <div className={cx('wrapper')}>
                    <Link className={cx('item', 'mr-4')} to="/signIn">
                        Sign in
                    </Link>
                    <span className={cx('mr-4')}>/</span>
                    <Link className={cx('item')} to="/signUp">
                        Sing up
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HeaderTopBar;
