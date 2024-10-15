import React, { useEffect } from 'react'
import { navigate } from "gatsby"

const DocsRedirect: React.FC = () => {
  useEffect(() => {
    navigate("/docs/getting-started-with-open-data-hub")
  }, [])
  
  return null
}

export default DocsRedirect
