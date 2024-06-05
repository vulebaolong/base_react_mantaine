import { motion, MotionStyle } from "framer-motion";
import { letterVariant, sentenceVariant } from "../common/framer-motion/animationVariants";

export const logApi = (fullUrl: string, method: string, requestData: any, responseData: any) => {
   const url = new URL(fullUrl);

   const { pathname } = url;

   const parsedRequestData =
      typeof requestData === "string" ? JSON.parse(requestData) : requestData;

   const methodColors: { [key: string]: string } = {
      GET: "#00ff00",
      POST: "#ffff00",
      PUT: "#0000ff",
      PATCH: "#ff00ff",
      DELETE: "#ff0000",
   };

   const logMessage = `
     API Endpoint: %c${pathname}%c
     Method: %c${method}%c
     Request Data: %o
     Response Data: %o
   `;

   console.log(
      logMessage,
      "color: #25fbea",
      "",
      `color: ${methodColors[method]}`,
      "",
      parsedRequestData,
      responseData
   );
};

export const effectText = (text: string, style?: MotionStyle) => {
   return (
      <motion.p
         variants={sentenceVariant}
         initial="initial"
         animate="animate"
         style={{ margin: `0`, ...style }}
      >
         {text.split("").map((letter, index) => (
            <motion.span key={`${letter}-${index}`} variants={letterVariant}>
               {letter}
            </motion.span>
         ))}
      </motion.p>
   );
};
