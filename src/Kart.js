import React from 'react';
import styled from 'styled-components';


// Tüm kart görsellerini import edin
import MacaAs from './assets/A♠.png';
import MacaKral from './assets/K♠.png';
import MacaKız from './assets/Q♠.png';
import MacaVale from './assets/J♠.png';
import MacaOn from './assets/10♠.png';
import MacaDokuz from './assets/9♠.png';
import MacaSekiz from './assets/8♠.png';
import MacaYedi from './assets/7♠.png';
import MacaAltı from './assets/6♠.png';
import MacaBeş from './assets/5♠.png';
import MacaDört from './assets/4♠.png';
import MacaÜç from './assets/3♠.png';
import Macaİki from './assets/2♠.png';
import KupaAs from './assets/A♥.png';
import KupaKral from './assets/K♥.png';
import KupaKız from './assets/Q♥.png';
import KupaVale from './assets/J♥.png';
import KupaOn from './assets/10♥.png';
import KupaDokuz from './assets/9♥.png';
import KupaSekiz from './assets/8♥.png';
import KupaYedi from './assets/7♥.png';
import KupaAltı from './assets/6♥.png';
import KupaBeş from './assets/5♥.png';
import KupaDört from './assets/4♥.png';
import KupaÜç from './assets/3♥.png';
import Kupaİki from './assets/2♥.png';
import SinekAs from './assets/A♣.png';
import SinekKral from './assets/K♣.png';
import SinekKız from './assets/Q♣.png';
import SinekVale from './assets/J♣.png';
import SinekOn from './assets/10♣.png';
import SinekDokuz from './assets/9♣.png';
import SinekSekiz from './assets/8♣.png';
import SinekYedi from './assets/7♣.png';
import SinekAltı from './assets/6♣.png';
import SinekBeş from './assets/5♣.png';
import SinekDört from './assets/4♣.png';
import SinekÜç from './assets/3♣.png';
import Sinekİki from './assets/2♣.png';
import KaroAs from './assets/A♦.png';
import KaroKral from './assets/K♦.png';
import KaroKız from './assets/Q♦.png';
import KaroVale from './assets/J♦.png';
import KaroOn from './assets/10♦.png';
import KaroDokuz from './assets/9♦.png';
import KaroSekiz from './assets/8♦.png';
import KaroYedi from './assets/7♦.png';
import KaroAltı from './assets/6♦.png';
import KaroBeş from './assets/5♦.png';
import KaroDört from './assets/4♦.png';
import KaroÜç from './assets/3♦.png';
import Karoİki from './assets/2♦.png';

// Görsel eşleştirme nesnesi
const kartGörselleri = {
  'A♠': MacaAs,
  'K♠': MacaKral,
  'Q♠': MacaKız,
  'J♠': MacaVale,
  '10♠': MacaOn,
  '9♠': MacaDokuz,
  '8♠': MacaSekiz,
  '7♠': MacaYedi,
  '6♠': MacaAltı,
  '5♠': MacaBeş,
  '4♠': MacaDört,
  '3♠': MacaÜç,
  '2♠': Macaİki,
  'A♥': KupaAs,
  'K♥': KupaKral,
  'Q♥': KupaKız,
  'J♥': KupaVale,
  '10♥': KupaOn,
  '9♥': KupaDokuz,
  '8♥': KupaSekiz,
  '7♥': KupaYedi,
  '6♥': KupaAltı,
  '5♥': KupaBeş,
  '4♥': KupaDört,
  '3♥': KupaÜç,
  '2♥': Kupaİki,
  'A♣': SinekAs,
  'K♣': SinekKral,
  'Q♣': SinekKız,
  'J♣': SinekVale,
  '10♣': SinekOn,
  '9♣': SinekDokuz,
  '8♣': SinekSekiz,
  '7♣': SinekYedi,
  '6♣': SinekAltı,
  '5♣': SinekBeş,
  '4♣': SinekDört,
  '3♣': SinekÜç,
  '2♣': Sinekİki,
  'A♦': KaroAs,
  'K♦': KaroKral,
  'Q♦': KaroKız,
  'J♦': KaroVale,
  '10♦': KaroOn,
  '9♦': KaroDokuz,
  '8♦': KaroSekiz,
  '7♦': KaroYedi,
  '6♦': KaroAltı,
  '5♦': KaroBeş,
  '4♦': KaroDört,
  '3♦': KaroÜç,
  '2♦': Karoİki, 
};

// Kartın stilini tanımlayın
const KartImg = styled.img`
  width: 60px; // Kart genişliği
  height: 80px; // Kart yüksekliği
  border: 1px solid black;
  margin: 30px 5px 5px 5px;
  border-radius: 5px;
  grid-column: ${props => props.sütun};
  grid-row: ${props => props.satır};
  opacity: ${props => props.seçili ? 0.1 : 1}; 
`;


// Kart bileşeni
function Kart({ değer, tür, seçili, onKartSeç }) {
  const görsel = kartGörselleri[`${değer}${tür}`]; // Görseli nesneden alın

  return (
    <KartImg src={görsel} alt={`${değer} ${tür}`} seçili={seçili} onClick={() => onKartSeç(değer, tür)} />
  );
}

export default Kart;