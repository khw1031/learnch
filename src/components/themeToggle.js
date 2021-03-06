import React, { useContext } from "react"
import { ThemeContext } from "../context/themeContext"

const ThemeToggle = () => {
  const { colorMode, setColorMode } = useContext(ThemeContext)
  if (!colorMode) return null

  return (
    <label>
      <input
        type="checkbox"
        checked={colorMode === "dark"}
        onChange={ev => {
          setColorMode(ev.target.checked ? "dark" : "light")
        }}
      />{" "}
      Dark
    </label>
  )
}

export default ThemeToggle
