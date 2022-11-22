import React, { ChangeEventHandler, FormEvent, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { styles } from "../styles/styles";
import cookie from "js-cookie";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const router = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    cookie.set("accessToken", "1234567890", { expires: 1 });
    router.push("/dashboard");
  };
  const handleChange: ChangeEventHandler = (event) => {
    const { name, value } = event.target as HTMLInputElement;
    setCredentials({ ...credentials, [name]: value });
  };
  console.log(credentials.email, credentials.password);
  return (
    <Box
      sx={{
        ...styles.flexColumnCenterCenter,
        height: "100vh",
      }}
    >
      <Box sx={{ border: "2px solid #FFF", p: 2, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ ...styles.font, fontSize: 18, mb: 2 }}>
          Login
        </Typography>
        <Box
          component="form"
          // noValidate
          // autoComplete="off"
          onSubmit={handleSubmit}
          sx={{
            ...styles.flexColumnCenterCenter,
            "& .MuiTextField-root": {
              my: 1,
            },
            "& .MuiInputLabel-root": {
              color: "#FFF",
              fontFamily: "Lexend",
            },
            "& .MuiInputBase-input": {
              color: "#FFF",
              fontFamily: "Lexend",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#FFF",
              },
              "&:hover fieldset": {
                borderColor: "#FFF",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#FFF",
              },
            },
          }}
        >
          <TextField
            label="Email"
            size="small"
            required
            type="email"
            name="email"
            value={credentials.email ? credentials.email : ""}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Password"
            size="small"
            required
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 1, ...styles.font }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
