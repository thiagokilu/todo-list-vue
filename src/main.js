// main.js
import { createApp } from "vue";
import App from "./App.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { IoTrashOutline, BiClipboard2PlusFill } from "oh-vue-icons/icons";

// Adiciona os ícones
addIcons(IoTrashOutline, BiClipboard2PlusFill);

const app = createApp(App);

// Registra o componente globalmente
app.component("VIcon", OhVueIcon);

app.mount("#app");
