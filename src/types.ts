export type SideNavItemConfig = {
    title: string;
    slug: string;
    children?: SideNavItemConfig[];
}

export type AsciiDocSection = {
    id: string,
    index: number
    level: number
    name: string
    parentId: string | null
}

export type NestedAsciiDocSection = (AsciiDocSection & { sections: NestedAsciiDocSection[] })