import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

export default () => (
  <Container>
    <SupportTitle>Support In Solidarity</SupportTitle>
    <Grid role="list">
      <List role="listitem">
        <StaticImage src="../images/38.png" />
      </List>
      <List role="listitem">
      <StaticImage src="../images/AS.png" />
      </List>
      <List role="listitem">
      <StaticImage src="../images/ADK.png" />
      </List>
      <List role="listitem">
        <StaticImage src="../images/AHANG.png" />
      </List>
      <List role="listitem">
        <StaticImage src="../images/AMANDLA.png" />
      </List>
      <List role="listitem">
        <StaticImage src="../images/AUFSTEHN.png" />
      </List>
      <List role="listitem">
        <StaticImage src="../images/DECLIC.png" />
      </List>
      <List role="listitem">
        <StaticImage src="../images/CAMPACT.png" />
      </List>
      <List role="listitem">
        <StaticImage src="../images/CAMPAX.png" />
      </List>
      <List role="listitem">
        <StaticImage src="../images/DGZ.png" />
      </List>
      <List role="listitem">
        <StaticImage src="../images/GU.png" />
      </List>
      <List role="listitem">
        <StaticImage src="../images/KP.png" />
      </List>
      <List role="listitem">
        <StaticImage src="../images/JHATKAA.png" />
      </List>
      <List role="listitem">
        <StaticImage src="../images/LM.png" />
      </List>
      <List role="listitem">
        <StaticImage src="../images/LEADNOW.png" />
      </List>
      <List role="listitem">
        <StaticImage src="../images/SKIFTET.png" />
      </List>
      <List role="listitem">
        <StaticImage src="../images/UPLIFT.png" />
      </List>
      <List role="listitem">
        <StaticImage src="../images/ZAZIM.png" />
      </List>
    </Grid>
  </Container>
)

const Container = styled.ul`
  margin: 2rem 0;
`

const Grid = styled.ul`
  display: grid;
  grid-gap: var(--grid-gap-xl);
  grid-template-columns: repeat(6, 1fr);
  list-style: none;

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

  a {
    display: block;
    height: 100%;
  }

  & .gatsby-image-wrapper {
    transition: opacity 1s ease-out, transform 0.5s ease;
    & img {
      max-height: 100px;
    }
  }

  a:hover,
  a:focus {
    .gatsby-image-wrapper {
      transform: scale(1.03);
    }
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    grid-column: span 2;
  }
`

const SupportTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: var(--font-weight-extra-bold);
  margin-bottom: var(--sizing-lg);
  line-height: 1.21875;
  color: #FED001;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    font-size: 1.75rem;
  }
`