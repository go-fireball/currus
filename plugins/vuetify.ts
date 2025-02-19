// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            defaultTheme: 'customTheme', // Set a custom theme
            themes: {
                customTheme: {
                    dark: false, // Set to `true` for dark mode
                    colors: {
                        primary: '#808080', // Gray (you can change this to another shade)
                        secondary: '#424242',
                        accent: '#82B1FF',
                        error: '#FF5252',
                        info: '#2196F3',
                        success: '#4CAF50',
                        warning: '#FB8C00'
                    }
                }
            }
        }
    })
    app.vueApp.use(vuetify)
})
