import React, { useState } from "react";
import {
  Button,
  Typography,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  useMediaQuery,
  Box,
} from "@mui/material";
import { Divider } from "antd";
import axios from "axios";
import successSubmit from "../../images/submitSuccess.png";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const mobileView = useMediaQuery("(max-width:600px)");

  const validateForm = () => {
    const newErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone Number is required";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
    }
    if (Object.keys(newErrors).length !== 0) {
      setErrors(newErrors);
    } else {
      setErrors("noErrors");
    }

    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = async () => {
    setFormSubmitted(true);

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post("https://resurgeweb.com/send-contact", {
        fullName,
        email,
        phone,
        message,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error sending email:", error.message);
    }
  };

  return errors !== "noErrors" ? (
    <Stack padding={!mobileView ? "0 5rem" : ""} id="contactForm">
      <Grid
        container
        marginTop={!mobileView ? "5rem" : "4rem"}
        padding={"2rem"}
        style={{ backgroundColor: "lightgray", color: "black" }}
        spacing={1}
      >
        <Grid item xs={12}>
          <Typography
            variant="h4"
            style={{
              textDecoration: "underline",
              marginBottom: "1rem",
              textAlign: mobileView ? "center" : "left",
            }}
          >
            <em>Contact Us</em>
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <InputLabel htmlFor="fullName">Full Name</InputLabel>
          <OutlinedInput
            name="fullName"
            type="text"
            placeholder="Full name..."
            onChange={(e) => setFullName(e.target.value)}
            error={!!errors.fullName}
            style={{ color: "#2d2d2d", borderColor: "#2d2d2d" }}
            label="Full Name"
            size="small"
            fullWidth
            required
          />
          {formSubmitted && errors.fullName && (
            <Typography variant="caption" color="error">
              {errors.fullName}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            id="email"
            type="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            style={{ color: "#2d2d2d", borderColor: "#2d2d2d" }}
            label="Email"
            size="small"
            fullWidth
            required
          />
          {formSubmitted && errors.email && (
            <Typography variant="caption" color="error">
              {errors.email}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          <InputLabel htmlFor="phone">Phone Number</InputLabel>
          <OutlinedInput
            id="phone"
            type="phone"
            placeholder="Phone Number..."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            error={!!errors.phone}
            style={{ color: "#2d2d2d", borderColor: "#2d2d2d" }}
            label="Phone Number"
            size="small"
            fullWidth
            required
          />
          {formSubmitted && errors.phone && (
            <Typography variant="caption" color="error">
              {errors.phone}
            </Typography>
          )}
        </Grid>
        <Divider style={{ backgroundColor: "black" }} />
        <Grid item xs={12}>
          <InputLabel htmlFor="message">Message</InputLabel>
          <OutlinedInput
            multiline
            id="message"
            minRows={5}
            type="text"
            placeholder="Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            error={!!errors.message}
            style={{ color: "#2d2d2d", borderColor: "#2d2d2d" }}
            label="Message"
            size="small"
            fullWidth
            required
          />
          {formSubmitted && errors.message && (
            <Typography variant="caption" color="error">
              {errors.message}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} textAlign={"right"}>
          <Button
            color="primary"
            variant="contained"
            size="small"
            onClick={sendEmail}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Stack>
  ) : (
    <Stack padding={!mobileView ? "0 5rem" : ""}>
      <Grid
        container
        marginTop={!mobileView ? "5rem" : "4rem"}
        padding={"2rem"}
        style={{
          backgroundColor: "lightgray",
          color: "black",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
        spacing={1}
      >
        <Box
          className="successImage"
          component="img"
          alt="successSubmit"
          src={successSubmit}
          width="40%"
        />
        <Typography variant="h5" color="primary">
          Thank you for reaching out. Someone will look into your feedback and
          contact you as soon as possible!
        </Typography>
      </Grid>
    </Stack>
  );
};

export default Contact;
