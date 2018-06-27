import React from 'react';
import GatsbyLink from "gatsby-link";

import IconKonnexion from './IconKonnexion'
import IconFacebook from './IconFacebook'
import IconLinkedIn from './IconLinkedIn'

import Error from './Error'
import Page from './Page'
import Section from './Section'
import Container from './Container'
import MenuLeft from './MenuLeft'
import MenuTop from './MenuTop'
import Menu from './Menu'
import SocialLinks from './SocialLinks'
import Copyrights from './Copyrights'

import BlogPost from './BlogPost'
import BlogSideBar from './BlogSidebar'

import { PortfolioList, PortfolioItem } from './Portfolio'

import Contact from './Contact'

const Link = ({ children, to, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);

  // Use gatsby-link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink to={to} {...other}>
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} {...other}>
      {children}
    </a>
  );
};

export {
  IconKonnexion,
  IconFacebook,
  IconLinkedIn,
  BlogSideBar,
  Copyrights,
  Link,
  Error,
  Page,
  Section,
  Container,
  MenuLeft,
  MenuTop,
  Menu,
  SocialLinks,
  BlogPost,
  PortfolioList,
  PortfolioItem,
  Contact,
}
