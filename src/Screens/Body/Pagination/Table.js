import React, { Component } from 'react'
import './Table.css';
export default class Table extends Component {
    constructor()
    {
        super();
        this.componentDidMount=this.componentDidMount.bind(this);
        this.state={
          isLoading: true,
          people: [],
          worlds: ['','','','','','','','','','','','','','']
        }
    }
    async componentDidMount()
    {
       await fetch("https://swapi.co/api/people/?page=1")
                    .then(function(response){
                        return response.json();
                    }).then((response)=>{
                      this.setState({ people: response.results })
                    })
                    .catch((error)=>{
                        console.log(error);
                    });
        let count=0;
        await this.state.people.map(async (object,i)=>{
    
             await fetch(object.homeworld)
            .then((response)=> response.json())
            .then((response)=>{
                this.state.worlds[i]=response.name;
                count++;
                if(count===this.state.people.length)
                {
                    console.log(this.state.people.length);
                    this.setState({ isLoading: false});
                }
                
            })
        })
    }
    
    render() { 
        let index=-1;
         if(!this.state.isLoading)
            return (
                
                <div className="schema">
                    <table border={1} style={{ borderColor: 'white' }} cellSpacing={20}>
                        <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Height</th>
                            <th>Home World</th>
                            <th>Birth Year</th>
                        </tr>
                        </tbody>
                        {
                            this.state.people.map((person, i)=>{
                                index++;
                                return (
                                    <tbody key={i} >
                                    <tr>
                                        <td>{person.name}</td>
                                        <td>{person.gender}</td>
                                        <td>{person.height}</td>
                                        <td>{ this.state.worlds[index]}</td>
                                        <td>{person.birth_year}</td>
                                    </tr>
                                    </tbody>
                                )
                            })
                        }
                    </table>
                </div>
            )
            else
            {
                return <div></div>
            }
        }
       
    
}
