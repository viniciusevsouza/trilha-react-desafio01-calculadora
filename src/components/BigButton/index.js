import { ButtonContainer } from './styles';

const BigButton = ({ label, onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      {label}
    </ButtonContainer>
  );
}

export default BigButton;
