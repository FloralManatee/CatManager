import React from 'react';

class test extends React.Component {
   
    constructor(props) {
        super(props);

        this.findCat = this.findCat.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
   
        this.state = {
            id: '',
            cat: [],
            DataFound: false,
            Searched: false
        };
    }

    findCat() {
        
        const catToFind = this.state.id;
        const URL = 'http://127.0.0.1:8000/cats/' + catToFind;
        try{
            fetch(URL)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    cat: json,
                    DataFound: true
                });
            })
        } catch(e) {
             console.error(e); 
            }
        
    }

    handleChange(event) {
        this.setState({
            id: event.target.value,
            DataFound: false
        });
    }

    handleSubmit(event) {
        this.findCat();
        event.preventDefault();
    }

    render() {
        if (this.state.DataFound && this.state.cat != undefined) {
            return <div>
            <h1> Find a Cat: </h1>
            <form onSubmit={this.handleSubmit}>
                <label>
                    ID:
                    <input type="text" onChange={this.handleChange} /> 
                </label>
                <input type="submit" value="Search" />
            </form>
            <br />
            <h1> Found Cat: </h1>
                <ol key = { this.state.cat.cat_id }>
                id: { this.state.cat.cat_id },
                name: { this.state.cat.cat_name }, 
                breed: { this.state.cat.cat_breed }
                </ol>
        </div>
        } else {
            return <div>
            <h1> Find a Cat: </h1>
            <form onSubmit={this.handleSubmit}>
                <label>
                    ID:
                    <input type="text" onChange={this.handleChange} /> 
                </label>
                <input type="submit" value="Search" />
            </form>
            <br />
            <h1>Cat not found</h1>
        </div>
        }
    }
}

export default cat;