import type { App } from 'vue'
import Autocomplete from './Autocomplete.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(Vue: App) {
        registerComponent(Vue, Autocomplete)
    }
}

use(Plugin)

export default Plugin

export {
    Autocomplete as BAutocomplete
}
