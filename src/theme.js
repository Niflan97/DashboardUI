import { createSystem, defaultConfig } from "@chakra-ui/react";
import { Poppins } from "next/font/google";


// Importing Poppins font
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Chakra UI theme configuration
export const system = createSystem(defaultConfig, {
  theme: {
    tokens : {  
        colors: {
            primary: "#028090",
            secondary: "#0EAD69",
            activeButton: "#E53E3E",
            backgroundLight: "#F5F5F5",
            warningRed : "#EF233C",
            textColor : "#191919",
            bgLightGreen : "#D0FBE8",
            bgLightRed : "#FCCFD5",
            
          },
          textStyles: {
            h1: {
              fontSize: "72px",
              fontWeight: "bold",
              lineHeight: "110%",
              letterSpacing: "-2%",
      
            },
            h2: {
              fontSize: "36px",
              fontWeight: "semibold",
              lineHeight: "110%",
              letterSpacing: "-1%",
            },
          },
          fonts :{
            heading: "var(--font-poppins), sans-serif",
            body: "var(--font-poppins), sans-serif",
        },
    
          components: {
            Button: {
              baseStyle: {
                bg: "primary",
                color: "white",
                _hover: { bg: "activeButton" },
              },
              sizes: {
                lg: {
                  fontSize: "16px",
                  padding: "12px 20px",
                },
              },
              variants: {
                outline: {
                  border: "2px solid",
                  borderColor: "primary",
                  color: "primary",
                  _hover: {
                    bg: "primary",
                    color: "white",
                  },
                },
              },
            },
          },
    }  
  },
});
