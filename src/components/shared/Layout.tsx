import { Page, PageSection, PageSidebar } from "@patternfly/react-core";
import * as React from "react";

import "../../styles/theme.scss";
import { Navbar } from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
  useTransparentNavbar?: boolean;
  sidebar?: React.ReactNode;
};

export const Layout = ({
  children,
  useTransparentNavbar,
  sidebar,
}: LayoutProps) => {
  return (
    <Page
      className={!!sidebar ? "pf-u-h-100vh" : undefined}
      isManagedSidebar
      sidebar={sidebar ? (
        <PageSidebar
          nav={sidebar}
          theme="light"
        />
      ) : undefined}
      header={<Navbar isTransparentAtTop={useTransparentNavbar} />}
    >
      {children}
    </Page>
  );
};
