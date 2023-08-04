import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div className='flex justify-center items-center py-4'>
        <p className='font-bold text-gray-800'>© Boubacar FALL [<span className='text-orange-600'>{year}</span>]</p>
    </div>
  )
}

export default Footer;