module.exports = {
    lang: 'en-US',
    title: 'R u R a',
    description: 'Just playing around.',
    themeConfig: {
      sidebar: {
        '/components/': getComponentSidebar()
      }
    }
}


function getComponentSidebar() {
  return [
    {
      text: 'Piping Component',
      children: [
        { text: 'Pipe', link: '/components/pipe' },
        { text: 'Socket Welding Fitting', link: '/components/swfitting '},
        { text: 'Thread Fitting', link: '/components/threadfitting' },
        { text: 'BW Fitting', link: '/components/bwfitting' },
        { text: 'Flange', link: '/components/flange' }
      ]
    }
  ]
}