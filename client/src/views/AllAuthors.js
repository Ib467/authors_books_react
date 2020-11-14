import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';


export default function AllAuthors(){
    const [authors, setAuthors] = useState(null)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then(response => setAuthors(response.data))
        .catch(() => setHasError(true))
    }, [])


    function handleDelete(id){
        axios.delete('http://localhost:8000/api/authors/' + id)
        .then(() => setAuthors(authors.filter(author => author._id != id)))
    }

    if(hasError) return 'something went wrong!';

    if (authors == null) return "Loading...";


    return (
        <div>
            <h1>All Authors</h1>
            <Link to={'/new'}>Add an author</Link>

            <h3>We have quotes by:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {authors.map(author => ( 

                    <tr key={author._id}>
                        <td><Link to={'/authors/' + author._id }>{author.name}</Link></td>
                        
                        <td>
                            <button onClick={() => handleDelete(author._id)}>Delete</button>{' '}
                            <button onClick={() => navigate('/edit/' + author._id)}>Edit</button>
                        </td>
                    </tr>

                ))}
                </tbody>
            </table>
        </div>
    )
}