import style from './Stats.module.scss';
import classNames from 'classnames/bind';
const cl = classNames.bind(style);

const Stats = ({ stats }) => {
  if (!stats) {
    return <span className={cl('stats')}>Loading...</span>;
  }
  return (
    <span className={cl('stats')}>
      {stats.error && '🤯 Error!'}
      {stats.isLoading && '🙄 Loading...'}
      {stats.downloads !== null && `🤘 ${stats.downloads}`}
    </span>
  );
};
export default Stats;
