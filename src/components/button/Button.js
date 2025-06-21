import Style from './button.module.css'

export default function Button ({children, name, width}) {
  return (
      <button className={Style.btnCold} style={{
        width: width
    }}>{children} {name}</button>
  )
}