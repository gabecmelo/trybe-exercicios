import './Button.css'

type ButtonProps = {
  children: React.ReactNode
}

export const Button = ({children}:ButtonProps) => {
  return (
    <button className="styled-btn">
      { children }
    </button>
  )
}