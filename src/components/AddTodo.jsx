import React from 'react';
import {useDispatch} from 'react-redux'
import { addTodo  } from '../features/todo/todoSlice';
import { useState } from 'react';

function AddTodo() {
    const [input , setInput] = useState('');
    const dispatch = useDispatch();

    function submitHandler(e){
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }
  return (
    <div className='mt-5'>
      <form className='flex justify-center gap-5'
      onSubmit={submitHandler}  >
        <input className='w-1/4 h-8 p-3 border-none text-lg font-semibold'
        placeholder='Enter Todo'
        type='text'
        value={input}
        onChange={(e)=> setInput(e.target.value)
        
        }
        />
        <button className='bg-slate-900 pl-5 pr-5 pt-1 pb-1
         text-yellow-50' 
        type='submit'>Add Todo</button>
      </form>
    </div>
  )
}
export default AddTodo
