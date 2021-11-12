const ComponentPageSidebar = [
   {
      text: 'Piping Component',
      children: [
         { text: 'Pipe', link: '/' },
         { text: 'SW Fitting', link: '/component/swfitting' },
         { text: 'Thread Fitting', link: '/component/threadfitting' },
         { text: 'BW Fitting', link: '/component/bwfitting' },
         { text: 'ASME Flange', link: '/component/flange' },
         { text: 'ASME Larged Flange', link: '/component/flange-lg' },
         { text: 'ASME Gasket-Sheet', link: '/component/gktsheet' },
         { text: 'JIS Flange', link: '/component/flange-jis' },
         { text: 'JIS Gasket', link: '/component/gktsheet-jis' },
         { text: 'Bolt', link: '/component/bolt' }
      ]
   }
]

const AssemblyPageSidebar = [
   {
      text: 'Piping Assembly',
      children: [{ text: 'AAA', link: '/assembly/' }]
   }
]

const ExtrasPageSidebar =[
   {
      text: 'Extra Contents',
      children : [
         { text: 'ASME Material', link: '/extras/asme-mat-list' }
      ]
   }
]

exports.sidebar = {
   '/extras/' : ExtrasPageSidebar,
   '/assembly/': AssemblyPageSidebar,
   '/component/': ComponentPageSidebar,
   '/': ComponentPageSidebar
}

