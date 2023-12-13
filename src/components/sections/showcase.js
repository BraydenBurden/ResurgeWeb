import {
  Box,
  Card,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import comingSoon from "../../images/comingSoon.png";
import "./styles.css";

const Showcase = (props) => {
  const mobileView = useMediaQuery("(max-width: 600px)");
  return (
    <Grid id="showcase" container className="section">
      <Grid
        style={{
          backgroundImage: `url(https://picsum.photos/${props.screenWidth}/${props.screenHeight})`,
          boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.5)",
        }}
        margin={!mobileView ? "0 3rem 0 3rem" : ""}
        padding={!mobileView ? "2rem" : ""}
      >
        <Typography variant="h4">Showcase</Typography>
        <Card
          style={{
            padding: "2rem",
            border: "2px solid black",
            backgroundColor: "gray",
          }}
        >
          <Stack
            direction={!mobileView ? "row" : "column"}
            spacing={3}
            alignItems={"center"}
            justifyContent={"center"}
            flexWrap={"wrap"}
          >
            <Box
              className="comingSoon"
              backgroundColor="#30834c"
              component={"img"}
              alt="comingSoon"
              src={comingSoon}
              border={"2px solid black"}
              borderRadius={"25px"}
              width={!mobileView ? "40%" : "70%"}
            />
            <Box
              className="comingSoon"
              backgroundColor="#30834c"
              component={"img"}
              alt="comingSoon"
              src={comingSoon}
              border={"2px solid black"}
              borderRadius={"25px"}
              width={!mobileView ? "40%" : "70%"}
            />
          </Stack>
          {/* <Typography variant="h5">Coming Soon...</Typography> */}
        </Card>
      </Grid>
    </Grid>
  );
};

export default Showcase;
