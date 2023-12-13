import {
  Card,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";

const About = (props) => {
  const mobileView = useMediaQuery("(max-width:600px)");
  return (
    <Grid
      id="about"
      container
      minHeight={"10rem"}
      minWidth={"10rem"}
      marginTop={"6rem"}
      className="section"
    >
      <Grid
        style={{
          backgroundImage: `url(https://picsum.photos/id/29/${
            props.screenWidth
          }/${props.screenHeight + 200})`,
          boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.5)",
        }}
        margin={!mobileView ? "3rem 3rem 0 3rem" : "5rem 0 0 0"}
      >
        <Stack spacing={3} margin={!mobileView ? "3rem" : ""}>
          <Card>
            <Stack padding={1}>
              <Typography variant="h5" textAlign={"center"}>
                Welcome to ResurgeWeb Innovations, where creativity meets
                functionality, and innovation fuels our passion for web
                development.
              </Typography>
            </Stack>
          </Card>
          <Stack spacing={3} direction={!props.mobileView ? "row" : "column"}>
            <Card>
              <Stack padding={1}>
                <Typography variant="h6">Who We Are</Typography>
                <Divider />
                <Typography>
                  ResurgeWeb Innovations is more than a web development company;
                  we are a team of forward-thinking individuals dedicated to
                  bringing your digital vision to life. Founded by Brayden
                  Burden, our journey began with a vision to transform ideas
                  into visually stunning and technically robust websites.
                </Typography>
              </Stack>
            </Card>
            <Card>
              <Stack padding={1}>
                <Typography variant="h6">Our Mission</Typography>
                <Divider />
                <Typography>
                  At ResurgeWeb, our mission is clear — to provide cutting-edge
                  web solutions that not only meet but exceed the expectations
                  of our clients. We believe in the transformative power of a
                  well-crafted website, and our goal is to empower businesses
                  and individuals to make a lasting impact in the digital
                  landscape.
                </Typography>
              </Stack>
            </Card>
          </Stack>
          <Stack spacing={3} direction={!props.mobileView ? "row" : "column"}>
            <Card>
              <Stack padding={1}>
                <Typography variant="h6">What Sets Us Apart</Typography>
                <Divider />
                <Typography>
                  Why choose ResurgeWeb? Our commitment to modern techniques and
                  staying on the forefront of industry trends is what sets us
                  apart. We don't just create websites; we craft digital
                  experiences that captivate, engage, and resonate with your
                  audience.
                </Typography>
              </Stack>
            </Card>
            <Card>
              <Stack padding={1}>
                <Typography variant="h6">The ResurgeWeb Experience</Typography>
                <Divider />
                <Typography>
                  When you choose ResurgeWeb Innovations, you're not just
                  getting a website; you're embarking on a journey of
                  collaboration and innovation. Our personalized approach
                  ensures that every project is a unique reflection of your
                  brand identity.
                </Typography>
              </Stack>
            </Card>
          </Stack>
          <Stack spacing={3} direction={!props.mobileView ? "row" : "column"}>
            <Card>
              <Stack padding={1}>
                <Typography variant="h6">Our Expertise</Typography>
                <Divider />
                <Typography>
                  Specializing in ReactJS, NodeJS, MySQL, and AWS, our technical
                  expertise ensures that your website is not only aesthetically
                  pleasing but also built on a solid foundation of robust
                  technology.
                </Typography>
              </Stack>
            </Card>
            <Card>
              <Stack padding={1}>
                <Typography variant="h6">Why Work With Us</Typography>
                <Divider />
                <Typography>
                  At our core, we are driven by a commitment to innovative
                  solutions, constantly pushing the boundaries of what is
                  possible. Our client-centric approach underscores the belief
                  that your success is intricately tied to ours; thus, we
                  prioritize your needs and aspirations. In fostering a
                  partnership built on reliability, we instill trust through
                  transparent communication and a steadfast dedication to
                  delivering on our promises.
                </Typography>
              </Stack>
            </Card>
          </Stack>
          <Card style={{ width: "fit-content", alignSelf: "center" }}>
            <Stack padding={1} alignItems={"center"} justifyContent={"center"}>
              <Typography>
                Join us on this journey of digital transformation. Let
                ResurgeWeb be the architect of your online success.
              </Typography>
              <Typography>
                Ready to turn your ideas into reality?{" "}
                <Link
                  style={{ color: "#30834c" }}
                  id="contactLink"
                  to="/contact"
                >
                  Contact us
                </Link>{" "}
                and let's Resurge together!
              </Typography>
            </Stack>
          </Card>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default About;
