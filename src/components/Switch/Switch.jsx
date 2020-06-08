import React, { useRef } from 'react'
import './Switch.css'

const Switch = ({setDarkMode, checked, setChecked}) => {
  
  const ref = useRef(null)

  const handleChange = () => {
    setChecked(ref.current.checked)
    setDarkMode(ref.current.checked)
  }
  
  return (
    <div className="dark-mode">
      <p className="dark-mode-title">
        {checked ? 'Dark ' : 'Light '}
        Mode
      </p>
      <input ref={ref} onChange={handleChange} checked={checked} type="checkbox" className="checkbox" id="checkbox"/>
      <label className="switch" htmlFor="checkbox"></label>
    </div>
  );
}
 
export default Switch;