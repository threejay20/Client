import { Box } from "@mui/material";
import { styled } from "@mui/material";

const DashBoardBox = styled(Box)(({ theme }) => ({
backgroundcolor: theme.palette.background.paper,
borderRadius: "1rem",
boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .8)"

}));

export default DashBoardBox;