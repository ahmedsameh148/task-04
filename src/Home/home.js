import React,{Component} from 'react';
import {Link} from 'react-router-dom'

export default class  Home extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Link to="/addMember">Add Member</Link>
                <br/>
                <Link to="/getMember">Get Member</Link>
                <br/>
                <Link to="/getMembers">Get Members</Link>
            </div>
        );
    }
}