/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindAttributes: ['className'],
  tailwindFunctions: ['clsx'],
  semi: false,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: false,
  trailingComma: 'all',
  jsxSingleQuote: true,
  bracketSpacing: true,
}
