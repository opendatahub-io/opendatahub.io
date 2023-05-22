/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */
import { Script, graphql, useStaticQuery } from "gatsby";
import * as React from "react";

export const Seo = ({
  preview,
  title,
  children,
}: {
  preview?: string;
  title: string;
  children?: React.ReactNode;
}) => {
  const { site } = useStaticQuery(
    graphql`
      query siteMetadata {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  const metaDescription = preview || site.siteMetadata.preview;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:creator"
        content={site.siteMetadata?.social?.twitter || ``}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <script type="text/x-mathjax-config">
        {`
          MathJax.Hub.Config({
            messageStyle: "none",
            tex2jax: {
              inlineMath: [["\\\\(", "\\\\)"]],
              displayMath: [["\\\\[", "\\\\]"]],
              ignoreClass: "nostem|nolatexmath"
            },
            asciimath2jax: {
              delimiters: [["\\\\$", "\\\\$"]],
              ignoreClass: "nostem|noasciimath"
            },
            TeX: { equationNumbers: { autoNumber: "none" } }
          })
          MathJax.Hub.Register.StartupHook("AsciiMath Jax Ready", function () {
            MathJax.InputJax.AsciiMath.postfilterHooks.Add(function (data, node) {
              if ((node = data.script.parentNode) && (node = node.parentNode) && node.classList.contains("stemblock")) {
                data.math.root.display = "block"
              }
              return data
            })
          })
        `}
      </script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-MML-AM_HTMLorMML"></script>
      {children}
    </>
  );
};
