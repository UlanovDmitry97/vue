import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// import {
//   ElButton,
//   ElSelect
// } from 'element-plus';

// const Elcomponents = [
//   ElButton,
//   ElSelect
// ]

let app = createApp(App)
app.use(store)
app.use(router)
// Elcomponents.forEach(component=> {
//   app.use(component )
// })
app.mount('#app')
