import type { App } from 'vue'

import Icon from './Icon.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(Vue: App) {
        registerComponent(Vue, Icon)
    }
}

use(Plugin)

export default Plugin

export {
    Icon as BIcon
}
