import React from 'react'
import _ from 'lodash'
import { Menu, Link, Page, Section, Container, PortfolioList } from 'components'
import SlickSlider from "react-slick";


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1
}

const testimonials = [
  {
    text: '«Konnexion est une firme conseil unique et dynamique, branchée sur vos besoins. Misant sur la collaboration et la confiance, nous croyons qu’avec des stratégies innovantes et des solutions créatives, nous pouvons aider votre entreprise à développer son plein potentiel. Branchée sur votre réalité, notre équipe polyvalente a à cœur votre réussite.»',
    author: 'Erick Vachon, président',
    company: 'Groupe PJV',
    image: '/images/team/testimonials/GroupLV_Logo.svg',
  },
  {
    text: '«Konnexion est une firme conseil unique et dynamique, branchée sur vos besoins. Misant sur la collaboration et la confiance, nous croyons qu’avec des stratégies innovantes et des solutions créatives, nous pouvons aider votre entreprise à développer son plein potentiel. Branchée sur votre réalité, notre équipe polyvalente a à cœur votre réussite.»',
    author: 'author',
    company: 'company',
    image: '/images/team/testimonials/GroupLV_Logo.svg',
  },
]

const Testimonial = ({ text, image, author, company }) => (
  <div className="testimonial">
    <p>{text}</p>
    <div className="testimonial-info">
      <img src={image} />
      <div className="testimonial-text">
        <h5>{author}</h5>
        <h6>{company}</h6>
      </div>
    </div>
  </div>
)

const ClientsPage = ({ history, data }) => {
  let href = _.get(history, 'location.pathname')
  let portfolio = _.get(data, 'allContentfulPortfolioSingle')
  let list = _.map(_.get(portfolio, 'edges'), item => { return item.node } )
  return (
    <Section dark>
      <Menu href={href} backBeh={{ title: 'Retour', link: '/about' }} />
      <Container>
        <div className="block">
          <h2>Nos clients</h2>
          <p>Nos clients deviennent des partenaires d’affaires avec lesquels nous avons établi des liens authentiques et durables. Nous travaillons ensemble, main dans la main, afin de réaliser avec succès leur vision. Merci de nous faire confiance!</p>
          <div className="clients">
            <img src="/images/about/light/Logo_Turbokids.svg" />
            <img src="/images/about/light/Logo_JDSC.svg" />
            <img src="/images/about/light/Logo_MartineLord.svg" />
            <img src="/images/about/light/Logo_Neige.tech.svg" />
            <img src="/images/about/light/Logo_X-Reload.svg" />
            <img src="/images/about/light/Logo_GroupeEssa.svg" />
          </div>
        </div>
        <div className="block">
          <h2>Témoignages</h2>
          <SlickSlider {...settings}>
            {_.map(testimonials, item => <Testimonial key={item.author} {...item} /> ) }
          </SlickSlider>
        </div>

        <div className="block">
          <h2>Réalisations</h2>
          <PortfolioList data={list} />
          <div className="padding-view-all-center">
            <Link to="/portfolio" className="link-with-arrow">Voir toutes les réalisations</Link>
          </div>
        </div>
      </Container>
      <div className="background-div-skew" />
    </Section>
  );
}

export default ClientsPage

export const clientsPageQuery = graphql`
  query clientsPageQuery {
    allContentfulPortfolioSingle(limit: 3) {
      edges {
        node {
          title
          slug
          thumbnail {
            title
            sizes {
              src
              srcSet
              sizes
            }
            file {
              url
            }
          }
          category {
            title
          }
        }
      }
    }
  }
`
