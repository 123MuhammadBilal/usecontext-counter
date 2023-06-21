import React from 'react'
import { useContext } from 'react';
import Test from './Test';
import { CounterContext } from '../App';

export const Counter = () => {

  const {count,setCount} = useContext(CounterContext);


    const onInc = () =>{
        setCount(count + 1)
    }
    const onDec = () =>{
        setCount(count - 1)
    }
  return (
    <>
    <h4>{count}</h4>
    <button onClick={onInc}>Inc</button>
    <button onClick={onDec}>Dec</button>
    <Test/>
    </>
  )
}