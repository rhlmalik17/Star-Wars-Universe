import React, { Component } from 'react'
import Table from './Table'
import './Pagination.css'
export default class Pagination extends Component {
    constructor()
    {
        super();
        this.componentDidMount=this.componentDidMount.bind(this);
        this.state={
          isLoading: true,
          tables: [],
        }
    }
    async componentDidMount()
    {
        var link;
        var self=this;
       for(var i=1;i<10;i++)
       {
           let index=i-1;
           if(i===1)
           link="https://swapi.co/api/people/";
           else
           link="https://swapi.co/api/people/?page="+i;

           await fetch(link)
                .then((response)=> response.json())
                .then((response)=>{
                    self.state.tables[index]=response.results;
                }).catch((error)=>{
                    console.log(error.message);
                })
                if(i===9)
                {
                    self.setState({ isLoading: false });
                }
       }
    }
    render() {
        if(!this.state.isLoading)
        {
         return (
            
            <div className={'Pallete'}>
            <div className={'Pagination'} style={{ transform: 'translateX('+this.props.offset+')', }}>
                {
                    this.state.tables.map((table,i)=>{
                        return (
                            <Table data={table} key={i}/>
                        )
                    })    
                }
            </div>   
            </div>
        )   
        }
        else
        {
            return <div></div>
        }
    }
}
