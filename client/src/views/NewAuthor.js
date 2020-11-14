import React, {useState} from 'react';

import axios from 'axios';
import {navigate} from '@reach/router';


export default function NewAuthor(){
    const [name, setName] = useState('')
    const [errors, setErrors] = useState(null)

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8000/api/authors', {
            name
            
        })
        .then(() => navigate('/'))
        .catch((err) => {
            // this catch happens because of the res.status(400) in the controller
            setErrors(err.response.data.errors);
            console.log(err.response);
          });



        

        



        
    }







          return (
            <div>
             <h1>New City</h1>
             <form onSubmit={handleSubmit}>
                 <div>
                     <label>Name:</label>
                     <input 
                         name="name"
                         value={name}
                         onChange={e => setName(e.target.value)}
                     />
    
                    {errors && (
                        <span style={{ color: "red" }}>
                        {/* ?. is called optional chaining, NEW feature in JS */}
                        {errors?.name?.properties?.message}
                        </span>
                    )}
                 </div>
                 
                 
                 
                 <button>Submit</button>
             </form>
             <button onClick={() => navigate('/')}>Cancel</button>
            </div>
          )

}