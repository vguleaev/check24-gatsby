import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <h1>Latest posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div className="blog-post" key={post.node.id}>
        <h3 className="blog-post-header">{post.node.frontmatter.title}</h3>
        <small>
          Posted by {post.node.frontmatter.author} on{" "}
          {post.node.frontmatter.date}
        </small>
        <Link to={post.node.frontmatter.path}>Read more</Link>
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query BlogPostQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            date
            path
            title
            author
          }
          excerpt
        }
      }
    }
  }
`

export default BlogPage
