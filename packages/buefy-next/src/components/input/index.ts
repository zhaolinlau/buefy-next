import type { App } from 'vue'

import Input from './Input.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(Vue: App) {
        registerComponent(Vue, Input)
    }
}

use(Plugin)

export default Plugin

export {
    Input as BInput
}
