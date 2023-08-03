import { Roboto } from "next/font/google";
import localFont from "next/font/local";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["cyrillic"],
});

const mackinac = localFont({
  src: [
    {
      path: "./P22Mackinac.woff",
      weight: "700",
    },
    {
      path: "./P22Mackinac.woff2",
      weight: "700",
    },
  ],
});

export { roboto, mackinac };
