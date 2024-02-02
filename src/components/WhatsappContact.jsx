import React from 'react';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppContact = () => {
  const openWhatsApp = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const phoneNumber = "9911124032";
    const message = "Hello!";

    if (isMobile) {
      // Open in WhatsApp mobile app
      window.open(
        `https://api.whatsapp.com/send?phone=+91${phoneNumber}&text=${encodeURIComponent(
          message
        )}`
      );
    } else {
      console.log("on desktop")
      // Open in WhatsApp web for desktop
      window.open(
        `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
          message
        )}`
      );
    }
  };

  return (
    <Fab
      style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 999,
        backgroundColor: '#25D366', // WhatsApp color
        color: '#fff',
      }}
      onClick={openWhatsApp}
      aria-label="WhatsApp Contact"
    >
      <WhatsAppIcon />
    </Fab>
  );
};

export default WhatsAppContact;
