import React from 'react'
import { ThemeProvider } from 'styled-components'
import ThemeVariables from "./theme-variables";


function Theme(children) {
  return <ThemeProvider theme={ThemeVariables}>{children}</ThemeProvider>;
}

export default Theme