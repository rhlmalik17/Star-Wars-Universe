import React, { Component } from 'react'
import Pagination from './Pagination/Pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import './Body.css'



export default class Body extends Component {
    constructor()
    {
        super();
        this.decrementIndex=this.decrementIndex.bind(this);
        this.changeRenderingState=this.changeRenderingState.bind(this);
        this.state={
            index: 0,
            isLoading: true,
            coordinates: [ '-5%','-105%','-205%','-305%','-397%','-494%','-584%','-679%','-775%' ]
        }
    }
    decrementIndex=()=>{
        
        let i=this.state.index;
        if(i===0)
        i=8;
        else
        i=i-1;
        this.setState({ index: i});
    }
    incrementIndex=()=>{
        let i=this.state.index;
        if(i===8)
        i=0;
        else
        i=i+1;
        this.setState({ index: i});
    }
    ArrowRight=()=> {
    return (
        <div className={'Arrows'} id="right" onClick={()=> this.incrementIndex()}>
            <FontAwesomeIcon icon={faChevronRight} size="2x" className={'small'}/>
            <FontAwesomeIcon icon={faChevronRight} size="5x" className={'large'}/>
        </div>
            );
        }
    ArrowLeft=()=>{
            return (
                <div className={'Arrows'} id="left" onClick={()=> this.decrementIndex()}>
                   <FontAwesomeIcon icon={faChevronLeft} size="5x" className={'large'}/>
                   <FontAwesomeIcon icon={faChevronLeft} size="2x" className={'small'}/>
                </div>
            )
        
        }
        changeRenderingState=(flag)=>{
            
            if(flag){
                this.setState({ isLoading: false })
                alert('Invoked');
            }
            
        }
    render() {

        return (
            <div>
               {/* {
                   (this.state.isLoading) ? <div>LOADING...</div> : <div className={'Parent'}>
                <this.ArrowLeft />
                <Pagination offset={this.state.coordinates[this.state.index]} setRendering={()=> this.changeRenderingState}/>
                <this.ArrowRight />
            </div>
               }  */}
               <div className={'Parent'}>
                <this.ArrowLeft />
                <Pagination offset={this.state.coordinates[this.state.index]} setRendering={()=> this.changeRenderingState}/>
                <this.ArrowRight />
            </div>
            <div>

            </div>
            </div>
            
        )
       
    }
}
