import { defineConfig } from 'vite'
import { getAliases } from 'vite-aliases'

import reactRefresh from '@vitejs/plugin-react-refresh'

const aliases = getAliases();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
		alias: aliases
	}
})
