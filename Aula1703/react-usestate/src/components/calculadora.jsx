import { useState } from 'react';
import '../assets/CSS/calculadora.css'

export default function Calculadora() {

  const [s1, setS1] = useState('');
  const [s2, setS2] = useState('');
  const [resSoma, setResSoma] = useState('');

  const [sub1, setSub1] = useState('');
  const [sub2, setSub2] = useState('');
  const [resSub, setResSub] = useState('');

  const [m1, setM1] = useState('');
  const [m2, setM2] = useState('');
  const [resMult, setResMult] = useState('');

  const [d1, setD1] = useState('');
  const [d2, setD2] = useState('');
  const [resDiv, setResDiv] = useState('');

  const [p1, setP1] = useState('');
  const [p2, setP2] = useState('');
  const [resPot, setResPot] = useState('');

  const [r1, setR1] = useState('');
  const [resRaiz, setResRaiz] = useState('');

  function validar(n1, n2 = null) {
    if (n1 === '' || (n2 !== null && n2 === '')) {
      return "Preencha os números!";
    }

    if (Number(n1) <= 0 || (n2 !== null && Number(n2) <= 0)) {
      return "Apenas números maiores que zero!";
    }

    return '';
  }

  return (
    <div className="container">
      <h1>Calculadoras</h1>

   

      <div className="card">
        <h2>Soma</h2>
        <input type="number" placeholder="Número 1" value={s1} onChange={(e) => setS1(e.target.value)} />
        <input type="number" placeholder="Número 2" value={s2} onChange={(e) => setS2(e.target.value)} />
        <button onClick={() => {
          const erro = validar(s1, s2);
          if (erro) return alert(erro);
          setResSoma(Number(s1) + Number(s2));
        }}>
          Calcular
        </button>
        <p>Resultado: {resSoma}</p>
      </div>


      <div className="card">
        <h2>Subtração</h2>
        <input type="number" placeholder="Número 1" value={sub1} onChange={(e) => setSub1(e.target.value)} />
        <input type="number" placeholder="Número 2" value={sub2} onChange={(e) => setSub2(e.target.value)} />
        <button onClick={() => {
          const erro = validar(sub1, sub2);
          if (erro) return alert(erro);
          setResSub(Number(sub1) - Number(sub2));
        }}>
          Calcular
        </button>
        <p>Resultado: {resSub}</p>
      </div>

  
  
      <div className="card">
        <h2>Multiplicação</h2>
        <input type="number" placeholder="Número 1" value={m1} onChange={(e) => setM1(e.target.value)} />
        <input type="number" placeholder="Número 2" value={m2} onChange={(e) => setM2(e.target.value)} />
        <button onClick={() => {
          const erro = validar(m1, m2);
          if (erro) return alert(erro);
          setResMult(Number(m1) * Number(m2));
        }}>
          Calcular
        </button>
        <p>Resultado: {resMult}</p>
      </div>


      <div className="card">
        <h2>Divisão</h2>
        <input type="number" placeholder="Número 1" value={d1} onChange={(e) => setD1(e.target.value)} />
        <input type="number" placeholder="Número 2" value={d2} onChange={(e) => setD2(e.target.value)} />
        <button onClick={() => {
          const erro = validar(d1, d2);
          if (erro) return alert(erro);
          setResDiv(Number(d1) / Number(d2));
        }}>
          Calcular
        </button>
        <p>Resultado: {resDiv}</p>
      </div>

   
      <div className="card">
        <h2>Potência</h2>
        <input type="number" placeholder="Base" value={p1} onChange={(e) => setP1(e.target.value)} />
        <input type="number" placeholder="Expoente" value={p2} onChange={(e) => setP2(e.target.value)} />
        <button onClick={() => {
          const erro = validar(p1, p2);
          if (erro) return alert(erro);
          setResPot(Math.pow(Number(p1), Number(p2)));
        }}>
          Calcular
        </button>
        <p>Resultado: {resPot}</p>
      </div>

    
      <div className="card">
        <h2>Raiz Quadrada</h2>
        <input type="number" placeholder="Número" value={r1} onChange={(e) => setR1(e.target.value)} />
        <button onClick={() => {
          const erro = validar(r1);
          if (erro) return alert(erro);
          setResRaiz(Math.sqrt(Number(r1)));
        }}>
          Calcular
        </button>
        <p>Resultado: {resRaiz}</p>
      </div>

    </div>
  );
}