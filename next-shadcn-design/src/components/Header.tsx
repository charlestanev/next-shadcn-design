import React from 'react'
import { CommandDemo } from './Command'

function Header() {
    return (
        <div className='grid grid-cols-2 gap-4 p-4 border-b'>
            <CommandDemo />
        </div>
    )
}

export default Header