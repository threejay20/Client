import DashBoardBox from '@/components/DashboardBox';
import { Box, useMediaQuery, useTheme } from '@mui/material';


// eslint-disable-next-line 
type Props = {};

const gridTemplateLargeScreens = `
  "a b c"
  "a b c"
  "a b c"
  "a b f"
  "d e f"
  "d e f"
  "d h i"
  "g h i"
  "g h j"
  "g h j"
`;
const gridTemplateSmallScreens =

"a"
"a"
"a"
"a"
"b"
"b"
"b"
"b"
"c"
"c"
"c"
"d"
"d"
"d"
"e"
"e"
"f"
"f"
"f"
"g"
"g"
"g"
"h"
"h"
"h"
"i"
"i"
"j"
"j"
;
const Dashboard = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery ("(min-width: 1200px)")
  const { palette } = useTheme();

  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isAboveMediumScreens ?{
        gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
        gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
        gridTemplateAreas: gridTemplateLargeScreens,
      } : {
        gridAutoColumns: "1fr",
        gridAutoRows: "80px",
        gridTemplateAreas: gridTemplateSmallScreens,
      }
    }
    >
      
      <DashBoardBox sx={{ gridArea: "a",  }}></DashBoardBox>
      <DashBoardBox sx={{ gridArea: "b",  }}></DashBoardBox>
      <DashBoardBox sx={{ gridArea: "c",  }}></DashBoardBox>
      <DashBoardBox sx={{ gridArea: "d", }}></DashBoardBox>
      <DashBoardBox sx={{ gridArea: "e",  }}></DashBoardBox>
      <DashBoardBox sx={{ gridArea: "f",  }}></DashBoardBox>
      <DashBoardBox sx={{ gridArea: "g", }}></DashBoardBox>
      <DashBoardBox sx={{ gridArea: "h",  }}></DashBoardBox>
      <DashBoardBox sx={{ gridArea: "i", }}></DashBoardBox>
      <DashBoardBox sx={{ gridArea: "j", }}></DashBoardBox>
    </Box>
  );
};

export default Dashboard;
