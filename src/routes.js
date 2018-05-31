import HomePage from 'pages/Home/HomeSection'
import PortfolioPage from 'pages/Home/HomePortfolio'
import ServicesPage from 'pages/Home/HomeServices'
import AproposPage from 'pages/Home/HomeApropos'
import BlogPage from 'pages/Home/HomeBlog'
import ContactPage from 'pages/Home/HomeContact'

const routes = [
  {
    title: 'Home',
    href: '/',
    menu: 0,
    color: 0,
    component: HomePage,
    exact: true,
  },
  {
    title: 'Réalisations',
    href: '/#realisations',
    menu: 1,
    color: 1,
    component: PortfolioPage,
    exact: true,
  },
  {
    title: 'Services',
    href: '/#services',
    menu: 1,
    color: 0,
    component: ServicesPage,
    exact: true,
  },
  {
    title: 'À propos',
    href: '/#apropos',
    menu: 1,
    color: 2,
    component: AproposPage,
    exact: true,
  },
  {
    title: 'Nouvelles',
    href: '/#nouvelles',
    menu: 1,
    color: 1,
    component: BlogPage,
    exact: true,
  },
  {
    title: 'Contact',
    href: '/#contact',
    menu: 1,
    color: 0,
    component: ContactPage,
    exact: true,
  },
]

export default routes
