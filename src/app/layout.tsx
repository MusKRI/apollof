// **** Library Imports ****

// **** Local Imports ****
import Toaster from "@/providers/toast-provider";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <main className="h-full">
      <Toaster />
      {children}
    </main>
  );
};

export default RootLayout;
