import React,{Component} from 'react';
import {Link} from 'react-router-dom'
const b = require('../Backend/Backend');

const Members = b.Members;

export default class getMembers extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>{Members.length}</h1>
                {
                    Members.map((m)=>(
                        <p>Name: {m.name}</p>
                    ))
                }
                <br/>
                <Link to="/">Home Page</Link>
                <br/>
            </div>
        );
    }
}
