import React, {useState} from "react";
import axios from "axios";

const Home=()=>{
    const [input, setInput]=useState('');
    const [response, setResponse]=useState('');

    const handleGenerate=async()=>{
        try {
            const result:any = await axios.post('http://localhost:4001/generate',{input})
            console.log("Result", result)
            setResponse(result.data[0].generated_text)
        } catch (error) {
            console.log("Error in generate", error)
        }
    }


return(
    <div className="home-page">
        <h1>GenAi Collab Hub</h1>
        <textarea placeholder="Enter prompt here"
        value={input} onChange={(e)=>setInput(e.target.value)}></textarea>
        <button onClick={handleGenerate}>Generate</button>
        <div className="output">
            <h3>Generated Output:</h3>
            <p>{response}</p>

        </div>
    </div>

);
};
export default Home;