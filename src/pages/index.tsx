import { trpc } from "@/shared/utils/trpc";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function IndexPage() {
  const hello = trpc.useQuery(["hello", { text: "client" }]);
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <Box
      sx={{
        width: "100dvw",
        height: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="display1" component={"p"}>
        {hello.data.greeting}
      </Typography>
    </Box>
  );
}
