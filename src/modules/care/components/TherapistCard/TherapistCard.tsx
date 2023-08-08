import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import SpaOutline from "@mui/icons-material/SpaOutlined";
import { PEACH } from "@/shared/styles/theme";

export function TherapistCard() {
  return (
    <Box
      sx={{
        padding: 2,
        boxShadow: 1,
        bgColor: "shades.white",
        borderRadius: 2,
      }}
    >
      <Stack spacing={4}>
        <Stack direction={"row"} alignItems={"center"}>
          <Avatar sx={{ mr: 2, bgCobaclor: PEACH[500] }}>
            <SpaOutline />
          </Avatar>
          <Typography variant="body2" fontWeight={"bold"} sx={{ flex: 1 }}>
            Therapist
          </Typography>
        </Stack>
        <Divider />
        <Stack direction="row" alignItems={"center"}>
          <Avatar sx={{ mr: 4 }} />
          <Stack>
            <Typography variant="body1" fontWeight={"bold"}>
              Phil Collins
            </Typography>
            <Typography variant="body2">This is Cool</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
