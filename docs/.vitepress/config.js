module.exports = {
    base: '/',
    lang: 'en-US',
    title: 'R u R a',
    description: 'Just playing around.',
    themeConfig: {
      repo: 'lnwchok/assem-fit',
      sidebar: {
        '/': getComponentSidebar()
      },
      nav: [
        { text: 'Component', link: '/', activeMatch: '^/$|^/'}
      ]
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
        { text: 'Flange (NPS 1/2 ~ 24)', link: '/flange' },
        { text: 'Larged Size Flange', link: '/flange-lg' }
      ]
    }
  ]
}