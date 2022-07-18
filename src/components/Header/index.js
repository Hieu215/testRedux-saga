import style from './Header.module.scss';
import classNames from 'classnames/bind';
const cl = classNames.bind(style);
function Header() {
  return <div className={cl('wrapper')}>Header</div>;
}

export default Header;
