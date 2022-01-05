import React from 'react';

class cats extends React.Component {
   
    constructor(props) {
        super(props);
   
        this.state = {
            cats: [],
            DataisLoaded: false
        };
    }
   

    componentDidMount() {
        fetch('http://127.0.0.1:8000/cats')
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    cats: json,
                    DataisLoaded: true
                });
            })
    }

    render() {
        const { DataisLoaded, cats } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Getting cats... </h1> </div> ;
   
        return (
        <div>
            <h1> Registered cats: </h1>  {
                cats.map((cat) => {
                    if (cat.adopted) {
                        return <ol key = { cat.cat_id } style = {{display: "flex"}}>
                            <div style = {{textDecoration: "line-through"}}>
                                id: { cat.cat_id },
                                name: { cat.cat_name }, 
                                breed: { cat.cat_breed }    
                            </div>
                            <div>
                                &emsp;ADOPTED
                            </div>
                        </ol>
                    } else {
                        return <ol key = { cat.cat_id }>
                        id: { cat.cat_id },
                        name: { cat.cat_name }, 
                        breed: { cat.cat_breed }
                        </ol>
                    }
                    
                })
            }
        </div>
    );}
}

export default cats;