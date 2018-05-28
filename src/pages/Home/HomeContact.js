import React, { Component } from 'react';
import { Error, Section, Container } from 'components'

const HomeContact = () => (
  <Section dark>
    <Container>
      <div className="contact">
        <div className="halfpart">
          <h2><strong>Vous souhaitez partager votre idée?</strong></h2><a href="#" className="button w-button">Obtenez un devis gratuit</a>
          <h2><strong>Où sommes-nous situés?</strong></h2>
          <p><strong>(581) 700-7665<br/><br/>‍6655, Boul. Pierre-Bertrand, suite 221, Ville de Québec, Qc G2K 1M1</strong></p>
        </div>
        <div className="halfpart">
          <h2><strong>Établissons la connection</strong></h2>
          <div className="w-form">
            <form id="email-form" name="email-form" data-name="Email Form">
              <input type="text" className="text-field w-input" maxLength="256" placeholder="Nom" />
              <input type="text" className="text-field w-input" maxLength="256" placeholder="Adresse courriel" />
              <input type="text" className="text-field w-input" maxLength="256" placeholder="Numéro de téléphone" />
              <input type="text" className="text-field w-input" maxLength="256" placeholder="Message" />
              <div className="padding-view-all">
                <a href="#" className="link-with-arrow">Envoyer</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  </Section>
)

export default HomeContact;
