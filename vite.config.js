import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite config
    plugins: [react()],
    define: {
      API_TOKEN: JSON.stringify(env.API_TOKEN),
    },
  }
})


// plugins: [react()],
// import react from '@vitejs/plugin-react-swc'