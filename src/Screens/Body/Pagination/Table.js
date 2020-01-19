import React, { Component } from 'react'
import './Table.css';
export default class Table extends Component {
    constructor()
    {
        super();
        this.componentDidMount=this.componentDidMount.bind(this);
        this.state={
          isLoading: true,
          worlds: ['','','','','','','','','','','','','','']
        }
        
    }
    async componentDidMount()
    {
        console.log();
        let count=0;
        await this.props.data.map(async (object,i)=>{
    
             await fetch(object.homeworld)
            .then((response)=> response.json())
            .then((response)=>{
                this.state.worlds[i]=response.name;
                count++;
                if(count===this.props.data.length)
                {
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
                    <table>
                        <tbody>
                        <tr>
                            <th>SNo.</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Height</th>
                            <th>Home World</th>
                            <th>Birth Year</th>
                        </tr>
                        </tbody>
                        {
                            this.props.data.map((person, i)=>{
                                index++;
                                
                                return (
                                    <tbody key={i} >
                                    <tr>
                                        <td>{index+1+". "}</td>
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
