import React from 'react'
import { FaPlus } from 'react-icons/fa'

export default function AddItem({newItem, setNewItem, handleSubmit}) {
  return (
    <form className='addform' onSubmit={handleSubmit}>
        <lebal htmlFor = "addItem">Add Item</lebal>
        <input
            autoFocus
            id="addItem"
            type={"text"}
            placeholder={"Add items"}
            required
            value={newItem}
            onChange={(e)=>setNewItem(e.target.value)}
            />
        <button type='submit' aria-label='Add Item'>
            <FaPlus/>
        </button>
    </form>
  )
}
