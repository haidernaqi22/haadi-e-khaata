import React from 'react'

export default function Headings(props) {
    return (
        <div>
            <div className='row'>
                <div className='col'>
                    <h1 className='my-2'>{props.title}</h1>
                </div>
                <div className='col btn-col'>
                    <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">Add {props.title === 'Stats of Records' ? 'Records' : props.title}</button>
                </div>
            </div>
        </div>
    )
}
