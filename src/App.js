import React from 'react';
import Cards from './Cards/index.js';
import './Cards/index.js';
import './index.css';
import {
  faDownload,
  faTimes,/* x */
  faGear,/* config */
  faWater, 
  faBars,/* menu */
  faExclamationCircle,
  faSitemap,/* pc */
} from '@fortawesome/free-solid-svg-icons';

function App() {
  const cardsData = [
    { title: 'Nombre de la capa',
    category: 'categoria',
    options : [
      {
        icon: faDownload,
        onClick: () => console.log('download')
      },
      {
        icon: faExclamationCircle,
        onClick: () => console.log('info')
      },
      {
        icon: faBars,
        onClick: () => console.log('menu')
      },
      {
        icon: faGear,
        onClick: () => console.log('config')
      },
    ]
  },
  { title: 'capacidad',
    category: 'categoria superficie',
    options : [
      {
        icon: faDownload,
        onClick: () => console.log('download')
      },
     
      { 
        icon: faGear,
        onClick: () => console.log('config')
      }
    ]
  },
  { title: 'capa lineal',
    category: 'bajada'
  },
  { title: 'capa',
    category: 'base'
  },
  { title: 'Nombre',
    category: 'category'
  }
  ];  

  return (
    <div className='App'>
      <Cards data={cardsData}/>
    </div>
  );
}
export default App;
