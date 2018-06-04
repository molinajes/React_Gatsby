import React, { Component } from 'react';
import { Form, Text } from 'react-form'
import { Error, Section, Container } from 'components'

class Contact extends Component {
  state = {
    sent: false,
    loading: false,
  }

  encode = (data) => Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");

  handleSubmit = (values) => {
    this.setState({ loading: true })
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        "form-name": "contact",
        ...values
      })
    })
    .then(() => { this.setState({ sent: true, loading: false }) })
    .catch(error => alert(error));
  }

  render () {
    return (
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
              {
                this.state.sent ?
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    // justifyContent: 'center',
                  }}>
                    <h4>Done.</h4>
                    <p>We'll contact you!</p>
                    <div>
                      <button
                        className="link-with-arrow"
                        style={{
                          paddingLeft: 0,
                          backgroundColor: 'transparent',
                          color: '#33CFF4'
                        }}
                        onClick={() => { this.setState({ sent: false })}}
                      >
                        Retry
                      </button>
                    </div>
                  </div>
                :
                <Form onSubmit={this.handleSubmit} >
                  {formApi => (
                    <form
                      name="contact"
                      method="post"
                      onSubmit={formApi.submitForm}
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                    >
                      <Text
                        field="name"
                        className="text-field w-input"
                        maxLength="256"
                        placeholder="Nom"
                        disabled={this.state.loading}
                      />
                      <Text
                        field="address"
                        className="text-field w-input"
                        maxLength="256"
                        placeholder="Adresse courriel"
                        disabled={this.state.loading}
                      />
                      <Text
                        field="phone"
                        className="text-field w-input"
                        maxLength="256"
                        placeholder="Numéro de téléphone"
                        disabled={this.state.loading}
                      />
                      <Text
                        field="message"
                        className="text-field w-input"
                        maxLength="2000"
                        placeholder="Message"
                        disabled={this.state.loading}
                      />
                      <div className="padding-view-all">
                        <button
                          type="submit"
                          className="link-with-arrow"
                          style={{
                            paddingLeft: 0,
                            backgroundColor: 'transparent',
                            color: '#33CFF4'
                          }}
                          disabled={this.state.loading}
                        >
                          Envoyer
                        </button>
                      </div>
                    </form>
                  )}
                </Form>
              }
            </div>
          </div>
        </Container>
      </Section>
    )
  }
}

export default Contact;
