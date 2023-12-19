import React from 'react'

export const Perks = ({selected, onChange}) => {

  function handleCheckBox(e) {
    const {checked, name} = e.target
    if (checked) {
        onChange([...selected, name])
    } else {
        onChange([...selected,filter(selectedName => selectedName !== name)])
    }
  }
  return (
    <div>
        <label>
            <input name='wifi' onChange={()=> handleCheckBox()} type="checkbox" className='flex rounded-2xl border p-4' />
            <span>Wifi</span>
        </label>

        <label>
            <input name='parking' onChange={()=> handleCheckBox()} type="checkbox" className='flex rounded-2xl border p-4' />
            <span>Parking gratuit</span>
        </label>

        <label>
            <input name='tv' onChange={()=> handleCheckBox()} type="checkbox" className='flex rounded-2xl border p-4' />
            <span>Télévision</span>
        </label>

        <label>
            <input name='radio' onChange={()=> handleCheckBox()} type="checkbox" className='flex rounded-2xl border p-4' />
            <span>Radio</span>
        </label>

        <label>
            <input name='pets' onChange={()=> handleCheckBox()} type="checkbox" className='flex rounded-2xl border p-4' />
            <span>Animaux acceptés</span>
        </label>
    </div>
  )
}
