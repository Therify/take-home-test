import { WithTopNav } from "@/shared/ui/layout/WithTopNav";
import { prisma } from "@/shared/utils/prisma";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Prisma } from "@prisma/client";

interface ProviderDetailQueryParams {
  params: { id: number };
}

const providerInclude = Prisma.validator<Prisma.ProviderInclude>()({
  gender: true,
  providerEthnicities: {
    include: {
      ethnicity: true,
    },
  },
  providerSpecialties: {
    include: {
      concern: true,
    },
  },
  providerCredentials: {
    include: {
      state: true,
      acceptedInsurances: {
        include: {
          insurance: true,
        },
      },
    },
  },
});

type ProviderDetails = Prisma.ProviderGetPayload<{
  include: typeof providerInclude;
}>;

interface ProviderDetailsProps {
  provider: ProviderDetails;
}

export async function getServerSideProps({
  params,
}: ProviderDetailQueryParams) {
  const provider = await prisma.provider.findFirst({
    where: {
      id: Number(params.id),
    },
    include: providerInclude,
  });
  return {
    props: {
      provider,
    },
  };
}

export default function ProviderDetails({ provider }: ProviderDetailsProps) {
  if (!provider) {
    return <p>loading...</p>;
  }
  console.log(provider);
  return (
    <WithTopNav>
      <Box
        sx={{
          padding: 5,
          boxShadow: 1,
          bgColor: "shades.white",
          borderRadius: 2,
        }}
      >
        <Avatar
          sx={{ mr: 4, width: 100, height: 100 }}
          src={provider.avatarUrl ?? undefined}
        />
        <Stack spacing={4}>
          <Stack direction="row" alignItems={"center"}>
            <Stack>
              <Typography variant="body1" fontWeight={"bold"}>
                {provider.givenName} {provider.surname}
              </Typography>
              <Typography variant="body2">{provider.designation}</Typography>
              <Typography variant="body2">{provider.emailAddress}</Typography>
              <Typography variant="body2">{provider.gender.name}</Typography>
              <br />
              Specialties:{" "}
              <Typography variant="body2">
                {provider.providerSpecialties
                  .map((p) => p.concern.name)
                  .join(", ")}
              </Typography>
              <br />
              Ethnicities:{" "}
              <Typography variant="body2">
                {provider.providerEthnicities
                  .map((e) => e.ethnicity.name)
                  .join(", ")}
              </Typography>
              <br />
              Credentials:{" "}
              {provider.providerCredentials.map((c) => {
                return (
                  <Typography key={c.id} variant="body2">
                    {c.state.name}:{" "}
                    {c.acceptedInsurances
                      .map((a) => a.insurance.name)
                      .join(", ")}
                  </Typography>
                );
              })}
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </WithTopNav>
  );
}
