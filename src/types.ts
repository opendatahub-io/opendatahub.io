import { FeatureCardProps } from "./components/pages/home/PersonasLayout/FeatureCard";
import { PlainImageCardProps } from "./components/shared";

export type SideNavItemConfig = {
  title: string;
  slug: string;
  children?: SideNavItemConfig[];
};

export type AsciiDocSection = {
  id: string;
  index: number;
  level: number;
  name: string;
  parentId: string | null;
};

export type NestedAsciiDocSection = AsciiDocSection & {
  sections: NestedAsciiDocSection[];
};

export type ContentType = "video" | "audio" | "file";

export type LinkedContent = {
  title: string;
  url: string;
  type: ContentType;
  description?: string;
  categories?: string[];
};

export type PersonaBenefits = {
  name: string;
  benefits: (PlainImageCardProps & {
    features: FeatureCardProps[];
  })[];
}[];

export type RoadmapDataType = {
  future: {
    title: string;
    version: string | number;
    children: {
      title: string;
    }[];
  }[];
  past: {
    title: string;
    version: string | number;
    url?: string;
    children: {
      title: string;
      description?: string;
      url?: string;
      moved?: string | number;
    }[];
  }[];
};
