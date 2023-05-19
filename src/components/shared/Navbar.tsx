import {
  Button,
  Masthead,
  MastheadContent,
  MastheadMain,
  MastheadToggle,
  PageToggleButton,
  Split,
  SplitItem,
} from "@patternfly/react-core";
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import { Link } from "gatsby";
import React from "react";

import vert_logo from "../../content/assets/img/logos/datahub_mark_color-blkbg.png";
import "./Navbar.css";

type NavbarProps = {
  isTransparentAtTop?: boolean;
  useSidebarExpand?: boolean;
};

export const Navbar = ({ isTransparentAtTop, useSidebarExpand }: NavbarProps) => {
  const [isTransparent, setIsTransparent] = React.useState(true);

  React.useEffect(() => {
    function checkPosition() {
      setIsTransparent(window.scrollY === 0);
    }

    checkPosition();
    window.addEventListener("scroll", checkPosition);

    return () => {
      window.removeEventListener("scroll", checkPosition);
    };
  }, []);

  return (
    <Masthead
      className={`${isTransparent && isTransparentAtTop ? "transparent" : ""} sticky`}
    >
      <MastheadToggle>
        {useSidebarExpand && (
          <PageToggleButton
            variant="plain"
          >
            <BarsIcon />
          </PageToggleButton>
        )}
      </MastheadToggle>
      <MastheadMain>
        <Button
          variant="link"
          isInline
          component={(props: any) => <Link {...props} to="/" />}
        >
          <img
            src={vert_logo}
            alt="Open Data Hub logo"
            style={{ overflow: "hidden", height: 45 }}
          />
        </Button>
      </MastheadMain>
      <MastheadContent>
        <Split hasGutter className="navbar-links">
          <SplitItem>
            <Button
              variant="link"
              isInline
              component={(props: any) => <Link {...props} to="/docs" />}
            >
              DOCS
            </Button>
          </SplitItem>
          <SplitItem>
            <Button
              variant="link"
              isInline
              component={(props: any) => <Link {...props} to="/blog" />}
            >
              BLOG
            </Button>
          </SplitItem>
          <SplitItem>
            <Button
              variant="link"
              isInline
              component={(props: any) => <Link {...props} to="/community" />}
            >
              COMMUNITY
            </Button>
          </SplitItem>
          <SplitItem isFilled />
          <SplitItem>
            <Button
              variant="link"
              component="a"
              href="https://github.com/opendatahub-io"
            >
              GITHUB
            </Button>
          </SplitItem>
          <SplitItem>
            <Button
              variant="tertiary"
              isInline
              component={(props: any) => <Link {...props} to="/docs/getting-started-with-open-data-hub/" />}
            >
              Get Started
            </Button>
          </SplitItem>
        </Split>
      </MastheadContent>
    </Masthead>
  );
};
