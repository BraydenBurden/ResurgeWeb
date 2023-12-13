import {
  Button,
  Card,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { useState } from "react";
import { Modal } from "antd";
import { Link } from "react-router-dom";

const Order = () => {
  const [packageDetailModal, setPackageDetailModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState({});
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

  const openPackageDetailsModal = (packageDetails) => {
    setSelectedPackage(packageDetails);
    setPackageDetailModal(true);
  };

  const mobileView = useMediaQuery("(max-width: 600px)");

  return (
    <>
      <Grid
        id="plans"
        container
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-around"}
      >
        {plans?.map((plan) => (
          <Card
            key={plan.name}
            className="plan"
            style={{
              width: !mobileView ? "20rem" : "90vw",
              height: "fit-content",
              marginBottom: "2rem",
              border: "1px solid #dddddd",
              borderRadius: "5px",
              padding: "0.75rem",
              cursor: "pointer",
            }}
            onClick={() => {
              openPackageDetailsModal(plan);
            }}
          >
            <Typography variant="h4">{plan.name}</Typography>
            <Typography variant="h5">Price: ~${plan.price} CAD</Typography>
            <Divider />
            <List>
              {plan?.description.map(
                (item, index) =>
                  index < 7 && (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CircleIcon
                          style={{ color: "primary", fontSize: "0.5rem" }}
                        />
                      </ListItemIcon>
                      <Typography variant="p" className="listItemsOverflow">
                        {item}
                      </Typography>
                    </ListItem>
                  )
              )}
            </List>
            <Grid container>
              <Typography
                className="moreInfo"
                onClick={() => {
                  openPackageDetailsModal(plan);
                }}
                xs={3}
                variant="p"
                fontSize={"0.75rem"}
                color={"primary"}
                textAlign={"right"}
                width={"100%"}
                style={{ cursor: "pointer" }}
              >
                More Info...
              </Typography>
            </Grid>
          </Card>
        ))}
      </Grid>
      <Modal
        className="testModal"
        destroyOnClose={true}
        width={!mobileView ? "700px" : "100vw"}
        title={selectedPackage.name}
        open={packageDetailModal}
        onCancel={() => {
          setPackageDetailModal(false);
        }}
        footer={false}
      >
        {packageDetailModal && (
          <>
            <Divider />
            <Grid
              // color={"white"}
              container
              textAlign={"center"}
              direction={"column"}
            >
              <Grid item xs={12} marginBottom={"1rem"}>
                <Typography variant="h6" width={"100%"}>
                  {selectedPackage.name} Price: ~${selectedPackage.price}.00
                </Typography>
              </Grid>
              <Grid container spacing={2}>
                {!mobileView ? (
                  <>
                    <Grid item xs={6}>
                      <List>
                        {selectedPackage?.description.map(
                          (item, index) =>
                            index < selectedPackage?.description.length / 2 && (
                              <ListItem key={index}>
                                <ListItemIcon>
                                  <CircleIcon
                                    style={{
                                      color: "white",
                                      fontSize: "0.5rem",
                                    }}
                                  />
                                </ListItemIcon>
                                <Typography
                                  variant="p"
                                  className="listItemsOverflow"
                                >
                                  {item}
                                </Typography>
                              </ListItem>
                            )
                        )}
                      </List>
                    </Grid>
                    <Grid item xs={6}>
                      <List>
                        {selectedPackage?.description.map(
                          (item, index) =>
                            index > selectedPackage?.description.length / 2 && (
                              <ListItem key={index}>
                                <ListItemIcon>
                                  <CircleIcon
                                    style={{
                                      color: "white",
                                      fontSize: "0.5rem",
                                    }}
                                  />
                                </ListItemIcon>
                                <Typography
                                  variant="p"
                                  className="listItemsOverflow"
                                >
                                  {item}
                                </Typography>
                              </ListItem>
                            )
                        )}
                      </List>
                    </Grid>
                  </>
                ) : (
                  <List>
                    {selectedPackage?.description.map((item, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <CircleIcon
                            style={{ color: "white", fontSize: "0.5rem" }}
                          />
                        </ListItemIcon>
                        <Typography variant="p" className="listItemsOverflow">
                          {item}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                )}
              </Grid>
              <Grid item xs={12}>
                <Stack
                  direction={"row"}
                  justifyContent={"flex-end"}
                  width={"100%"}
                  spacing={2}
                >
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    onClick={() => setPackageDetailModal(false)}
                  >
                    Cancel
                  </Button>
                  <Link
                    to="/order"
                    state={{ packageName: selectedPackage.name }}
                  >
                    <Button size="small" color="primary" variant="contained">
                      Order
                    </Button>
                  </Link>
                </Stack>
              </Grid>
            </Grid>
          </>
        )}
      </Modal>
    </>
  );
};

export default Order;
