import { IconContext } from 'react-icons';
import style from './StatisticsItem.module.css';

const StatisticsItem = ({ data: { title, total }, icon }) => {
  return (
    <>
      <IconContext.Provider value={{ color: '#2196f3', size: '24px' }}>
        {icon}
      </IconContext.Provider>

      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};

export default StatisticsItem;
