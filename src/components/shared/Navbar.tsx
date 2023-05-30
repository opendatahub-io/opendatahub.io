import {
  Button,
  Masthead,
  MastheadContent,
  MastheadMain,
  MastheadToggle,
  PageToggleButton,
  ToolbarGroup,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  Dropdown,
  KebabToggle,
  Menu,
  MenuContent,
  MenuList,
  MenuItem,
} from "@patternfly/react-core";
import BarsIcon from "@patternfly/react-icons/dist/esm/icons/bars-icon";
import { Link } from "gatsby";
import React from "react";

import vert_logo from "../../content/assets/img/logos/datahub_mark_color-blkbg.png";
import "./Navbar.css";

type NavbarProps = {
  isTransparentAtTop?: boolean;
  useSidebarExpand?: boolean;
};

export const Navbar = ({
  isTransparentAtTop,
  useSidebarExpand,
}: NavbarProps) => {
  const [isTransparent, setIsTransparent] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);
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

  const onToggle = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  const kebabDropdownItems = [
    <Menu className="pf-u-w-100vw">
      <MenuContent>
        <MenuList>
          <MenuItem to="/docs">DOCS</MenuItem>
          <MenuItem to="/blog">BLOG</MenuItem>
          <MenuItem to="/community">COMMUNITY</MenuItem>
          <MenuItem to="https://github.com/opendatahub-io">GITHUB</MenuItem>
          <MenuItem to="/docs/getting-started-with-open-data-hub/">
            Get Started
          </MenuItem>
        </MenuList>
      </MenuContent>
    </Menu>,
  ];
  return (
    <>
      <Masthead
        id="masthead"
        display={{ default: "inline" }}
        className={`${
          isTransparent && isTransparentAtTop && !isOpen ? "transparent" : ""
        } sticky`}
      >
        <MastheadToggle>
          {useSidebarExpand && (
            <PageToggleButton variant="plain">
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
          <Toolbar className="navbar-links transparent ">
            <ToolbarContent>
              <ToolbarGroup
                visibility={{ default: "hidden", md: "visible", lg: "visible" }}
              >
                <ToolbarItem>
                  <Button
                    variant="link"
                    isInline
                    component={(props: any) => <Link {...props} to="/docs" />}
                  >
                    DOCS
                  </Button>
                </ToolbarItem>
                <ToolbarItem>
                  <Button
                    variant="link"
                    isInline
                    component={(props: any) => <Link {...props} to="/blog" />}
                  >
                    BLOG
                  </Button>
                </ToolbarItem>
                <ToolbarItem>
                  <Button
                    variant="link"
                    isInline
                    component={(props: any) => (
                      <Link {...props} to="/community" />
                    )}
                  >
                    COMMUNITY
                  </Button>
                </ToolbarItem>
              </ToolbarGroup>
              <ToolbarGroup alignment={{ default: "alignRight" }}>
                <ToolbarGroup
                  style={{ paddingRight: "1rem" }}
                  visibility={{
                    default: "hidden",
                    md: "visible",
                    lg: "visible",
                  }}
                >
                  <ToolbarItem>
                    <Button
                      variant="link"
                      component="a"
                      href="https://github.com/opendatahub-io"
                    >
                      GITHUB
                    </Button>
                  </ToolbarItem>
                  <ToolbarItem>
                    <Button
                      variant="tertiary"
                      isInline
                      component={(props: any) => (
                        <Link
                          {...props}
                          to="/docs/getting-started-with-open-data-hub/"
                        />
                      )}
                    >
                      Get Started
                    </Button>
                  </ToolbarItem>
                </ToolbarGroup>
                <ToolbarItem
                  alignment={{ default: "alignRight" }}
                  visibility={{
                    default: "visible",
                    md: "hidden",
                    lg: "hidden",
                  }}
                >
                  <Dropdown
                    isPlain
                    menuAppendTo="inline"
                    position="right"
                    toggle={
                      <KebabToggle id="toggle-kebab" onToggle={onToggle} />
                    }
                    dropdownItems={kebabDropdownItems}
                    isOpen={isOpen}
                  />
                </ToolbarItem>
              </ToolbarGroup>
            </ToolbarContent>
          </Toolbar>
        </MastheadContent>
      </Masthead>
    </>
  );
};
