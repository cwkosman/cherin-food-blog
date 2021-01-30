import Typography from "typography"

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.5,
  scale: 3,
  googleFonts: [{ name: 'Crimson Pro', styles: ['400', '700']}],
  headerFontFamily: ["Crimson Pro", "Georgia", "serif"],
  bodyFontFamily: ["Crimson Pro", "Georgia", "serif"],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
