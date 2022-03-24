/* eslint-disable import/no-anonymous-default-export */

export default {
  github: 'https://github.com/huaji-app',
  // projectChatLink: 'https://discord.gg/hEM84NMkRv', // Next.js discord server
  docsRepositoryBase:
    'https://github.com/huaji-app/pages',
  titleSuffix: 'HuaJi',
  logo: (
    <>
      <span className="font-extrabold">滑记</span>
      <span className="mr-2 ml-2 text-gray-500 font-normal hidden md:inline">
        huaji
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Nextra: the next site builder" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@shuding_" />
      <meta property="og:title" content="Nextra: the next site builder" />
      <meta property="og:description" content="Nextra: the next site builder" />
      <meta name="apple-mobile-web-app-title" content="Nextra" />
    </>
  ),
  search: true,
  unstable_faviconGlyph: '✦',
  prevLinks: true,
  nextLinks: true,
  floatTOC: true,
  footer: true,
  footerEditLink: ({ locale }) => <>编辑该文档</>,
  footerText: <>huaji</>
}
