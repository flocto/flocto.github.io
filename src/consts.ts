export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'flocto',
  DESCRIPTION:
    'hi this is my personal website / blog. i write about computers and other stuff.',
  EMAIL: 'flocto@duck.com',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://flocto.github.io/',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/flocto', label: 'GitHub' },
  { href: 'https://twitter.com/fl0ct0', label: 'Twitter' },
  { href: 'flocto@duck.com', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]
