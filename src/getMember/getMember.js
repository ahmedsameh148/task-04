import React,{Component} from 'react';
import {Link} from 'react-router-dom'
const b = require('../Backend/Backend');

const GetMember = b.GetMember;
const Member = b.Member;

export default class getMember extends Component{
    constructor(props){
        super(props); 
        const m = new Member();
        this.state={
            Member:m
        }
    }
    get = ()=>{
        var id = this.state.id;
        var member = GetMember(id);
        this.setState({Member:member});
    }
    changeID=(e)=>{
        this.setState({id:e.target.value});
    }
    render(){
        return(
            <div className='Display'>
                <label>ID     </label>
                <input id="id" type="number" onChange={this.changeID}></input>
                <br/>
                <button onClick={this.get}>Get Member</button>
                <br/>
                <p>
                    {
                        this.state.Member.name
                    }
                </p>
                <br/>
                <Link to="/">Home Page</Link>
                <br/>
            </div>
        );
    }
}