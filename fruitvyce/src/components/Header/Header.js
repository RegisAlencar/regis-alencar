import { goToList, goToCart } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import { Container, Button, Title } from "./styled";

const Header = () => {
  const history = useHistory();
  return (
    <Container>
      <Button onClick={() => goToList(history)}> List </Button>
      <Title> FruityVice</Title>
      <Button onClick={() => goToCart(history)}> Cart </Button>
    </Container>
  );
};

export default Header;
