/* eslint-disable jsx-a11y/anchor-is-valid */

//--------------works well-----------------

// import axios from 'axios';
// import './styles.css';
// import { useState } from 'react';
// function ChatContainer() {
//   const [prompt, setPrompt] = useState('');
//   // const prompt = '';
//   // const [openaiPrompt, setOpenaiPrompt] = useState('');
//   const [response, setResponse] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
    
//     // communicate with API
//     // post input value 'prompt' to API end point 
//     axios
//       .post("http://localhost:3001/api/generateLinks",  {prompt} )
//       .then((res) => {
//         setResponse(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
    
//   };

//   return (
//     <div className="wrapper">
 
//       <form onSubmit={handleSubmit}>
     
//         <input
//           type="text"
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           placeholder="Ask anything... :)"
//         />
//         <button type="submit">Ask</button>
//       </form>
//       <p className="response-area">
//         {loading ? 'loading...' :response}
//       </p>
   
// </div>
//   );
// }

// export default ChatContainer;


import axios from 'axios';
import './styles.css';
import { useState } from 'react';

function ChatContainer() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post('http://localhost:3001/api/generateLinks', { prompt })
      .then((res) => {
        setResponse(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Search your career interests...."
        />
        <button type="submit">Search</button>
      </form>
      <p className="response-area">
  {loading ? 'loading...' : (
    <ol>
      {response.map((video, index) => (
        <li key={index}>
          <div style={{ display: "flex" }}>
            <img src={video.thumbnail} className = 'pb-6 h-200 w-300' alt={video.title} style={{ marginRight: "1rem" }} />
            <div>
              <a className='text-white text-left font-bold text-2xl' href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noopener noreferrer">{video.title}</a>
            </div>
          </div>
        </li>
      ))}
    </ol>
  )}
</p>

    </div>
  );
}

export default ChatContainer;

