import * as React from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

import { roboto } from "@/shared/styles/fonts";

const NAVIGATION = [
  {
    label: "Home",
    href: "/",
  },
];

export const TopNav = () => {
  const currentRoute = usePathname();
  return (
    <AppBar
      position="static"
      variant="outlined"
      sx={{ bgcolor: "shades.white" }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ mr: 4, display: "flex", alignItems: "center" }}>
            <Image
              src="https://res.cloudinary.com/dbrkfldqn/image/upload/v1673453089/app.therify.co/logo/therify-logo_wqj1is.png"
              width={152}
              height={52}
              alt="Therify Logo"
            />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            {NAVIGATION.map(({ label, href }) => (
              <StyledLink
                href={href}
                key={label}
                className={currentRoute === href ? "active" : ""}
              >
                {label}
              </StyledLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const StyledLink = styled(Link)(() => ({
  fontFamily: roboto.style.fontFamily,
  fontSize: "1.125rem",
  lineHeight: "normal",
  textDecoration: "none",
  color: "#808080",
  ["&.active"]: {
    fontWeight: 600,
    color: "shades.black",
  },
}));
