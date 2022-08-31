import { useState } from "react"
import Header from "./Components/Header"
import List from "./Components/List"
const App = () => {

    const [ feedback, setFeedback ] = useState([
        {
            id: 1,
            rating: 10,
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum"
        }, 

        {
            id: 2,
            rating: 8,
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum"
        }, 
        {
            id: 3,
            rating: 5,
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum"
        }
    ])
   
    return (
        <>
        <Header />
        <div>
            <List feedback={feedback} />
        </div>
        </>
    )
}

export default App;