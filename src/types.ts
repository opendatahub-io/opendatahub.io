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

export type ContentType = "video" | "audio" | "file"

export type LinkedContent = {
    title: string,
    url: string,
    type: ContentType
    description?: string
    categories?: string[]
}