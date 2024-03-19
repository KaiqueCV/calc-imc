import React, { useState } from 'react';

const IMCForm = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState('');

  const calculateIMC = () => {
    if (height !== '' && weight !== '') {
      const imc = weight / (height * height);
      let classification = '';

      if (imc < 18.5) {
        classification = 'abaixo do peso.';
      } else if (imc < 25) {
        classification = 'com peso ideal. Parabéns!!!';
      } else if (imc < 30) {
        classification = 'levemente acima do peso.';
      } else if (imc < 35) {
        classification = 'com obesidade grau I.';
      } else if (imc < 40) {
        classification = 'com obesidade grau II';
      } else {
        classification = 'com obesidade grau III. Cuidado!!';
      }

      setResult(`Seu IMC é ${imc.toFixed(1)} e você está ${classification}`);
    } else {
      setResult('Preencha todos os campos!!!');
    }
  };

  return (
    <div>
      <h2>Calculadora de IMC</h2>
      <label>
        Altura (em metros):
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <label>
        Peso (em kg):
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <button onClick={calculateIMC}>Calcular IMC</button>
      {result &&<p>{result}</p>}
    </div>
  );
};

export default IMCForm;