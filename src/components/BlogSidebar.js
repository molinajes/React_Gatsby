import React, { PureComponent } from 'react'
import _ from 'lodash'
import { Form, Text } from 'react-form'
import MailchimpSubscribe from "react-mailchimp-subscribe"

import { Error, Menu, Section, Container, Link, BlogPost } from 'components'

class SearchField extends PureComponent {
  state = {
    query: ''
  }

  handleChange (event) {
    this.setState({ query: event.target.value })
  }

  render() {
    return (
      <div className="blog-sidebar-form">
        <input value={this.state.query} onChange={::this.handleChange} className="text-field w-input" placeholder="Search" />
        <Link to={`/search?query=${this.state.query}`} type="submit">
          <button className="blog-sidebar-form-button" />
        </Link>
      </div>
    )
  }
}

const Tags = ({ tags }) => (
  <div className="tag-link-div">
    {(!tags || tags.lenght === 0) && <p>There's no tags</p>}
    {_.map(tags, ({ title, link }) => <Link key={link} to={`/blog/tag/${link}`} className="tag-link">{title}</Link>)}
  </div>
)

const MailChimp = () => (
  <MailchimpSubscribe
    url="//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn"
    render={
      ({ subscribe, status, message }) => (
        <div>
          {!status &&
            <Form onSubmit={formData => subscribe(formData)}>
              {formApi => (
                <form
                  onSubmit={formApi.submitForm}
                  className="blog-sidebar-form"
                >
                  <Text
                    field="email"
                    className="text-field w-input"
                    maxLength="256"
                    placeholder="Adresse courriel"
                  />
                  <button
                    type="submit"
                    className="blog-sidebar-form-button"
                  />
                </form>
              )}
            </Form>
          }
          {status === "sending" && <div>Sending...</div>}
          {status === "error" && <Error><div dangerouslySetInnerHTML={{__html: message}} /></Error>}
          {status === "success" && <div>Subscribed!</div>}
        </div>
      )
    }
  />
)

const PopularArticles = ({ data }) => (
  <div>
    {_.map(data, ({ title }) => <BlogPost mini title={title} />)}
  </div>
)

const BlogSideBar = () => (
  <div className="blog-sidebar">
    <SearchField />
    <div className="blog-sidebar-padding">
      <h5>Articles populaires</h5>
      <PopularArticles />
    </div>
    <div className="blog-sidebar-padding">
      <h5>Tags</h5>
      <Tags tags={[{ title: 'web', link: 'web'}]} />
    </div>
    <div className="blog-sidebar-padding">
      <h5>Infolettre</h5>
      <MailChimp />
    </div>
  </div>
)

export default BlogSideBar
