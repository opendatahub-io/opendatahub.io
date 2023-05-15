import {
    Nav,
    NavExpandable,
    NavItem,
    NavList,
} from "@patternfly/react-core";
import { Link } from "gatsby";
import * as React from "react";
import { AsciiDocSection, NestedAsciiDocSection, SideNavItemConfig } from "../../types";

type SideNavigationProps = {
    config: SideNavItemConfig[]
    location: Location
    toc: { [key: string]: AsciiDocSection[] }
}


const SideNavigation = ({ config, location, toc = {} }: SideNavigationProps) => {
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

    const renderSection = (section: NestedAsciiDocSection, slug: string) => {
        if (section.sections.length > 0) {
            return (
                <NavExpandable key={section.id} title={section.name} isExpanded isActive={location.hash.includes(section.id)}>
                    {section.sections.map(section => renderSection(section, slug))}
                </NavExpandable>
            )
        }
        else {
            return (
                <NavItem key={section.id} isActive={location.hash.includes(section.id)}>
                    <Link to={`${slug}#${section.id}`}>
                        {section.name}
                    </Link>
                </NavItem>
            )
        }
    }

    const renderNavItem = (item: SideNavItemConfig) => {
        if (toc[item.slug]) {
            return (
                <NavExpandable key={item.slug} title={item.title} isExpanded={location.pathname.includes(item.slug)} isActive={location.pathname.includes(item.slug)}>
                    {nestSections(toc[item.slug]).map(section => renderSection(section, item.slug))}
                </NavExpandable>
            )
        }
        else if (item.children) {
            return (
                <NavExpandable key={item.slug} title={item.title} isExpanded={location.pathname.includes(item.slug)} isActive={location.pathname.includes(item.slug)}>
                    {item.children.map(i => renderNavItem(i))}
                </NavExpandable>
            )
        }
        else {
            return (
                <NavItem isActive={location.pathname.includes(item.slug)}>
                    <Link to={item.slug}>
                        {item.title}
                    </Link>
                </NavItem>
            )
        }
    }

    return (
        <Nav theme="light">
            <NavList>
                {config.map(item => renderNavItem(item))}
            </NavList>
        </Nav>
    )

}

export default SideNavigation;
