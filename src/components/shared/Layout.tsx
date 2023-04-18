import * as React from "react"
import "../../styles/theme.scss"

export const Layout = ({ location, children }) => {
  const rootPath = `/`
  const isRootPath = location.pathname === rootPath

  return (
      <main data-is-root-path={isRootPath}>
          {children}
      </main>
  )
}