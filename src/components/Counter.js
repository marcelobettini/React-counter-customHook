import PropTypes from "prop-types"; //importamos propTypes
import { Container, Row, Col, Button } from "react-bootstrap";
import { useCounter } from "../hooks/useCounter";

//recibimos value
const Counter = ({ value }) => {
  //enviamos ese valor al custom hook useCounter
  const { increment, decrement, counter } = useCounter(value);

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col md={6} className="d-grid gap-3">
          <div className="text-center">
            <h2>My frigging counter 🦄</h2>
            <h5>{counter}</h5>
          </div>
          <Button onClick={increment} variant="success">
            +
          </Button>
          <Button onClick={decrement} variant="secondary">
            -
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

//declaramos propTypes para el componente Counter
//valor por defecto para el caso de no recibir prop
//luego comentaremos esto y agregaremos debajo .isRequired
Counter.defaultProps = {
  value: -4,
};
//chequeo que la prop recibida sea de tipo number
//esto es documental

Counter.propTypes = {
  value: PropTypes.number, //para agregar .isRequired, comnentar default
};

export default Counter;
