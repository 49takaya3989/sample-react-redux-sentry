import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { decremented, incremented, incrementedByAmount } from './counterSlice';
import { Link } from 'react-router-dom';

const Counter: React.FC = () => {
  // Reduxストアからカウンターの値を取得
  const counterValue = useSelector((st: RootState) => st.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <Link to='/about'>about</Link>
      <h2>Counter</h2>
      <div>
        <button className='btn' onClick={() => dispatch(decremented())}>-</button>
        <span className='num'>{counterValue}</span>
        <button className='btn' onClick={() => dispatch(incremented())}>+</button>
      </div>
      <div>
        <button onClick={() => dispatch(incrementedByAmount(5))}>+5</button>
      </div>
      {/* ↓このボタンは、sentryにエラーを送信するために、あえてエラーのまま残してる */}
      <button onClick={() => methodDoesNotExist()}>Break the world</button>
    </div>
  );
};

export default Counter;
