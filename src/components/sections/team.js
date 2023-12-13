import { Card, Grid, Stack, useMediaQuery } from "@mui/material";
import TeamMember from "./teamMember";

const Team = (props) => {
  const mobileView = useMediaQuery("(max-width: 600px)");
  return (
    <Grid container className="section">
      <Grid width={"100%"} height={"fit-content"}>
        <Grid
          style={{
            backgroundImage: `url(https://picsum.photos/id/5/${props.screenWidth}/${props.screenHeight})`,
            boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.5)",
          }}
          margin={!mobileView ? "0 3rem 0 3rem" : ""}
          padding={!mobileView ? "2rem" : "2rem 0"}
        >
          <Stack
            width={"100%"}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Card>
              <TeamMember />
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Team;
