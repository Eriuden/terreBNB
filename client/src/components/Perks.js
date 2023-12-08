import React from 'react'

export const Perks = ({selected, onChange}) => {
  return (
    <div>
        <label>
            <input type="checkbox" className='flex rounded-2xl border p-4' />
            <span>Wifi</span>
        </label>

        <label>
            <input type="checkbox" className='flex rounded-2xl border p-4' />
            <span>Parking gratuit</span>
        </label>

        <label>
            <input type="checkbox" className='flex rounded-2xl border p-4' />
            <span>Télévision</span>
        </label>

        <label>
            <input type="checkbox" className='flex rounded-2xl border p-4' />
            <span>Radio</span>
        </label>

        <label>
            <input type="checkbox" className='flex rounded-2xl border p-4' />
            <span>Animaux acceptés</span>
        </label>
    </div>
  )
}
