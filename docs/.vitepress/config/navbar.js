exports.nav = [
      {
         text: 'Components',
         link: '/',
         activeMatch: '^/$|^/component'
      },
      {
         text: 'Assembly',
         link: '/assembly/',
         activeMatch: '^/assembly/'
      },
      {
         text: 'Extras',
         activeMatch: '^/extras/',
         items: [
            { text: '1'},
            { text: '2'},
            { text: '3'}
         ]
      }
   ]
