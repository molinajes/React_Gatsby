import React, { PureComponent } from 'react';
import { Link, Error, Section, Container } from 'components'

const HomeApropos = () => (
  <Section>
    <div className="apropos-image" />
    <Container>
      <div className="long-text-container-254">
        <h2>L’ADN de Konnexion</h2>
        <p>Notre agence est spécialiste en programmation de technologies numériques de haute qualité réalisées en symbiose avec vos besoins.  Nous sommes spécialistes dans le développement et la conception d’app Web (ERP) et App Mobile, le E-commerce et de sites web performants.</p>
        <p>Nous croyons qu’avec des stratégies innovantes et des solutions créatives, nous pouvons aider n’importe quelle entreprise, de la start-up à la PME, à développer son plein potentiel.</p>
        <p>Nous nous occupons de votre projet, comme s’il était le nôtre.</p>
        <div className="padding-view-all">
          <Link to='/about' className="link-with-arrow">En savoir plus</Link>
        </div>
      </div>
    </Container>
  </Section>
)

export default HomeApropos;
