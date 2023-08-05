import { TopNav } from "@/shared/ui/navigation/TopNav";

export const WithTopNav = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TopNav />
      <main
        style={{
          height: "calc(100vh - 84px)",
          overflowY: "auto",
        }}
      >
        {children}
      </main>
    </>
  );
};
