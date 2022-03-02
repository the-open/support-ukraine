import React, { useState, useLayoutEffect } from "react"
import type { PageProps } from "gatsby"
import { graphql } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import type { Query, MarkdownRemarkFrontmatter } from "Types/GraphQL"
import type Post from "Types/Post"
import useSiteMetadata from "Hooks/useSiteMetadata"
import Layout from "Layouts/layout"
import SEO from "Components/seo"
import PostGrid from "Components/postGrid"
import CategoryFilter from "Components/catetgoryFilter"
import IndexText from "Components/indexText"
import OrgList from "Components/orgList"

const Home = ({
  pageContext,
  data,
}: PageProps<Query, MarkdownRemarkFrontmatter>) => {
  const [posts, setPosts] = useState<Post[]>([])
  const currentCategory = pageContext.category
  const postData = data.allMarkdownRemark.edges

  useLayoutEffect(() => {
    const filteredPostData = currentCategory
      ? postData.filter(
          ({ node }) => node?.frontmatter?.category === currentCategory
        )
      : postData

    filteredPostData.forEach(({ node }) => {
      const { id } = node
      const { slug } = node?.fields!
      const { title, desc, date, category, thumbnail, alt, link } = node?.frontmatter!
      const { childImageSharp } = thumbnail!

      setPosts(prevPost => [
        ...prevPost,
        {
          id,
          slug,
          title,
          desc,
          date,
          category,
          thumbnail: childImageSharp?.id,
          alt,
          link,
        },
      ])
    })
  }, [currentCategory, postData])

  const site = useSiteMetadata()
  const postTitle = currentCategory || site.postTitle

  return (
    <Layout>
      <SEO title="Home" />
      <Main>
        <Content>
          <Title>In the face of acts of aggression against civilians, <br/>
          we express our solidarity with our neighbours and friends, Ukrainians.</Title>
          <Grid role="list">
            <List role="listitem">
              <ThumbnailWrapper>
                <StaticImage src="../images/dove.png" width={300} marginLeft={30} />
              </ThumbnailWrapper>
            </List>
            <List role="listitem">
              <TextContent>
                The cost of war is always the highest for everyday people. The true scale of the humanitarian effort needed - both for the refugees seeking safety in Romania, Poland, and Hungary and for the people still in Ukraine - will be huge.
                <br/><br/>
                People need food, warmth, water and safe places to stay and probably for months. They might also need legal support or health care.
                <br/><br/>
                As we write this already over 500,000 Ukrainians have fled the country and as long as Putin is advancing into Ukraine, this will drive up the number of people needing help.
              </TextContent>
            </List>
          </Grid>
          <IndexText/>
          <PostTitle>Aid Organisations</PostTitle>
          <PostGrid posts={posts} />
          <OrgList/>
        </Content>
      </Main>
    </Layout>
  )
}

const Main = styled.main`
  min-width: var(--min-width);
  min-height: calc(100vh - var(--nav-height) - var(--footer-height));
  background-color: var(--color-background);
`

const Content = styled.div`
  box-sizing: content-box;
  width: 87.5%;
  max-width: var(--width);
  padding-top: var(--sizing-lg);
  padding-bottom: var(--sizing-lg);
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    padding-top: var(--grid-gap-lg);
    width: 87.5%;
  }
`

const PostTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: var(--font-weight-extra-bold);
  margin-bottom: var(--sizing-md);
  line-height: 1.21875;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    font-size: 1.75rem;
  }
`

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(posts/blog)/" } }
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            category
            date(formatString: "YYYY-MM-DD")
            desc
            thumbnail {
              childImageSharp {
                id
              }
              base
            }
            alt
            link
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

const Title = styled.h3`
  margin-top: var(--sizing-xs);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.device.md}) {
    font-size: 1.3125rem;
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    font-size: var(--text-md);
  }
`

const Grid = styled.ul`
  display: grid;
  grid-gap: var(--grid-gap-xl);
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  margin-top: 20px;

  & > li {
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    grid-gap: var(--grid-gap-lg);
  }
`

const List = styled.li`
  box-sizing: border-box;
  grid-column: span 1;
  display: flex;
  justify-content: center;

  a {
    display: block;
    height: 100%;
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    grid-column: span 2;
  }
`

const TextContent = styled.p`
  line-height: 1.68;
  text-align: left;
  font-size: 1.0625rem;
`

export const ThumbnailWrapper = styled.div`
  display: flex;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: var(--color-dimmed);
    transition: 0.3s ease;
  }
`

export default Home
