import { Box, Card, Divider, Stack, Typography } from "@mui/material";
import braydenBurdenPic from "../../images/braydenBurden.jpg";

const TeamMember = (props) => {
  return (
    <Card style={{ maxWidth: "20rem", padding: "1rem" }}>
      <Stack
        direction={"column"}
        spacing={1}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant="h5">Brayden Burden</Typography>
        <Divider />
        <Box
          width={"75%"}
          height={"fit-content"}
          component={"img"}
          alt="braydenBurden"
          src={braydenBurdenPic}
          border={"3px solid black"}
          borderRadius={"5px"}
        />
        <Typography variant="p" textAlign={"center"}>
          Brayden Burden is the CEO and founder of ResurgeWeb Innovations
        </Typography>
      </Stack>
    </Card>
  );
};

export default TeamMember;
