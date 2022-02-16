import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Japanese from '../assets/images/Japanese.png';
import chinese from '../assets/images/chinese.png';
import english from '../assets/images/english.png';
import korean from '../assets/images/korean.png';


const DropMenu = ({
  children, data, onClick
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div onClick={toggle} className='Menu'>
      {children}
      {isOpen && (
        <div className="Menu-content">
          <ul className='Menu-content-ul'>
            {data?.map(({ name, nodeRef }) => <li onClick={() => onClick(nodeRef)} className='Menu-content-ul-item' key={name}>{name}</li> )}
          </ul>
        </div>
      )}
    </div>
  )
}

export default DropMenu;