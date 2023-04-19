import * as React from "react"
import "../../styles/theme.scss"
import { Navbar } from "./Navbar"

export const Layout = ({ location, children }) => {
  const rootPath = `/`
  const isRootPath = location.pathname === rootPath

  return (
      <main data-is-root-path={isRootPath}>
          <Navbar />
          {children}
      </main>
  )
}