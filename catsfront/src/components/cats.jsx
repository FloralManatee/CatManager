import React, {useState,useEffect} from 'react';

function CatDisplay(props) {
    const initialData = {cats: []};
    const [state, setState] = useState(initialData);

    useEffect(() => {
        fetchCats().then(data => setState(data));
    }, []);

    async function fetchCats() {
        const response = await fetch('http://127.0.0.1:8000/cats');
        const data = await response.json();
        return data;
    }

    // https://www.youtube.com/watch?v=tX0h1PQgWPw @ 21 minutes

    return (
        <div>
            Cats
        </div>
    )
    
}

export default CatDisplay;