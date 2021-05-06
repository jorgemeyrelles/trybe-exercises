import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Imagem from './Imagem';
import Profile from './Profile';
import HardSkills from './HardSkills';
import reportWebVitals from './reportWebVitals';


const eu = {
  natural: 'Rio de Janeiro - RJ',
  idade: '36',
  formacao: 'Formando em Tecnologia',
  inst: 'TRYBE',
  abstract: 'Estudante de tecnologia, com auxilio e tutoria da ESCOLA TRYBE; Com educação\nanterior em Engenharia e ensino técnico no setor industrial e formação auxiliar em\ngestão de projetos além de experiência na área. Experiência e formação prática em inglês.'
}
ReactDOM.render(
  <React.StrictMode>
    <App />
    <section className='sec'>
      <Imagem source='https://scontent.fsdu25-1.fna.fbcdn.net/v/t1.6435-9/67247798_2400411723408644_573167607604051968_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeF6-D-kDgUM8WYR_jHC4_YBFAD5bnArAnYUAPlucCsCdr4XW7vdo0xjM5bnIp04qx_xASYUubVzRlDttauW6RCR&_nc_ohc=F2-U5c9254MAX9Iw-4B&_nc_ht=scontent.fsdu25-1.fna&oh=ec2d970444642b45cdb076da15f77a38&oe=60B8416D' alt='foto principal'/>
      <Profile info={eu} />
    </section>
    <section className='hardSkills' >
      <HardSkills />
    </section>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
