import {useState} from  'react';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {

  const [categ,setCateg] = useState(1);

  console.log('Main', categ)
  return (
    <div className='main'>
      <SideBar setCateg={setCateg} />
      <Content categ={categ} />
    </div>
  )
}