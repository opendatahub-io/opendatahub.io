import { PageProps, graphql, navigate } from "gatsby";
import * as React from "react";

import { ContentCardList, Layout, Seo } from "../components/shared";
import {
  Select,
  SelectOption,
  SelectVariant,
  Toolbar,
  ToolbarItem,
  ToolbarContent,
  Pagination,
  PageSection,
  Stack,
  StackItem,
  Button,
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStateSecondaryActions,
  Title,
  SearchInput,
  ToolbarFilter,
  ToolbarGroup,
  ToolbarToggleGroup,
  PaginationVariant,
} from "@patternfly/react-core";
import { ContentCard } from "../components/shared/ContentCard";
<<<<<<< HEAD
<<<<<<< HEAD
import { SourceInstanceNameLabel } from "../const";
=======
>>>>>>> eb764c9 (UX fixes)
=======
>>>>>>> 137e27d (UX fixes)
import { FilterIcon, SearchIcon } from "@patternfly/react-icons";


const BlogIndex = ({ data, location }: PageProps<Queries.AllContentQueryQuery>) => {
  const posts = data.allFile.edges;
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(10);

  // get url params
  const urlParams = new URLSearchParams(location.search);
  const searchDefault = urlParams.get("search");
  const contentTypeDefault = urlParams.get("type");
  const categoryDefault = urlParams.get("category") ? urlParams.get("category")!.split(",") : [];

  const [searchValue, setSearchValue] = React.useState(searchDefault ?? "");
  const [categoryFilter, setCategoryFilter] = React.useState<string[]>(categoryDefault);
  const [isCategoryFilterOpen, setIsCategoryFilterOpen] = React.useState(false);
  const [contentTypeFilter, setContentTypeFilter] = React.useState<string | null>(contentTypeDefault);
  const [isContentTypeFilterOpen, setIsContentTypeFilterOpen] = React.useState(false);

  React.useEffect(() => {
    const searchPart = searchValue.length > 0 ? `search=${searchValue}` : null
    const categoryPart = categoryFilter.length > 0 ? `category=${categoryFilter.map(c => c.trim()).join(",")}` : null
    const contentTypePart = contentTypeFilter !== null ? `type=${contentTypeFilter}` : null
    const query = [searchPart, categoryPart, contentTypePart].filter((part) => part !== null).join("&")
    navigate(`?${query}`, { replace: true })
  }, [searchValue, categoryFilter, contentTypeFilter])


  const [categorySelectOptions, contentTypeSelectOptions] = React.useMemo(() => {
    const nodeCategories = data.allFile.edges
      .map((edge) => edge.node.childMarkdownRemark?.frontmatter?.categories?.split(",").map(c => c.trim()) ?? [])
      .reduce((prev, curr) => new Set([...prev, ...curr]), new Set<string>())

    const contentTypes = data.allFile.edges
<<<<<<< HEAD
<<<<<<< HEAD
      .reduce((prev, curr) => new Set([...prev, curr.node.sourceInstanceName]), new Set<string>())
=======
      .reduce((prev, curr) => new Set([...prev, curr.node?.childMarkdownRemark?.frontmatter?.type ?? "blog"]), new Set<string>())
>>>>>>> eb764c9 (UX fixes)
=======
      .reduce((prev, curr) => new Set([...prev, curr.node?.childMarkdownRemark?.frontmatter?.type ?? "blog"]), new Set<string>())
>>>>>>> 137e27d (UX fixes)

    return [
      Array.from(nodeCategories).map((category) => (
        <SelectOption key={category} value={category} />
      )),
      Array.from(contentTypes).map((content) => (
        <SelectOption key={content} value={content} />
      ))
    ]
  }, [posts]);


  const onPerPageSelect = (
    _event: React.MouseEvent | React.KeyboardEvent | MouseEvent,
    newPerPage: number,
    newPage: number
  ) => {
    setPerPage(newPerPage);
    setPage(newPage);
  };

  const onSetPage = (
    _event: React.MouseEvent | React.KeyboardEvent | MouseEvent,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const selectedContent = React.useMemo(() => {
    return posts.filter(({ node }) => {
      const frontmatter = node.childMarkdownRemark?.frontmatter
<<<<<<< HEAD
<<<<<<< HEAD
      const sourceInstanceName = node.sourceInstanceName
=======
      const contentType = node.childMarkdownRemark?.frontmatter?.type ?? "blog"
>>>>>>> eb764c9 (UX fixes)
=======
      const contentType = node.childMarkdownRemark?.frontmatter?.type ?? "blog"
>>>>>>> 137e27d (UX fixes)
      const nodeCategories = frontmatter?.categories?.split(",").map(c => c.trim()) ?? []
      const title = frontmatter?.title ?? ""

      return (categoryFilter.length === 0 || categoryFilter.every((option) => nodeCategories.includes(option))) &&
<<<<<<< HEAD
<<<<<<< HEAD
        (contentTypeFilter === null || contentTypeFilter === sourceInstanceName) &&
=======
        (contentTypeFilter === null || contentTypeFilter === contentType) &&
>>>>>>> eb764c9 (UX fixes)
=======
        (contentTypeFilter === null || contentTypeFilter === contentType) &&
>>>>>>> 137e27d (UX fixes)
        (searchValue.length === 0 || title.toLowerCase().includes(searchValue.toLowerCase()))
    })
  }, [categoryFilter, contentTypeFilter, searchValue, posts])

  return (
    <Layout>
      <PageSection
        className="pf-u-h-100vh"
        isCenterAligned
        isWidthLimited
        padding={{ default: "padding" }}
      >
        <Toolbar
          collapseListedFiltersBreakpoint="md"
          clearAllFilters={() => {
            setCategoryFilter([])
            setContentTypeFilter(null)
            setSearchValue("")
          }}>
          <ToolbarContent>
            <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="md">
              <ToolbarItem variant="search-filter">
                <SearchInput
                  aria-label="With filters example search input"
                  onChange={(_event, value) => setSearchValue(value)}
                  value={searchValue}
                  onClear={() => {
                    setSearchValue('');
                  }}
                />
              </ToolbarItem>
              <ToolbarGroup variant="filter-group">
                <ToolbarFilter
                  chips={categoryFilter}
                  deleteChip={(_category, chip) => setCategoryFilter(categoryFilter.filter(c => c !== chip))}
                  categoryName="Category"
                >
                  <Select
                    variant={SelectVariant.checkbox}
                    aria-label="Category"
                    onToggle={() => setIsCategoryFilterOpen(!isCategoryFilterOpen)}
                    onSelect={(_, value) => {
                      if (typeof value === "string" && categoryFilter.includes(value)) {
                        setCategoryFilter(categoryFilter.filter((category) => category !== value))
                      } else {
                        setCategoryFilter([...categoryFilter, value as string])
                      }
                    }}
                    selections={categoryFilter}
                    isOpen={isCategoryFilterOpen}
                    placeholderText="Category"
                  >
                    {categorySelectOptions}
                  </Select>
                </ToolbarFilter>
                <ToolbarFilter
                  chips={contentTypeFilter !== null ? [contentTypeFilter] : undefined}
                  deleteChip={(_category, chip) => setContentTypeFilter(null)}
                  categoryName="Content Type"
                >
                  <Select
                    variant={SelectVariant.single}
                    aria-label="Content Type"
                    onToggle={() => setIsContentTypeFilterOpen(!isContentTypeFilterOpen)}
                    onSelect={(_, value) => {
                      if (typeof value === "string" && contentTypeFilter === value) {
                        setContentTypeFilter(null)
                      } else {
                        setContentTypeFilter(value as string)
                      }
                    }}
                    selections={contentTypeFilter ?? ""}
                    isOpen={isContentTypeFilterOpen}
                    placeholderText="Content Type"
                  >
                    {contentTypeSelectOptions}
                  </Select>
                </ToolbarFilter>
              </ToolbarGroup>
            </ToolbarToggleGroup>
          </ToolbarContent>
        </Toolbar>

        {selectedContent.length === 0 && (
          <EmptyState>
            <EmptyStateIcon icon={SearchIcon} />
            <Title headingLevel="h2" size="lg">
              No content found
            </Title>
            <EmptyStateBody>No results match this filter criteria. Clear all filters and try again.</EmptyStateBody>
            <EmptyStateSecondaryActions>
              <Button variant="link" onClick={() => {
                setCategoryFilter([])
                setContentTypeFilter("")
                setSearchValue("")
              }}>
                Clear all filters
              </Button>
            </EmptyStateSecondaryActions>
          </EmptyState>
        )}
        <ContentCardList rowSpan={6}>
          {selectedContent
            .slice((page - 1) * perPage, page * perPage)
<<<<<<< HEAD
<<<<<<< HEAD
            .map(({ node: { childMarkdownRemark: markdown, sourceInstanceName } }, i) => {
              return (
                <ContentCard
                  key={(markdown?.fields?.slug ?? "") + i}
                  title={markdown?.frontmatter?.title}
                  subTitle={SourceInstanceNameLabel[sourceInstanceName]}
=======
            .map(({ node: { childMarkdownRemark: markdown } }, i) => {
              return (
                <ContentCard
                  key={(markdown?.fields?.slug ?? "") + i}
                  title={markdown?.frontmatter?.title ?? ""}
                  subTitle={contentTypeFilter ?? markdown?.frontmatter?.type ?? "blog"}
>>>>>>> eb764c9 (UX fixes)
=======
            .map(({ node: { childMarkdownRemark: markdown } }, i) => {
              return (
                <ContentCard
                  key={(markdown?.fields?.slug ?? "") + i}
                  title={markdown?.frontmatter?.title ?? ""}
                  subTitle={contentTypeFilter ?? markdown?.frontmatter?.type ?? "blog"}
>>>>>>> 137e27d (UX fixes)
                  link={markdown?.frontmatter?.permalink ?? markdown?.fields?.slug}
                  body={(
                    <Stack>
                      <StackItem>
                        <i style={{ color: "grey" }}>{markdown?.frontmatter?.date}</i>
                      </StackItem>
                      <StackItem>{markdown?.frontmatter?.preview}</StackItem>

                    </Stack>
                  )}
                  chips={(markdown?.frontmatter?.categories ?? "").split(",").map(c => c.trim())}
                  handleChipClick={chip => {
                    if (!categoryFilter.includes(chip)) {
                      setCategoryFilter([...categoryFilter, chip])
                    }
                  }}
                />
              );
            })}
        </ContentCardList>
        <Toolbar>
          <ToolbarItem variant="pagination">
            <Pagination
              titles={{ paginationTitle: "Search filter pagination" }}
              perPageComponent="button"
              variant={PaginationVariant.bottom}
              itemCount={selectedContent.length}
              perPage={perPage}
              page={page}
              onPerPageSelect={onPerPageSelect}
              onSetPage={onSetPage}
              widgetId="search-input-mock-pagination"
              isCompact
            />
          </ToolbarItem>
        </Toolbar>
      </PageSection>

    </Layout >
  );
};

export default BlogIndex;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />;

export const query = graphql`
query AllContentQuery {
  allFile(
    filter: {sourceInstanceName: {in: ["blog", "videos", "releases"]}}
    sort: {childMarkdownRemark: {frontmatter: {date: DESC}}}
  ) {
    edges {
      node {
        childMarkdownRemark {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            permalink
            categories
            title
            preview
<<<<<<< HEAD
<<<<<<< HEAD
            featured
=======
            type
>>>>>>> eb764c9 (UX fixes)
=======
            type
>>>>>>> 137e27d (UX fixes)
          }
          id
        }
      }
    }
  }
}
`;
