import React,{Component} from 'react';
import {Link} from 'react-router-dom'
const b = require('../Backend/Backend');

const AddMember = b.AddMember;
const Member = b.Member;

export default class addMember extends Component{
    constructor(props){
        super(props); 
        this.state={
            id:0,
            name:"",
            email:"",
            mobile:"",
            committee:"",
        }; 
    }
    
    add = ()=>{
        var id = this.state.id;
        var name = this.state.name;
        var email = this.state.email;
        var mobile = this.state.mobile;
        var committee = this.state.committee;

        var member = new Member(id,name,email,mobile,committee) 
        let ok = AddMember(member);
        if(ok)alert("Added Succecfully");
        else alert("Their Is A Member With That ID");
    }
    changeID=(e)=>{
        this.setState({id:e.target.value});
    }
    changeName=(e)=>{
        this.setState({name:e.target.value});
    }
    changeEmail=(e)=>{
        this.setState({email:e.target.value});
    }
    changeMobile=(e)=>{
        this.setState({mobile:e.target.value});
    }
    changeCommittee=(e)=>{
        this.setState({committee:e.target.value});
    }
    
    render(){
        return(
            <div>
                <label className="label">ID</label>
                <input type="number" onChange={this.changeID}></input>
                <br/>
                <label className="label">Name</label>
                <input type="text" onChange={this.changeName}></input>
                <br/>
                <label className="label">Email</label>
                <input type="text" onChange={this.changeEmail}></input>
                <br/>
                <label className="label">Mobile</label>
                <input type="text" onChange={this.changeMobile}></input>
                <br/>
                <label className="label">Committee</label>
                <input type="text" onChange={this.changeCommittee}></input>
                <br/>
                <button onClick={this.add}>Add Member</button>
                <br/>
                <Link to="/">Home Page</Link>
                <br/>
                
            </div>
        );
    }
    
}