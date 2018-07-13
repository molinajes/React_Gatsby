import React, { Component } from 'react';
import { Form, Text } from 'react-form'
import { Error, Section, Container } from 'components'

class ContactForm extends Component {
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
      <div>
        <h2><strong>Établissons la connection</strong></h2>
        {
          this.state.sent ?
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              // justifyContent: 'center',
            }}>
              <h4>Complété!</h4>
              <p>Notre équipe vous contactera d'ici 24 heures.</p>
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
                  Retour
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
                  name="name"
                  className="text-field w-input"
                  maxLength="256"
                  placeholder="Nom"
                  disabled={this.state.loading}
                />
                <Text
                  field="email"
                  name="email"
                  className="text-field w-input"
                  maxLength="256"
                  placeholder="Adresse courriel"
                  disabled={this.state.loading}
                />
                <Text
                  field="phone"
                  name="phone"
                  className="text-field w-input"
                  maxLength="256"
                  placeholder="Numéro de téléphone"
                  disabled={this.state.loading}
                />
                <Text
                  field="message"
                  name="message"
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
    )
  }
}

const Contact = () => (
  <div className="contact">
    <div className="halfpart">
      <h2>
        Vous souhaitez partager votre idée?
      </h2>
      <a
        href="tel:+1 (581) 700-7665"
        className="button w-button"
        style={{
          margin: '20px 0 10px'
        }}
      >Obtenez un devis gratuit</a>
      <h2><strong>Où sommes-nous situés?</strong></h2>
      <a href="tel:+1 (581) 700-7665"><p><strong>(581) 700-7665</strong></p></a>
      <a href="https://goo.gl/maps/gb2xM4fUvep" target="_blank"><p><strong>‍6655, Boul. Pierre-Bertrand, suite 221, Ville de Québec, Qc G2K 1M1</strong></p></a>
    </div>
    <div className="halfpart contact-form">
      <ContactForm />
    </div>
  </div>
)

export default Contact;
