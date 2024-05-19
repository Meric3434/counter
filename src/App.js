import React, { useState, useEffect } from 'react';
import Kart from './Kart'; // Kart bileşenini import edin
import arkaPlan from './assets/background.png';
import './App.css';
import Button from '@mui/material/Button';



function App() {
  
  
  // Kart değerleri ve türleri
  const değerler = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const türler = ['♥', '♦', '♣', '♠'];

  // Tüm kartları oluşturun ve state'e kaydedin
  const [kartlar, setKartlar] = useState(
    değerler.flatMap(değer => türler.map(tür => ({ değer, tür, seçili: false })))
  );

  const resetKartlar = () => {
    setKartlar(kartlar.map(kart => ({ ...kart, seçili: false })));
  };

  


  // Kartları türlerine göre sırala
  kartlar.sort((a, b) => {
    const türSırası = ['♠','♥','♣','♦']; // Sıralama önceliği
    return türSırası.indexOf(a.tür) - türSırası.indexOf(b.tür);
  });

  const kartSeç = (değer, tür) => {
    setKartlar(
      kartlar.map(kart =>
        kart.değer === değer && kart.tür === tür
          ? { ...kart, seçili: !kart.seçili }
          : kart
      )
    );
  };

  return (
    <div
     style={{
        backgroundImage: `url(${arkaPlan})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        display: 'block',
        flexDirection: 'row'
       
      }}
    >
      <Button 
        variant="contained" 
        onClick={resetKartlar}
        sx={{ position:'fixed', top: 500, right: 0, color: '#ffd740'}}
      >
        Reset
      </Button>
      {/* Tüm kartları map ile oluşturunn */}
      {kartlar.map(kart => (
        <Kart
          key={kart.değer + kart.tür}
          değer={kart.değer}
          tür={kart.tür}
          seçili={kart.seçili}
          onKartSeç={kartSeç}
        />
      ))}
    </div>
  );
}

export default App;