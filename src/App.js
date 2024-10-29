import Input from './components/Input'
import Button from './components/Button'
import BigButton from './components/BigButton';

import { Container, Content, Row, Column, Column2, Row2 } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');

  const [firstNumber, setFirstNumber] = useState('0');

  const [operation, setOperation] = useState('');

  const [operated, setOperated] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setOperation('');
    setFirstNumber('0');
    setOperated('');
  }



  const handleAddNumber = (number) => {

    if (operated !== '') {
      setOperated('');
      setCurrentNumber('0');
      setCurrentNumber(number);

    } else {
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);

    }
  }

  const handleSumNumbers = () => {
    if (operation !== '+') {
      setFirstNumber(currentNumber);
      setOperation('+');
      setCurrentNumber('0');
    }
    else {
      const resul = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(resul));
      setFirstNumber(resul);
      setOperated('sim');
    }
  }

  const handleSubNumbers = () => {
    if (operation !== '-') {

      setFirstNumber(currentNumber);
      setOperation('-');
      setCurrentNumber('0');
    }
    else {
      const resul = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(resul));
      setFirstNumber(resul);
      setOperated('sim');
    }
  }

  const handleDivNumbers = () => {
    if (operation !== '/') {
      setFirstNumber(currentNumber);
      setOperation('/');
      setCurrentNumber('0');
    }
    else {
      const resul = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(resul));
      setFirstNumber(resul);
      setOperated('sim');
    }
  }

  const handleMultNumbers = () => {
    if (operation !== '*') {
      setFirstNumber(currentNumber);
      setOperation('*');
      setCurrentNumber('0');
    }
    else {
      const resul = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(resul));
      setFirstNumber(resul);
      setOperated('sim');
    }
  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '') {
      switch (operation) {
        case '+':
          setOperation('');
          handleSumNumbers();
          break;
        case '-':
          setOperation('');
          handleSubNumbers();
          break;
        case '*':
          setOperation('');
          handleMultNumbers();
          break;
        case '/':
          setOperation('');
          handleDivNumbers();
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="C" onClick={() => handleOnClear()} />
          <Button label="/" onClick={() => handleDivNumbers()} />
          <Button label="*" onClick={() => handleMultNumbers()} />
          <Button label="-" onClick={() => handleSubNumbers()} />
        </Row>
        <Row>
          <Row2>
            <Row>
              <Button label="7" onClick={() => handleAddNumber('7')} />
              <Button label="8" onClick={() => handleAddNumber('8')} />
              <Button label="9" onClick={() => handleAddNumber('9')} />
            </Row>
            <Row>
              <Button label="4" onClick={() => handleAddNumber('4')} />
              <Button label="5" onClick={() => handleAddNumber('5')} />
              <Button label="6" onClick={() => handleAddNumber('6')} />
            </Row>
          </Row2>
          <BigButton label="+" onClick={() => handleSumNumbers("")} />
        </Row>
        <Row>
          <Row2>
            <Row>
              <Button label="1" onClick={() => handleAddNumber('1')} />
              <Button label="2" onClick={() => handleAddNumber('2')} />
              <Button label="3" onClick={() => handleAddNumber('3')} />
            </Row>
            <Row>
              <Column2>
                <Button label="0" onClick={() => handleAddNumber('0')} />
              </Column2>
              <Column>
                <Button label="." onClick={() => handleAddNumber('.')} />
              </Column>
            </Row>
          </Row2>
          <BigButton label="=" onClick={() => handleEquals()} />
        </Row>

      </Content>
    </Container>
  );
}

export default App;
