import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(() => ({
  main: { backgroundColor: "red" },
}));

const Price = () => {
  const var1 = useStyles();

  return (
    <Container maxWidth="sm" className={var1.main}>
      <h1>asdas</h1>
    </Container>
  );
};

export default Price;
