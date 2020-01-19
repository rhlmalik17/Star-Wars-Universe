import React, { Component } from 'react'
import Table from './Table'
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
       
    }
    render() {
        return (
            <div>
                <Table />
            </div>
        )
    }
}
