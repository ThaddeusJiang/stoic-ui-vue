import Vue from 'vue'
import VueTippy, { TippyComponent } from 'vue-tippy'

import 'tippy.js/themes/light.css'
import 'tippy.js/themes/light-border.css'
import 'tippy.js/themes/google.css'
import 'tippy.js/themes/translucent.css'

Vue.use(VueTippy)

Vue.component('tippy', TippyComponent)
