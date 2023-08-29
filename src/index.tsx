import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { App } from "./App"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"
import '@fontsource-variable/open-sans'
import '@fontsource-variable/spline-sans'
import { ChakraProvider } from '@chakra-ui/react'
import { theme as proTheme } from '@chakra-ui/pro-theme'
import { extendTheme, theme as baseTheme } from '@chakra-ui/react'
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

Amplify.configure(awsExports);


export const theme = extendTheme(
  {
    colors: { ...baseTheme.colors, brand: baseTheme.colors.blue, },
  },
  {
    
    fonts: {
      heading: "'Inter Variable', -apple-system, system-ui, sans-serif",
      body: "'Inter Variable', -apple-system, system-ui, sans-serif",
    },
  },
 
  proTheme,
)


root.render(
  <React.StrictMode>
     <ChakraProvider theme={theme}>
    <ColorModeScript />
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

