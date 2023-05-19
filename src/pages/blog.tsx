import { Link, graphql } from "gatsby";
import * as React from "react";

import { Layout, Seo } from "../components/shared";
import {
  Grid,
  GridItem,
  Select,
  SelectOption,
  SelectVariant,
  Toolbar,
  ToolbarItem,
  ToolbarContent,
  Pagination,
} from "@patternfly/react-core";
import { ContentCard } from "../components/shared/ContentCard";
import placeholderImage from "../content/assets/img/placeholder.svg";
const BlogIndex = ({ data }) => {
  const edges = data.allFile.edges;
  const posts: any = [];
  edges.forEach(({ node }: any) => {
    posts.push(node.childMarkdownRemark);
  });
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(10);
  const [selected, setSelected] = React.useState<string | null>("");
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [initialValue, setInitialValue] = React.useState<number>(1);
  let results: string[] = [];
  let options: React.ReactElement[] = [];
  React.useEffect(() => {
    setInitialValue((page - 1) * perPage);
  }, [page, perPage, posts]);

  const onPerPageSelect = (
    _event: React.MouseEvent | React.KeyboardEvent | MouseEvent,
    newPerPage: number,
    newPage: number
  ) => {
    setPerPage(newPerPage);
    setPage(newPage);
  };
  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    if (["Enter", " "].includes(event.key)) {
      event.preventDefault();
      const newSelected =
        event.currentTarget.id === selected ? null : event.currentTarget.id;
      setSelected(newSelected);
    }
  };

  if (posts.length === 0) {
    return (
      <Layout>
        <p>No blog posts found.</p>
      </Layout>
    );
  }

  const onSetPage = (
    _event: React.MouseEvent | React.KeyboardEvent | MouseEvent,
    newPage: number
  ) => {
    console.log(newPage);
    setPage(newPage);
  };
  posts?.map(({ frontmatter }) => {
    return frontmatter?.categories?.split(",").forEach((categories) => {
      if (!results.includes(categories)) {
        results.push(categories);
        options.push(<SelectOption value={categories} />);
      }
    });
  });

  const [selectedState, setState] = React.useState({
    isOpen: false,
    selected: [],
  });
  const onSelects = (event, selection, isPlaceholder) => {
    setSearchValue(selection);
    console.log(isPlaceholder);

    if (isPlaceholder) clearSelection();
    else {
      setState({
        selected: selection,
        isOpen: false,
      });
      console.log("selected:", selection);
    }
  };
  const clearSelection = () => {
    setSearchValue("");
    setState({
      selected: [],
      isOpen: false,
    });
  };
  const onToggles = (isOpen) => {
    setState({ ...selectedState, isOpen: isOpen });
  };

  const customFilter = (_, value) => {
    if (!value) {
      return options;
    }

    const input = new RegExp(value, "i");
    return options.filter((child) => input.test(child.props.value));
  };
  const filteredRepos = posts.filter(
    (post) => post.frontmatter?.categories?.search(searchValue) >= 0
  );
  return (
    <>
      <Layout>
        <Toolbar id="search-input-filter-toolbar">
          <ToolbarContent>
            <ToolbarItem variant="search-filter">
              <Select
                variant={SelectVariant.typeahead}
                typeAheadAriaLabel="Select a state"
                onToggle={onToggles}
                onSelect={onSelects}
                onClear={clearSelection}
                onFilter={customFilter}
                selections={selectedState.selected}
                isOpen={selectedState.isOpen}
                placeholderText="Search by Categories"
              >
                {options}
              </Select>
            </ToolbarItem>

            <ToolbarItem variant="pagination">
              <Pagination
                titles={{ paginationTitle: "Search filter pagination" }}
                perPageComponent="button"
                itemCount={filteredRepos.length}
                perPage={perPage}
                page={page}
                onPerPageSelect={onPerPageSelect}
                onSetPage={onSetPage}
                widgetId="search-input-mock-pagination"
                isCompact
              />
            </ToolbarItem>
          </ToolbarContent>
        </Toolbar>

        <Grid hasGutter className="pf-c-title pf-u-m-auto">
          {filteredRepos
            .slice(initialValue, initialValue + perPage)
            .map(({ frontmatter, fields, excerpt }) => {
              return (
                <GridItem lg={4} sm={6} key={fields.slug}>
                  <ContentCard
                    title={frontmatter.title}
                    link={
                      frontmatter.permalink
                        ? frontmatter.permalink
                        : fields.slug
                    }
                    imageUrl={placeholderImage}
                    date={frontmatter.date}
                    body={frontmatter.description || excerpt}
                    chips={frontmatter.categories.split(",")}
                  />
                </GridItem>
              );
            })}
        </Grid>
      </Layout>
    </>
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
  query FeaturedBlogsQuery {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      edges {
        node {
          childMarkdownRemark {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              categories
              title
              preview
              featured
            }
            id
          }
        }
      }
    }
  }
`;
