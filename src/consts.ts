import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: "flocto's blog",
  description:
    'hi this is my personal website / blog. i write about computers and other stuff.',
  href: 'https://flocto.github.io/',
  author: 'flocto',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  { href: '/blog', label: 'blog' },
  { href: '/about', label: 'about' },
  { href: '/tools', label: 'tools' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://github.com/flocto', label: 'GitHub' },
  { href: 'https://twitter.com/fl0ct0', label: 'Twitter' },
  { href: 'flocto@duck.com', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
