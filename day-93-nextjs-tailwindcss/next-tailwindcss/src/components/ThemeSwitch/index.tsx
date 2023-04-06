import { useTheme } from "next-themes";

export default function ThemeSwitch(){
    const {theme,setTheme} = useTheme()

    const dark:boolean = theme === "dark"

    const toggleTheme = () =>{
        setTheme(dark ? "light" : "dark")
    }
    if(typeof window === "undefined") return null


    return(
        <main>
             <button onClick={toggleTheme} className="dark:bg-opacity-20 dark:text-grey-50 bg-green-100 text-grey-500 pl-2 pr-2 rounded-md text-xs p-1"> Toggle Theme</button>
        </main>
       
    )

}