"use strict";
class Member{
    constructor(id, name, email, mobile, committee) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.committee = committee;
    }
}

    let Members = [];
    module.exports.checkvalidality = (members, id, mx)=> {
        let counter = 0;
        members.forEach(function (i) {
            if (i.id == id)
                counter++;
        });
        if (counter > mx)
            return 0;
        return 1;
    }
    

    function AddMember (member){
        let ok = true;
        Members.find(function (x) {
            if (x.id == member.id) {
                ok = false;
                return;
            }
        });
        if(ok){
            Members.push(member);
        }
        return ok;
    }

    const GetMember = (id)=>{
        let ok = false;
        let res = new Member();
        this.Members.find(function (x) {
            if (x.id == id) {
                res=x;
                ok = true;
                return;
            }
        });
        if(!ok)alert("Their Is No Member With That ID ");
        return res; 
    }

module.exports.Member = Member;
module.exports.Members = Members;
module.exports.AddMember = AddMember;
module.exports.GetMember = GetMember;
