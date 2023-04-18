import Home from "@/pages";

import "@testing-library/jest-dom"
import {fireEvent,render ,screen} from "@testing-library/react"

describe("Calculator",()=>{
    it("renders calculator",()=>{
        render(<Home/>)
        expect(screen.getByTestId("result")).toBeInTheDocument()
        expect(screen.getByTestId("num1")).toBeInTheDocument()
        expect(screen.getByTestId("num2")).toBeInTheDocument()
        expect(screen.getByTestId("Add")).toBeInTheDocument()
        expect(screen.getByTestId("Subtract")).toBeInTheDocument()
        expect(screen.getByTestId("Multiply")).toBeInTheDocument()
        expect(screen.getByTestId("Divide")).toBeInTheDocument()
    })

    it("adds to number",()=>{
        render(<Home/>)
        const num1input =screen.getByTestId("num1")
        const num2input =screen.getByTestId("num2")
        const addbutton =screen.getByTestId("Add")
        const result =screen.getByTestId("result")


        fireEvent.change(num1input,{target:{value:5}})
        fireEvent.change(num2input,{target:{value:8}})
        fireEvent.click(addbutton)
        expect(result).toHaveTextContent("13")
    })
    it("Subtract to number",()=>{
        render(<Home/>)
        const num1input =screen.getByTestId("num1")
        const num2input =screen.getByTestId("num2")
        const addbutton =screen.getByTestId("Subtract")
        const result =screen.getByTestId("result")


        fireEvent.change(num1input,{target:{value:5}})
        fireEvent.change(num2input,{target:{value:8}})
        fireEvent.click(addbutton)
        expect(result).toHaveTextContent("-3")
    })
    it("Multiply to number",()=>{
        render(<Home/>)
        const num1input =screen.getByTestId("num1")
        const num2input =screen.getByTestId("num2")
        const addbutton =screen.getByTestId("Multiply")
        const result =screen.getByTestId("result")


        fireEvent.change(num1input,{target:{value:5}})
        fireEvent.change(num2input,{target:{value:8}})
        fireEvent.click(addbutton)
        expect(result).toHaveTextContent("40")
    })
    it("Divide to number",()=>{
        render(<Home/>)
        const num1input =screen.getByTestId("num1")
        const num2input =screen.getByTestId("num2")
        const addbutton =screen.getByTestId("Divide")
        const result =screen.getByTestId("result")


        fireEvent.change(num1input,{target:{value:8}})
        fireEvent.change(num2input,{target:{value:8}})
        fireEvent.click(addbutton)
        expect(result).toHaveTextContent("1")
    })






})