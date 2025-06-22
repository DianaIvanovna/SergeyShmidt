import type { Metadata } from "next";
import { Arsenal, Hedvig_Letters_Serif } from "next/font/google";
import "./page.scss";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme/theme";
import { Box, GlobalStyles } from "@mui/material";
import { globalStyling } from "@/theme/helpers/getGlobalStyling";
import { PlayerStoreProvider } from "@/providers/player-store-provider";


const fontRegular = Hedvig_Letters_Serif({
  variable: "--font-hedvig-letters-serif",
  subsets: ["latin"],
  weight: ["400"]
});
const fontBold = Arsenal({
  variable: "--font-arsenal",
  subsets: ["latin"],
  weight: ["700", "400"]
});

export const metadata: Metadata = {
  title: "Sergey Shmidt",
  description: "",
  viewport: "width=device-width, initial-scale=1.0, viewport-fit=cover",
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "SERGEY"
  }
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    // TODO подумай о языке ru или en??
    <html lang="en">
    <body className={`${fontRegular.variable} ${fontBold.variable}`}>
    <PlayerStoreProvider>
      <AppRouterCacheProvider options={{ key: "css" }}>
        <ThemeProvider theme={theme}>
          <Box className={"layout"}>
            <GlobalStyles styles={globalStyling} />
            <Header />
            <Box className={"layout__content"}>
              {children}
            </Box>
            <Footer />
          </Box>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </PlayerStoreProvider>

    </body>
    </html>
  );
}

