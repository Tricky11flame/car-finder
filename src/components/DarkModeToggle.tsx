import { useEffect, useState } from 'react'

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState<boolean>(
    localStorage.getItem('theme') === 'dark'
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <button onClick={() => setIsDark(!isDark)} className="text-sm">
      {isDark ? '☀️ Light' : '🌙 Dark'}
    </button>
  )
}

export default DarkModeToggle
