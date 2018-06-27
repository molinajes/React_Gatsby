import React, { Component } from 'react';
import _ from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { Menu, Section, Container, BlogPost } from 'components'

class SearchPage extends Component {
  state = {
    active: false,
    loading: true,
    posts: [],
    searchPhrase: _.get(this.props, 'history.location.search').slice(1)
  }

  componentDidMount() {
    this.setState({
      searchPhrase: _.get(this.props, 'history.location.search').slice(1)
    })
    this.fetchSearch()
  }

  handleChange (event) {
    this.setState({
      active: true,
      searchPhrase: event.target.value
    })
  }

  handleSearch () {
    this.fetchSearch()
  }

  handleKeyPress (e) {
    if (e.key === 'Enter') {
      this.handleSearch()
    }
  }

  fetchSearch = () => {
    this.setState({ loading: true })
    let access_token = 'bed7ddba09fd3960819f7275c57493ea1a2b448c211cd3a8b5a51387792d7bfd'
    let space_id = 'k6t24mpxrtzp'
    let content_type = 'blogPost'
    let searchUrl = `
//cdn.contentful.com/
spaces/${space_id}
/entries?
access_token=${access_token}
&content_type=${content_type}
&query=${this.state.searchPhrase}
`
    fetch(searchUrl)
      .then(response => response.json())
      .then(json => {
        let assets = _.map(_.get(json, 'includes.Asset'), ({ sys, fields }) => ({id: sys.id, src: fields.file.url}))
        let posts = _.map(json.items, post => {
          let postImageId = post.fields.featuredImage.sys.id
          let featuredImageReal = {
            featuredImage: {
              sizes: {..._.find(assets, (i) => i.id === postImageId)}
            }
          }
          return _.merge(_.get(post, 'fields'), featuredImageReal)
        })
        this.setState({
          posts,
          loading: false,
          active: false,
        })
      })
  }

  render() {
    let { history } = this.props
    let href = _.get(history, 'location.pathname')

    console.log(this.state);

    return (
      <Section>
        <Helmet title="Search" />
        <Menu href={href} backBeh={{ title: 'Retour', link: '/nouvelles' }} />
        <Container>
          <h1 className="search-page-input">
            <span>Search:</span>
            <div className="search-page-form">
              <input
                type="text"
                value={this.state.searchPhrase}
                onChange={::this.handleChange}
                placeholder="query"
                onKeyPress={::this.handleKeyPress}
              />
              <button className={`search-page-form-button${this.state.active ? ' active' : ''}`} onClick={::this.handleSearch} />
            </div>
          </h1>
          {this.state.loading && <p>Loading...</p>}
          {_.map(this.state.posts, ({ title, featuredImage, datePublished, category, excerpt, slug }) => (
            <BlogPost
              key={slug}
              featuredImage={featuredImage}
              title={title}
              datePublished={datePublished}
              category={category}
              slug={slug}
              excerpt={{ excerpt }}
            />
          ))}
        </Container>
      </Section>
    );
  }

}

export default SearchPage;
