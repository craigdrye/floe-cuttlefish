import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'scratch/**', 'data/**', 'reports/**']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: [
      'src/data/questionCatalog/fcc.ts',
      'src/data/questionCatalog/kolibri.ts',
      'src/data/questionCatalog/openstax.ts',
      'src/data/questionCatalog/universityAcademic.ts',
      'src/data/questionCatalog/wikibooks.ts',
    ],
    rules: {
      'no-loss-of-precision': 'off',
      'no-useless-escape': 'off',
    },
  },
])
