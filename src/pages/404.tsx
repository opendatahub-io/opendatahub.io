import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"


const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Page not found</h1>
      <p >
        <Link to="/">Go home</Link>
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
