import DefaultTheme from 'vitepress/theme'
import makeTable from '../components/MakeTable.vue'

export default {
    ...DefaultTheme,
    NotFound: () => 'custom 404',
    enhanceApp({ app, router, siteData }) {
        app.component('make-table',makeTable)
        // app is the Vue 3 app instance from `createApp()`. router is VitePress'
        // custom router. `siteData`` is a `ref`` of current site-level metadata.
    }
}