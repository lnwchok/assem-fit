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
   // {
   //    text: 'Matl List',
   //    activeMatch: '^/matl/',
   //    items: [
   //       { text: 'ASME', link: '/matl/asme-mat-list' },
   //       { text: 'ASTM', link: '/matl/astm-mat-list' },
   // ]
   // },
   {
      text: 'Extras',
      activeMatch: '^/extras/',
      items: [{ text: 'ASME Material', link: '/extras/asme-mat-list' }, { text: '2' }, { text: '3' }]
   }
]
