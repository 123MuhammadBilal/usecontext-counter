import { useContext } from 'react';
import { CounterContext } from '../App';



const Test = () => {
    const {count} = useContext(CounterContext);
  return (
    <div>{count}</div>
  )
}
export default Test