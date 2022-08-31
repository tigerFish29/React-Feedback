
const FeedbackItem = ({item}) => {
    
    return (
        <div style={{
            maxWidth: "500px",
            backgroundColor: "#ec5990",
            borderRadius: "4px", 
            height: "200px",
            fontFamily: "monospace",
            fontWeight: "200",
            textAlign: "center"

        
        }}className="card">
            <div className="num-display">
               <h1>{item.rating}</h1>
            </div>
             <div>
                 <p>{item.text}</p>
             </div>
         
        </div>
    )
}


export default FeedbackItem;