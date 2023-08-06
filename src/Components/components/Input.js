import React from 'react';
// import Styles from './InputStyles'

export const Input = (props) => {
    console.log(props)
    const {type, value, onChange, placeholder} = props
    return (
        <input type={type} placeholder={placeholder} value={value} onChange={onChange}/>
    )
}