import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';


export default function EditAuthor({id}){
    const [name, setName] = useState('')
    const [errors, setErrors] = useState(null);
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
        .then(response => {
            setName(response.data.name)
            

            setIsLoading(false)


        });
    }, [id])


    function handleSubmit(event) {
        event.preventDefault();
        axios.put('http://localhost:8000/api/authors/' + id, {
            name
           
        })
        .then(() => navigate('/'))
        .catch((err) => {
            // this catch happens because of the res.status(400) in the controller
            setErrors(err.response.data.errors);
            console.log(err.response);
          });
    }


    if (isLoading) return 'Loading...';


    return (
        <div>
        <h1>Editing</h1>
        <form onSubmit={handleSubmit}>
             <div>
                 <label>Name</label>
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
        
        </div>
    )







}