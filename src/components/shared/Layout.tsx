import * as React from "react"
import "../../styles/theme.scss"

export const Layout = ({ location, children }) => {
  const rootPath = `/`
  const isRootPath = location.pathname === rootPath

  return (
    <div data-is-root-path={isRootPath}>
      <main>{children}</main>
    </div>
  )
}