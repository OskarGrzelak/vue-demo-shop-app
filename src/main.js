import { createApp } from 'vue'
import App from './App.vue'
import BaseContainer from './components/ui/BaseContainer.vue'
import BaseButton from './components/ui/BaseButton.vue'
import BaseLoader from './components/ui/BaseLoader.vue'
import BaseModal from './components/ui/BaseModal.vue'
import BaseForm from './components/ui/BaseForm.vue'
import BaseControl from './components/ui/BaseControl.vue'
import BaseInput from './components/ui/BaseInput.vue'
import { router } from './router'
import store from './store/index'

const app = createApp(App)
app.use(router)
app.use(store)
app.component('base-container', BaseContainer)
app.component('base-button', BaseButton)
app.component('base-loader', BaseLoader)
app.component('base-modal', BaseModal)
app.component('base-form', BaseForm)
app.component('base-control', BaseControl)
app.component('base-input', BaseInput)
app.mount('#app')
