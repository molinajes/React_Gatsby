import React, { Component, PureComponent } from 'react'
import _ from 'lodash'
import { Form, Text } from 'react-form'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { FBShare, TWShare } from 'components/ShareButtons'

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
        <Link to={`/search?${this.state.query}`} type="submit">
          <button className="blog-sidebar-form-button" />
        </Link>
      </div>
    )
  }
}

// <Link key={link} to={`/nouvelles/tag/${link}`} className="tag-link">{title}</Link>
const Tags = ({ tags }) => (
  <div className="tag-link-div">
    {(!tags || tags.lenght === 0) && <p>There's no tags</p>}
    {_.map(tags, ({ title, link }) => <div key={link} className="tag-link">{title}</div>)}
  </div>
)

const MailChimp = () => (
  <MailchimpSubscribe
    url="https://konnexion.us9.list-manage.com/subscribe/post?u=968baafa282cbbc86d540ae60&id=da793a762b"
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
                    field="EMAIL"
                    className="text-field w-input"
                    maxLength="256"
                    placeholder="Email"
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

class BlogSideBar extends Component {
  state = {
    url: ''
  }

  componentDidMount() {
    this.setState({
      url: window && window.location.href
    })
  }

  render() {
    return (
      <div className="blog-sidebar">
        <div className="blog-sidebar-padding">
          <h5>Partager</h5>
          <div className="blog-sidebar-sharebuttons">
            <FBShare url={this.state.url} />
            <TWShare url={this.state.url} />
          </div>
        </div>
        <SearchField />
        <div className="blog-sidebar-padding">
          <h5>Popular Articles</h5>
          <PopularArticles />
        </div>
        <div className="blog-sidebar-padding">
          <h5>Tags</h5>
          <Tags tags={[{ title: 'web', link: 'web'}]} />
        </div>
        <div className="blog-sidebar-padding">
          <h5>Newsletter</h5>
          <MailChimp />
        </div>
      </div>
    )
  }

}

export default BlogSideBar
