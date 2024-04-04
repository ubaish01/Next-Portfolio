import clsx from 'clsx'
import React from 'react'

const ExpandArrow = ({ open }) => {
    return (
        <div className={clsx('transition-all', open ? "-rotate-180" : '')} >
            <svg className={clsx("w-6 h-6 rotate-180")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        </div>
    )
}

export default ExpandArrow