import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

export default function App() {
  const outerTheme = createMuiTheme({
    typography: {
      fontFamily: "Segoe UI"
    },
    palette: {
      primary: {
        main: "#AAAAAA"
      },
      secondary: {
        main: "#f4f4f4"
      }
    }
  });

  const [binary, setBinary] = useState("");
  const [term, setTerm] = useState("");

  const handleBinary = () => {
    let value = term.split("").reverse();
    let counter = 0;
    for (let [i, v] of value.entries()) {
      const d = 2 ** i;
      const a = d * v;
      counter = counter + a;
    }
    setBinary(counter);
  };
  const handleInput = (e) => {
    setTerm(e.target.value);
  };

  return (
    <ThemeProvider theme={outerTheme}>
      <div className="App">
        <Card className="myCard">
          <Typography variant="h2" gutterBottom>
            Binary to Decimal
          </Typography>
          <TextField
            id="outlined-basic"
            size="small"
            label="your binary"
            variant="outlined"
            value={term}
            onChange={handleInput}
          />
          <Button onClick={handleBinary} variant="contained" color="primary">
            CONVERT
          </Button>
          <Typography variant="h4" gutterBottom>
            {binary.toString()}
          </Typography>
        </Card>
      </div>
    </ThemeProvider>
  );
}
