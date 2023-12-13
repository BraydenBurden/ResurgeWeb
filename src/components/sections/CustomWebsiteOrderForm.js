import React, { useEffect, useState } from "react";
import {
  Button,
  FormControlLabel,
  OutlinedInput,
  Typography,
  Grid,
  InputLabel,
  Stack,
  RadioGroup,
  Radio,
  Input,
  useMediaQuery,
  Box,
} from "@mui/material";
import { Divider } from "antd";
import axios from "axios";
import successSubmit from "../../images/submitSuccess.png";
import { useLocation } from "react-router-dom";
import "./styles.css";

const CustomWebsiteOrderForm = () => {
  const location = useLocation();
  console.log(location.state.packageName);
  const [selectedPackage, setSelectedPackage] = useState(
    location.state.packageName
  );

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [company, setCompany] = useState(false);

  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");

  const [websitePurpose, setWebsitePurpose] = useState("");
  const [designStyle, setDesignStyle] = useState("");
  const [mainColor, setMainColor] = useState("");
  const [features, setFeatures] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [logo, setLogo] = useState();

  const [timeline, setTimeline] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const [comments, setComments] = useState("");

  const [errors, setErrors] = useState();
  const [formSubmitted, setFormSubmitted] = useState();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!websitePurpose.trim()) {
      newErrors.websitePurpose = "Purpose of website is required";
    }
    if (!designStyle.trim()) {
      newErrors.designStyle = "Design style is required";
    }
    if (!mainColor.trim()) {
      newErrors.mainColor = "Main color is required";
    }
    if (!features.trim()) {
      newErrors.features = "Features are required";
    }
    if (!timeline.trim()) {
      newErrors.timeline = "Timeline is required";
    }
    if (!priceRange.trim()) {
      newErrors.priceRange = "Price range is required";
    }
    if (!comments.trim()) {
      newErrors.comments = "Comments are required";
    }

    if (Object.keys(newErrors).length !== 0) {
      setErrors(newErrors);
    } else {
      setErrors("noErrors");
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  function importFile() {
    let newArray;
    if (attachments !== undefined) {
      newArray = [...attachments];
    } else {
      newArray = [];
    }
    let input = document.createElement("input");
    input.type = "file";
    input.onchange = (e) => {
      newArray.push(...input.files);
      setAttachments(2);
      setAttachments(newArray);
      setLogo(e.target.files[0]);
      console.log(e.target.files[0]);
    };
    input.click();
  }
  const removeAttachment = (id) => {
    const newArray = [...attachments];
    newArray.splice(id, 1);
    if (newArray.length === 0) {
      setAttachments("");
    } else {
      setAttachments(0);
      setAttachments(newArray);
    }
  };

  const createAttachmentDisplay = (attachments) => {
    const attachmentList = [];
    for (let i in attachments) {
      attachmentList.push(
        <div
          onClick={() => removeAttachment(i)}
          key={attachments[i].name + attachments[i].size}
          className="attachment"
        >
          {attachments[i].type.includes("image") ? (
            <img
              className="testIMG"
              src={URL.createObjectURL(attachments[i])}
              alt=""
              style={{ height: "1.5rem", width: "fit-content" }}
            />
          ) : (
            attachments[i].name
          )}
        </div>
      );
    }
    return (
      <>
        <div>
          <p>Selected Image: </p>
        </div>
        {attachmentList}
      </>
    );
  };

  const sendEmail = async () => {
    setFormSubmitted(true);

    if (!validateForm()) {
      return;
    }

    console.log(features);

    const formData = new FormData();
    formData.append("logo", logo);
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("company", company);
    formData.append("companyName", companyName);
    formData.append("industry", industry);
    formData.append("websitePurpose", websitePurpose);
    formData.append("designStyle", designStyle);
    formData.append("mainColor", mainColor);
    formData.append("features", features);
    formData.append("timeline", timeline);
    formData.append("priceRange", priceRange);
    formData.append("comments", comments);

    try {
      const response = await axios.post(
        "https://resurgeweb.com/send-order",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error sending email:", error.message);
    }
  };

  const plans = [
    {
      name: "Starter Package",
      price: 200,
      description: [
        "1-Page Website",
        "Basic Design Customization",
        "Contact Form",
        "Mobile Responsiveness",
        "Domain Connection",
        "5 Stock Images",
        "Limited Revisions",
      ],
    },
    {
      name: "Essential Package",
      price: 400,
      description: [
        "5-Page Website",
        "Custom Design",
        "Contact Form with Basic Automation",
        "Mobile Responsiveness",
        "Domain Connection",
        "10 Stock Images",
        "Unlimited Revisions",
        "SEO Optimization (Basic)",
        "Social Media Integration",
      ],
    },
    {
      name: "Business Package",
      price: 600,
      description: [
        "10-Page Website",
        "Custom Design with Branding",
        "Contact Form with Advanced Automation",
        "Mobile Responsiveness",
        "Domain Connection",
        "15 Stock Images",
        "Unlimited Revisions",
        "SEO Optimization (Intermediate)",
        "Blog/News Section",
        "Social Media Integration",
        "Basic E-commerce Integration (Up to 10 Products)",
      ],
    },
    {
      name: "Premium Package",
      price: 800,
      description: [
        "15-Page Website",
        "High-End Custom Design with Advanced Branding",
        "Contact Form with Advanced Automation",
        "Mobile Responsiveness",
        "Domain Connection",
        "20 Stock Images",
        "Unlimited Revisions",
        "SEO Optimization (Advanced)",
        "Blog/News Section",
        "Social Media Integration",
        "Advanced E-commerce Integration (Up to 50 Products)",
        "Newsletter Signup",
        "Content Management System (CMS)",
      ],
    },
    {
      name: "Elite Package",
      price: 1000,
      description: [
        "Unlimited Pages Website",
        "Premium Custom Design with Extensive Branding",
        "Contact Form with Advanced Automation",
        "Mobile Responsiveness",
        "Domain Connection",
        "25 Stock Images",
        "Unlimited Revisions",
        "SEO Optimization (Expert)",
        "Blog/News Section",
        "Social Media Integration",
        "Advanced E-commerce Integration (Unlimited Products)",
        "Newsletter Signup",
        "Content Management System (CMS)",
        "Advanced Security Features",
        "Priority Support",
      ],
    },
  ];

  const mobileView = useMediaQuery("(max-width:600px)");

  return errors !== "noErrors" ? (
    <Stack padding={!mobileView ? "0 5rem" : ""} id="orderForm">
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
            <em>Package</em>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <RadioGroup
            aria-label="package"
            name="package"
            value={selectedPackage}
            onChange={(e) => setSelectedPackage(e.target.value)}
          >
            <Stack
              className="scrollable"
              direction={"row"}
              width={"100%"}
              style={{ overflowX: "scroll" }}
            >
              {plans.map((plan) => (
                <FormControlLabel
                  key={plan.name}
                  value={plan.name}
                  control={<Radio />}
                  label={`${plan.name} - $${plan.price}`}
                />
              ))}
            </Stack>
          </RadioGroup>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            style={{
              textDecoration: "underline",
              marginBottom: "1rem",
              textAlign: mobileView ? "center" : "left",
            }}
          >
            <em>Contact Information</em>
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <InputLabel htmlFor="fullName">Full Name</InputLabel>
          <OutlinedInput
            name="fullName"
            type="text"
            placeholder="Full name..."
            onChange={(e) => setFullName(e.target.value)}
            style={{ color: "#2d2d2d", borderColor: "#2d2d2d" }}
            label="Full Name"
            size="small"
            fullWidth
            required
            error={!!errors?.fullName}
          ></OutlinedInput>
          {formSubmitted && errors?.fullName && (
            <Typography variant="caption" color="error">
              {errors?.fullName}
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
            style={{ color: "#2d2d2d", borderColor: "#2d2d2d" }}
            label="Email"
            size="small"
            fullWidth
            required
            error={!!errors?.email}
          />
          {formSubmitted && errors?.email && (
            <Typography variant="caption" color="error">
              {errors?.email}
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
            style={{ color: "#2d2d2d", borderColor: "#2d2d2d" }}
            label="Phone Number"
            size="small"
            fullWidth
            required
            error={!!errors?.phone}
          />
          {formSubmitted && errors?.phone && (
            <Typography variant="caption" color="error">
              {errors?.phone}
            </Typography>
          )}
        </Grid>
        <Divider style={{ backgroundColor: "black" }} />
        <Grid item xs={12}>
          <InputLabel htmlFor="company">
            {!mobileView
              ? "Is the website for a company/business?"
              : "Company/Business?"}
          </InputLabel>
          <RadioGroup
            aria-label="company"
            name="company"
            value={company}
            onChange={handleCompanyChange}
          >
            <Stack direction={"row"} spacing={1}>
              <FormControlLabel
                value="yes"
                control={<Radio size="small" />}
                label="Yes"
              />
              <FormControlLabel
                value="no"
                control={<Radio size="small" />}
                label="No"
              />
            </Stack>
          </RadioGroup>
        </Grid>
        {company === "yes" && (
          <>
            <Divider style={{ backgroundColor: "black" }} />
            <Grid item xs={12}>
              <Typography
                variant="h4"
                style={{
                  textDecoration: "underline",
                  marginBottom: "1rem",
                  textAlign: mobileView ? "center" : "left",
                }}
              >
                <em>Company Details</em>
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <InputLabel htmlFor="company">Company/Business Name</InputLabel>
              <OutlinedInput
                id="company"
                type="text"
                placeholder="Company/Business Name..."
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                style={{ color: "#2d2d2d", borderColor: "#2d2d2d" }}
                label="Phone Number"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <InputLabel htmlFor="industry">Industry</InputLabel>
              <OutlinedInput
                id="industry"
                type="text"
                placeholder="Industry..."
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                style={{ color: "#2d2d2d", borderColor: "#2d2d2d" }}
                label="Phone Number"
                size="small"
                fullWidth
              />
            </Grid>
          </>
        )}
        <Divider style={{ backgroundColor: "black" }} />
        <Grid item xs={12}>
          <Typography
            variant="h4"
            style={{
              textDecoration: "underline",
              marginBottom: "1rem",
              textAlign: mobileView ? "center" : "left",
            }}
          >
            <em>Website Details</em>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor="websitePurpose">
            Website Purpose/Objective
          </InputLabel>
          <OutlinedInput
            multiline
            id="websitePurpose"
            minRows={5}
            type="text"
            placeholder="Explain the purpose of the website..."
            value={websitePurpose}
            onChange={(e) => setWebsitePurpose(e.target.value)}
            style={{ color: "#2d2d2d", borderColor: "#2d2d2d" }}
            label="Website Purpose"
            size="small"
            fullWidth
            required
            error={!!errors?.websitePurpose}
          />
          {formSubmitted && errors?.websitePurpose && (
            <Typography variant="caption" color="error">
              {errors?.websitePurpose}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor="designStyle">Design Style</InputLabel>
          <OutlinedInput
            multiline
            id="designStyle"
            minRows={5}
            type="text"
            placeholder="Describe any design ideas for the website..."
            value={designStyle}
            onChange={(e) => setDesignStyle(e.target.value)}
            style={{ color: "#2d2d2d", borderColor: "#2d2d2d" }}
            label="Design Style"
            size="small"
            fullWidth
            required
            error={!!errors?.designStyle}
          />
          {formSubmitted && errors?.designStyle && (
            <Typography variant="caption" color="error">
              {errors?.designStyle}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor="features">Features</InputLabel>
          <OutlinedInput
            multiline
            id="features"
            minRows={5}
            type="text"
            placeholder="What are some specific features you would like to see on the site?"
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
            style={{ color: "#2d2d2d", borderColor: "#2d2d2d" }}
            label="Features"
            size="small"
            fullWidth
            required
            error={!!errors?.features}
          />
          {formSubmitted && errors?.features && (
            <Typography variant="caption" color="error">
              {errors?.features}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor="mainColor">Main Color</InputLabel>
          <OutlinedInput
            id="mainColor"
            type="text"
            placeholder="What do you want the main color of the site to be?"
            value={mainColor}
            onChange={(e) => setMainColor(e.target.value)}
            style={{ color: "#2d2d2d", borderColor: "#2d2d2d" }}
            label="Main Color"
            size="small"
            fullWidth
            required
            error={!!errors?.mainColor}
          />
          {formSubmitted && errors?.mainColor && (
            <Typography variant="caption" color="error">
              {errors?.mainColor}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <Input
            type="file"
            inputProps={{ accept: "image/*" }}
            style={{ display: "none" }}
            id="image-input"
          />
          <InputLabel htmlFor="image-input">
            Please select a logo for you website/brand
          </InputLabel>
          <Button
            variant="contained"
            component="span"
            onClick={() => importFile()}
          >
            Select Logo
          </Button>
          {attachments !== undefined && attachments.length !== 0 && (
            <Stack direction={"row"} alignItems={"center"}>
              {createAttachmentDisplay(attachments)}
            </Stack>
          )}
        </Grid>
        <Divider style={{ backgroundColor: "black" }} />
        <Grid item xs={12}>
          <Typography
            variant="h4"
            style={{
              textDecoration: "underline",
              marginBottom: "1rem",
              textAlign: mobileView ? "center" : "left",
            }}
          >
            <em>Timeline and Budget</em>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel htmlFor="timeline">Timeline</InputLabel>
          <OutlinedInput
            id="timeline"
            type="text"
            placeholder="What is the desired timeline for the website?"
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            style={{ color: "#2d2d2d", borderColor: "#2d2d2d" }}
            label="Timeline"
            size="small"
            fullWidth
            required
            error={!!errors?.timeline}
          />
          {formSubmitted && errors?.timeline && (
            <Typography variant="caption" color="error">
              {errors?.timeline}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel htmlFor="priceRange">Price Range</InputLabel>
          <OutlinedInput
            id="priceRange"
            type="text"
            placeholder="What is the price range that you are looking for?"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            style={{ color: "#2d2d2d", borderColor: "#2d2d2d" }}
            label="Timeline"
            size="small"
            fullWidth
            required
            error={!!errors?.priceRange}
          />
          {formSubmitted && errors?.priceRange && (
            <Typography variant="caption" color="error">
              {errors?.priceRange}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            style={{
              textDecoration: "underline",
              marginBottom: "1rem",
              textAlign: mobileView ? "center" : "left",
            }}
          >
            <em>Additional Information</em>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor="additionalInfo">Comments</InputLabel>
          <OutlinedInput
            multiline
            minRows={5}
            id="additionalInfo"
            type="text"
            placeholder="Please tell us any extra information we need here..."
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            style={{ color: "#2d2d2d", borderColor: "#2d2d2d" }}
            label="Comments"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} textAlign={"right"}>
          <Button
            color="primary"
            variant="contained"
            size="small"
            onClick={sendEmail}
          >
            Order
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
          Thank you for submitting an order. Someone will look into it and reach
          out as soon as possible!
        </Typography>
      </Grid>
    </Stack>
  );
};

export default CustomWebsiteOrderForm;
