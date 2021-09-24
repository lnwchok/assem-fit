module.exports = {
    lang: 'en-US',
    title: 'R u R a',
    description: 'Just playing around.',
    themeConfig: {
        // logoDark: '/images/ruler-light.png',
        // logo: './public/images/ruler.png',
        // logo: 'public/images/ruler.png',
        sidebar: {
          '/components/': [
            {
              text: 'Piping Component',
              children: [
                {
                  text: 'Pipe',
                  link: '/components/pipes/pipe.html'
                },
                {
                  text: 'Socket Welding Fitting',
                  link: '/components/swfittings/swfit.html'
                },
                {
                  text: 'Thread Fitting',
                  link: '/components/threadfittings/index.html'
                },
                {
                  text: 'BW Fitting',
                  link: '/components/bwfittings/index.html'
                },
                {
                  text: 'Flange',
                  link: '/components/flanges/index.html'
                }]
            }
          ]
        }
    }
}
