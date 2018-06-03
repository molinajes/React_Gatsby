import React from 'react'
import _ from 'lodash'
import Link from 'gatsby-link'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Menu, Section, Container, BlogPost } from 'components'


const BlogPage = ({ history }) => {
  let href = _.get(history, 'location.pathname')
  return (
    <Section>
      <Menu href={href} />
      <Container>
        <h1>Nouvelles</h1>
        <Tabs>
          <TabList>
            <Tab>Toutes les nouvelles</Tab>
            <Tab>Web</Tab>
            <Tab>Technologie</Tab>
          </TabList>
          <TabPanel>
            <BlogPost main />
            <div className="blog-grid">
              <BlogPost />
              <div className="blog-sidebar">
                <h4>Articles populaires</h4>
                <BlogPost mini />
                <BlogPost mini title="hello" />
              </div>
            </div>
            <div className="padding-view-all-center">
              <Link href={href} className="link-with-arrow">Voir plus de nouvelles</Link>
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
        </Tabs>

      </Container>
    </Section>
  );
}

export default BlogPage
