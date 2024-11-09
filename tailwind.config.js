/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT'
export default withMT ({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customGray: '#2F3235',
        titleGray:"#DEE5E5",
        gitBookEditorBtn:"#61977F",
        publishedSiteBtn:"#FDA599"
      }
    },
  },
  plugins: [],
})

