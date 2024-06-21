import React from 'react'

const AddEditNotes = () => {
  return (
    <div>
      <div className='flex felx-col gap-2'>
      
      <label className='input-label'>Title</label>
      <input 
      type='text'
      className='text-2xl text-slate-950 outline-none'
      placeholder='Go To Gym At 5' 
      />
    </div>

    <div className='flex flex-col gap-2 mt-4'>
        <label className='input-label'>Content</label>
        <textarea 
        type='text'
        className='text-sm text-slate-950 outline-none p-2 rounded'
        placeholder='Content'
        rows={10} 
        />
    </div>
    </div>
  )
}

export default AddEditNotes
