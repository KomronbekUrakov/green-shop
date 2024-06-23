
interface ButtonType {
  title:string,
  icon?:any,
  iconPozition?:"prev" | "next",
  buttonWidth:number, 
  onClick?:() => void,
  
}

export const Button:React.FC<ButtonType> =({title, icon,iconPozition,buttonWidth, onClick})=>{
  return (
    <button onClick={onClick} style={{width:`${buttonWidth}px`}} className={`bg-[#46A358] hover:opacity-60 duration-300 ${icon && iconPozition ? "py-[8px]" : "py-[10px]"}  rounded-[6px] flex items-center justify-center space-x-[4px]`}>
      {icon && iconPozition =="prev" && icon}
      <span className="text-[17px] font-medium text-white leading-[20.11px]">{title}</span>
      {icon && iconPozition =="next" && icon}
    </button>
  )
}