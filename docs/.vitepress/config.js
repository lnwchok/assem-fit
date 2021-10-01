module.exports = {
    base: '/',
    lang: 'en-US',
    title: 'R u R a',
    description: 'Just playing around.',
    themeConfig: {
      sidebar: {
        '/': getComponentSidebar()
      }
    }
}

function getComponentSidebar() {
  return [
    {
      text: 'Piping Component',
      children: [
        { text: 'Pipe', link: '/' },
        { text: 'SW Fitting', link: '/swfitting'},
        { text: 'Thread Fitting', link: '/threadfitting' },
        { text: 'BW Fitting', link: '/bwfitting' },
        { text: 'Flange', link: '/flange' }
      ]
    }
  ]
}