import { Nav, NavExpandable, NavItem, NavList } from "@patternfly/react-core";
import { css } from "@patternfly/react-styles";
import navStyles from "@patternfly/react-styles/css/components/Nav/nav";

import { Link, navigate } from "gatsby";
import * as React from "react";
import {
  AsciiDocSection,
  NestedAsciiDocSection,
  SideNavItemConfig,
} from "../../types";

type SideNavigationProps = {
  config: SideNavItemConfig[];
  location: Location;
  toc: { [key: string]: AsciiDocSection[] };
};

const NavSection = ({
  section,
  slug,
  location,
  toc,
}: {
  section: NestedAsciiDocSection;
  slug: string;
  location: Location;
  toc: {
    [key: string]: AsciiDocSection[];
  };
}) => {
  function isParentOfCurrentSection(
    currentSection: AsciiDocSection,
    parentSection: AsciiDocSection,
    page: AsciiDocSection[]
  ): boolean {
    if (currentSection.id === parentSection.id) {
      return true;
    }
    if (!currentSection.parentId) {
      return false;
    }
    const currentSectionsParent = page.find(
      (s) => s.id === currentSection.parentId
    );
    if (!currentSectionsParent) {
      return false;
    }

    return isParentOfCurrentSection(currentSectionsParent, parentSection, page);
  }

  function isChildSectionActive(
    slug: string,
    section: AsciiDocSection
  ): boolean {
    if (location.pathname.includes(slug)) {
      const page = toc[slug];
      const currentSection = page.find((s) => location.hash.includes(s.id));
      if (!currentSection) {
        return false;
      }
      return isParentOfCurrentSection(currentSection, section, page);
    }

    return false;
  }

  const [isExpanded, setIsExpanded] = React.useState(true);

  const isActive =
    location.hash.includes(section.id) || isChildSectionActive(slug, section);
  if (section.sections.length > 0) {
    return (
      <NavExpandable
        key={section.id}
        title={section.name}
        isActive={isActive}
        isExpanded={isExpanded}
        onExpand={() => {
          navigate(`${slug}#${section.id}`);
          setIsExpanded(!isExpanded);
        }}
        buttonProps={{
          className: css(
            navStyles.navLink,
            isActive && navStyles.modifiers.current
          ),
        }}
      >
        {section.sections.map((section) => (
          <NavSection
            key={section.id}
            section={section}
            slug={slug}
            location={location}
            toc={toc}
          />
        ))}
      </NavExpandable>
    );
  } else {
    return (
      <NavItem key={section.id} isActive={isActive}>
        <Link to={`${slug}#${section.id}`}>{section.name}</Link>
      </NavItem>
    );
  }
};

const CustomNavExpandable = ({
  item,
  toc,
}: {
  item: SideNavItemConfig;
  toc: { [key: string]: AsciiDocSection[] };
}) => {
  const isActive = location.pathname.includes(item.slug);
  const [isExpanded, setIsExpanded] = React.useState(isActive);

  function nestSections(sections: AsciiDocSection[]): NestedAsciiDocSection[] {
    const nestedSections: NestedAsciiDocSection[] = [];

    const sectionMap: Record<string, NestedAsciiDocSection> = {};
    // create a map of sections using their `id` as key
    sections.forEach((section) => {
      sectionMap[section.id] = { ...section, sections: [] };
    });

    // assign child sections to their parent
    sections.forEach((section) => {
      const parentId = section.parentId;
      if (parentId && sectionMap[parentId]) {
        sectionMap[parentId].sections.push(sectionMap[section.id]);
      } else {
        nestedSections.push(sectionMap[section.id]);
      }
    });

    return nestedSections;
  }

  return (
    <NavExpandable
      key={item.slug + item.title}
      title={item.title}
      isExpanded={isExpanded}
      isActive={isActive}
      onExpand={() => {
        navigate(item.slug);
        setIsExpanded(!isExpanded);
      }}
      buttonProps={{
        className: css(
          navStyles.navLink,
          isActive && navStyles.modifiers.current
        ),
      }}
    >
      {nestSections(toc[item.slug]).map((section) => (
        <NavSection
          key={section.id}
          section={section}
          slug={item.slug}
          location={location}
          toc={toc}
        />
      ))}
      s
    </NavExpandable>
  );
};

export const SideNavigation = ({
  config,
  location,
  toc = {},
}: SideNavigationProps) => {
  const renderNavItem = (item: SideNavItemConfig) => {
    const isActive = location.pathname.includes(item.slug);
    if (toc[item.slug]) {
      return (
        <CustomNavExpandable
          key={item.slug + item.title}
          item={item}
          toc={toc}
        />
      );
    } else if (item.children) {
      return (
        <NavExpandable
          key={item.slug + item.title}
          title={item.title}
          isExpanded={isActive}
          isActive={isActive}
          buttonProps={{
            className: css(
              navStyles.navLink,
              isActive && navStyles.modifiers.current
            ),
          }}
        >
          {item.children.map((i) => renderNavItem(i))}
        </NavExpandable>
      );
    } else {
      return (
        <NavItem key={item.slug + item.title} isActive={isActive}>
          <Link to={item.slug}>{item.title}</Link>
        </NavItem>
      );
    }
  };

  return (
    <Nav theme="light">
      <NavList>{config.map((item) => renderNavItem(item))}</NavList>
    </Nav>
  );
};
