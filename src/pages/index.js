import React, { Component } from 'react';
import _ from 'lodash';
import { FullPage, Slide } from 'react-full-page';
import { navigateTo } from 'gatsby-link'
import menu from 'components/IndexPage/home_menus'
// Components
import HomeSection from 'components/IndexPage/HomeSection'
import HomePortfolio from 'components/IndexPage/HomePortfolio'
import HomeServices from 'components/IndexPage/HomeServices'
import HomeAbout from 'components/IndexPage/HomeAbout'
import HomeBlog from 'components/IndexPage/HomeBlog'
import Contact from 'components/Contact'
import HomeMenu from 'components/IndexPage/HomeMenu'

const getHash = (index) => _.get(menu[index], 'hash')

class IndexPage extends Component {
  handleChange = ({ from, to }) => {
    navigateTo(`/#${getHash(to)}`)
  }

  render() {
    let hash = _.get(this.props, 'location.hash')
    return (
      <FullPage
        controls={HomeMenu}
        controlsProps={{ hash }}
        beforeChange={this.handleChange}
      >
        <Slide>
          <HomeSection />
        </Slide>
        <Slide>
          <HomePortfolio />
        </Slide>
        <Slide>
          <HomeServices />
        </Slide>
        <Slide>
          <HomeAbout />
        </Slide>
        <Slide>
          <HomeBlog />
        </Slide>
        <Slide>
          <Contact />
          <div className="copyrights">
            <p>© 2018 Konnexion.ca - Tous droits réservés</p>
          </div>
        </Slide>
      </FullPage>
    )
  }

}

export default IndexPage;
