import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import kebabCase from "lodash/kebabCase"
import Helmet from 'react-helmet'
import moment from "moment"

import Bio from '../../../components/Bio'
import Layout from '../../../components/layout'

class UnityWeeklyIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'ja' }}
          meta={[{ name: 'description', content: siteDescription},
                 { name: 'pocket-site-verification', content: '805bf1c6b548ce74b5c4bc4b9b1c56'}
          ]}
          title={siteTitle}
        />
        <ul className="articles">

          <h1>Unity Weekly</h1>

          <div>
            <p>
              Unity Weeklyは、<Link to="https://twitter.com/yucchiy_">@yucchiy_</Link>が読んだUnity関連の記事の中から、気になった記事を週報形式で紹介するコンテンツです。
            </p>

            <p>
              記事に関するコメント等は、<Link to="https://twitter.com/yucchiy_">@yucchiy_</Link>までリプライいただけると幸いです。もし気に入っていただければRSSやブクマいただけると喜びます。
            </p>
          </div>


          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            const tags = node.frontmatter.tags || []
            return (
              <li key={node.fields.slug}>
                <h3>
                  <Link to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <time dateTime={node.frontmatter.dateTime}>{moment(node.frontmatter.date).format(`MMMM DD, YYYY`)}</time>
                <ul className="tags">
                  {tags.map((tag) => {
                    return (
                      <li key={`${kebabCase(tag)}`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>
                          {tag}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
        <hr/>
        <Bio />
      </Layout>
    )
  }
}

export default UnityWeeklyIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "unity-weekly" } } }, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            type
            title
            tags
            date
          }
        }
      }
    }
  }
`
