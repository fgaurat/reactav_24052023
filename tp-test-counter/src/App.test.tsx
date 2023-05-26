import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'

import App from "./App"



test('if Vite + React in App',async ()=>{
    
    render(<App/>)

    expect(screen.getByText('Vite + React')).toBeInTheDocument()
})

test('if initial value==0 in App',async ()=>{
    render(<App/>)
    expect(screen.getByText('count is 0')).toBeInTheDocument()
})

test('increment value in App',async ()=>{
    //Act
    render(<App/>)
    
    //Arrange
    await userEvent.click(screen.getByText('count is 0'))
    
    //Assert
    expect(screen.getByText('count is 1')).toBeInTheDocument()
})