import React from 'react';
import './Error.css'; // Import your CSS file for styling

const Error = () => {
  const whatsappNumber = '94715354040';

  return (
    <div className='error-container'>
      <h1 className='error-heading'>Under construction</h1>
      <p className='error-message'>Check back later for updates.</p>
      {/* <p className='error-message'>Contact - 071 535 40 40 </p> */}

      <div className='hiks'>
        <button
          onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank', 'noopener,noreferrer')}
          className='whatsapp-button'
        >
          <i className='fab fa-whatsapp'></i>
        </button>
        <p className='error-message0'>WhatsApp</p>
      </div>

    </div>
  );
};

export default Error;
