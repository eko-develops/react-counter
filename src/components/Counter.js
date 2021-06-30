import {
    Container,
    ButtonGroup,
    Button,
    Grid,
    Typography
  } from "@material-ui/core";
  
  import { useState } from "react";
  
  const Counter = () => {
    const [number, setNumber] = useState(0);
  
    const handleClickAdd = () => {
      console.log(`Add button clicked. Number is ${number}`);
      setNumber(number + 1);
      console.log(`Number is now ${number}`);
    };
  
    const handleClickSub = () => {
      console.log(`Minus button clicked. Number is ${number}`);
      setNumber(number - 1);
      console.log(`Number is now ${number}`);
    };
  
    const handleReset = () => {
      console.log(`Reset button clicked. Number is ${number}`);
      setNumber(0);
      console.log(`Number is now ${number}`);
    };
  
    return (
      <Container className="counter-container">
        <Grid container direction="column" justify="center" alignItems="center">
          <Typography variant="h3">{number}</Typography>
          <ButtonGroup variant="contained" color="primary">
            <Button onClick={() => handleClickAdd()}>+</Button>
            <Button onClick={() => handleReset()} color="primary">
              RESET
            </Button>
            <Button onClick={() => handleClickSub()}>-</Button>
          </ButtonGroup>
        </Grid>
      </Container>
    );
  };
  
  export default Counter;
  