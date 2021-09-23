
var mainConfig = {
  lang: 'en-US',
  title: 'RuRa',
  description: 'This is dimension for piping component',
  plugins: ['@vuepress/register-components'],
  themeConfig: {
    logoDark: '/images/ruler-light.png',
    logo: '/images/ruler.png',
    sidebar: {
      '/documents/components/': [
        {
          text: 'Piping Component',
          children: [
            {
              text: 'Pipe',
              link: '/documents/components/pipes/pipe.html'
            },
            {
              text: 'Socket Welding Fitting',
              link: '/documents/components/swfittings/swfit.html'
            },
            {
              text: 'Thread Fitting',
              link: '/documents/components/threadfittings/index.html'
            },
            {
              text: 'BW Fitting',
              link: '/documents/components/bwfittings/index.html'
            },
            {
              text: 'Flange',
              link: '/documents/components/flanges/index.html'
            }]
        }
      ]
    }
  }

}


module.exports = mainConfig