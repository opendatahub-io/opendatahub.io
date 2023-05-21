import { PageProps, graphql } from "gatsby";
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
import { SourceInstanceNameLabel } from "../const";
import { FilterIcon, SearchIcon } from "@patternfly/react-icons";


const BlogIndex = ({ data }: PageProps<Queries.AllContentQueryQuery>) => {
  const posts = data.allFile.edges;
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(10);

  const [searchValue, setSearchValue] = React.useState("");
  const [categoryFilter, setCategoryFilter] = React.useState<string[]>([]);
  const [isCategoryFilterOpen, setIsCategoryFilterOpen] = React.useState(false);
  const [contentTypeFilter, setContentTypeFilter] = React.useState<string[]>([]);
  const [isContentTypeFilterOpen, setIsContentTypeFilterOpen] = React.useState(false);

  const [categorySelectOptions, contentTypeSelectOptions] = React.useMemo(() => {
    const nodeCategories = data.allFile.edges
      .map((edge) => edge.node.childMarkdownRemark?.frontmatter?.categories?.split(",") ?? [])
      .reduce((prev, curr) => new Set([...prev, ...curr]), new Set<string>())

    const contentTypes = data.allFile.edges
      .reduce((prev, curr) => new Set([...prev, curr.node.sourceInstanceName]), new Set<string>())

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
      const sourceInstanceName = node.sourceInstanceName
      const nodeCategories = frontmatter?.categories?.split(",") ?? []
      const title = frontmatter?.title ?? ""

      return (categoryFilter.length === 0 || categoryFilter.every((option) => nodeCategories.includes(option))) &&
        (contentTypeFilter.length === 0 || contentTypeFilter.every((option) => sourceInstanceName === option)) &&
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
            setContentTypeFilter([])
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
                  chips={contentTypeFilter}
                  deleteChip={(_category, chip) => setContentTypeFilter(contentTypeFilter.filter(c => c !== chip))}
                  categoryName="Content Type"
                >
                  <Select
                    variant={SelectVariant.checkbox}
                    aria-label="Content Type"
                    onToggle={() => setIsContentTypeFilterOpen(!isContentTypeFilterOpen)}
                    onSelect={(_, value) => {
                      if (typeof value === "string" && contentTypeFilter.includes(value)) {
                        setContentTypeFilter(contentTypeFilter.filter((content) => content !== value))
                      } else {
                        setContentTypeFilter([...contentTypeFilter, value as string])
                      }
                    }}
                    selections={contentTypeFilter}
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
                setContentTypeFilter([])
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
            .map(({ node: { childMarkdownRemark: markdown, sourceInstanceName } }, i) => {
              return (
                <ContentCard
                  key={(markdown?.fields?.slug ?? "") + i}
                  title={markdown?.frontmatter?.title}
                  subTitle={SourceInstanceNameLabel[sourceInstanceName]}
                  link={markdown?.frontmatter?.permalink ?? markdown?.fields?.slug}
                  body={(
                    <Stack>
                      <StackItem>
                        <i style={{ color: "grey" }}>{markdown?.frontmatter?.date}</i>
                      </StackItem>
                      <StackItem>{markdown?.frontmatter?.preview}</StackItem>

                    </Stack>
                  )}
                  chips={(markdown?.frontmatter?.categories ?? "").split(",")}
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
            featured
          }
          id
        }
        sourceInstanceName
      }
    }
  }
}
`;
