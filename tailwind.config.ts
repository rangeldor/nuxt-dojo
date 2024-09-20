import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}'
    // Adicione outros diretórios conforme necessário
  ],
  theme: {
    extend: {
      // Suas extensões de tema aqui
    }
  },
  plugins: []
}

export default config
