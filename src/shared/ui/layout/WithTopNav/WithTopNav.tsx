import { TopNav } from "@/shared/ui/navigation/TopNav";

export const WithTopNav = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <TopNav />
      {children}
    </main>
  );
};
