import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import SpaOutline from "@mui/icons-material/SpaOutlined";

import { PEACH, PINK, TEAL } from "@/shared/styles/theme";
import { Provider } from "../../types/provider";
import { Designation } from "../../types/designation";
import {
  HealthAndSafetyOutlined,
  MedicationOutlined,
} from "@mui/icons-material";
import Link from "next/link";

interface ProviderCardProps {
  provider: Provider.WithPersistedProps;
}

export function ProviderCard({ provider }: ProviderCardProps) {
  return (
<Link href={`/providers/${provider.id}`} style={{ textDecoration: 'none' }}>
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
          {getProviderAvatar(provider)}
          <Typography variant="body2" fontWeight={"bold"} sx={{ flex: 1 }}>
            {provider.designation}
          </Typography>
        </Stack>
        <Divider />
        <Stack direction="row" alignItems={"center"}>
          <Avatar
            sx={{ mr: 4, width: 60, height: 60 }}
            src={provider.avatarUrl}
          />
          <Stack>
            <Typography variant="body1" fontWeight={"bold"}>
              {provider.givenName} {provider.surname}
            </Typography>
            <Typography variant="body2">{provider.designation}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
    </Link>
  );
}
const BASE_AVATAR_SX_PROPS = {
  mr: 2,

  width: 30,
  height: 30,
};

const PROVIDER_AVATAR_MAP: Record<Designation.Type, JSX.Element> = {
  "Mental Health Coach": (
    <Avatar
      sx={{ ...BASE_AVATAR_SX_PROPS, bgcolor: TEAL[50], color: TEAL[500] }}
    >
      <HealthAndSafetyOutlined />
    </Avatar>
  ),
  Therapist: (
    <Avatar
      sx={{ ...BASE_AVATAR_SX_PROPS, bgcolor: PEACH[50], color: PEACH[500] }}
    >
      <SpaOutline />
    </Avatar>
  ),
  Prescriber: (
    <Avatar
      sx={{ ...BASE_AVATAR_SX_PROPS, bgcolor: PINK[50], color: PINK[500] }}
    >
      <MedicationOutlined />
    </Avatar>
  ),
};

export function getProviderAvatar({ designation }: Provider.Type) {
  return PROVIDER_AVATAR_MAP[designation];
}
