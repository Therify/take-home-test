import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { WithTopNav } from "@/shared/ui/layout/WithTopNav";
import { ProviderRepository } from "@/modules/care/repository/provider";
import { Provider } from "@/modules/care/types/provider";
import { ProviderCard } from "@/modules/care/components/ProviderCard/ProviderCard";
import {  ReactNode, useEffect, useState } from "react";
import { MemberPreferences, PreferenceForm } from "@/modules/care/components/PreferenceForm/PreferenceForm";
import { providersFilteredByPreferences } from "@/shared/utils/memberPreferences";

export async function getServerSideProps() {
  const providers = await ProviderRepository.findMany();
  console.log(providers[0].credentials[0])
  return {
    props: {
      providers,
    },
  };
}


function getRandomPhoto(): string {
  const PHOTO_URLS = [
    "https://images.unsplash.com/photo-1604971666408-9dcd56ece0bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    "https://images.unsplash.com/photo-1482235225574-c37692835cf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80",
    "https://images.unsplash.com/photo-1533323905636-7f0bfa0ba5ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1523916480930-3eb0627839bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1607960402012-7041136af2c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
  ];
  return PHOTO_URLS[Math.floor(Math.random() * PHOTO_URLS.length)];
}

interface IndexPageProps {
  providers: Provider.WithPersistedProps[];
}

export default function IndexPage({ providers = [] }: IndexPageProps) {

  const [memberPreferences, setMemberPreferences] = useState<MemberPreferences | null>(null)
  const [displayPreferenceForm, setDisplayPreferenceForm] = useState(false)
  const [filteredProviders, setFilteredProviders] = useState(providersFilteredByPreferences(providers, memberPreferences))

  useEffect(() => {
          if (memberPreferences !== null ) {
              setFilteredProviders(providersFilteredByPreferences(providers, memberPreferences))
          }
      }, [providers, memberPreferences])

  const DisplayFormButton = ({ children }: { children: ReactNode }) => {
    return <Button sx={{ display: "inline-flex" }} onClick={() => setDisplayPreferenceForm(true)}>{children}</Button>
  }

    const NoProvidersMessage = () => {
        return (
            <div>
                <p>There aren&apos;t any providers that match your preferences</p>
                <DisplayFormButton>Update Preferences</DisplayFormButton>
            </div>
        )
    }

  if (displayPreferenceForm) {
      return <PreferenceForm 
          preferences={memberPreferences} 
          setMemberPreferences={setMemberPreferences} 
          setDisplayPreferenceForm={setDisplayPreferenceForm} 
      />
  }

  return (
    <WithTopNav>
      <Box sx={{ height: "100%" }}>
        <Container>
          <Box sx={{ py: 6 }} component={"header"}>
            <Typography variant="h3" fontWeight={"bold"}>
              Welcome 👋
            </Typography>
          </Box>
          <Box
            sx={{
              position: "relative",
              borderRadius: "0.5rem",
              width: "100%",
              height: "20rem",
              aspectRatio: "16/4",
              backgroundColor: "shades.black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: `url(${getRandomPhoto()})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.50) 100%)",
              },
            }}
          >
            <Stack
              spacing={4}
              sx={{
                position: "relative",
                zIndex: 1,
                textAlign: "center",
              }}
            >
              <Typography variant="h4" sx={{ color: "shades.white" }}>
                Get matched with your first provider
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <DisplayFormButton>Get Matched</DisplayFormButton>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Grid container spacing={2} sx={{ p: 4 }}>
              {filteredProviders.length === 0 && <NoProvidersMessage />}
              {filteredProviders.length > 0 && filteredProviders.map((p) => (
                <Grid item key={p.id} xs={12} md={6} lg={4}>
                  <ProviderCard provider={p} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </WithTopNav>
  );
}
