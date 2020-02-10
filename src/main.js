import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";

import "@/assets/code-highlight.css"

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'


config.autoAddCss = false;
library.add(faGithub, faTwitter)


export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);  
  Vue.component('font-awesome', FontAwesomeIcon)
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
}
