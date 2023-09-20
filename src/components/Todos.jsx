import React, { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    return(
        <div>
            <h1 className='text-center font-bold
                text-white text-xl mt-3
            '>Todays Activity</h1>
            {
                todos.map((todo) => {
                    return (
                    <div className='flex flex-row 
                    items-center justify-center gap-7 mt-5'>
                            <div className='bg-red-500 p-1 pl-5
                            w-2/5 text-lg text-white font-semibold
                            ' 
                            
                            key={todo.id}>
                                    {todo.text}
                             </div> 
                            <div>
                            <button 
                            className='bg-slate-700 text-white  
                            pl-5 pr-5 pt-1 pb-1'
                            onClick={ () => 
                                dispatch(removeTodo(todo.id))
                            }>Delete
                            </button>
                            </div>
                        </div>
                        )
                })
            }
        </div>
    )
}

export default Todos
