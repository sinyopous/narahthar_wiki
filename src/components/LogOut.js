import React from 'react'

export class Logout extends React.Component{
    constructor(props){
        super(props);
        this.logOut = this.logOut.bind(this)
    }

    logOut(){
        this.props.logOut()
    }
    render(){
        return <button type="button" className="btn btn-dark" onClick={this.logOut}>Log out</button>
    }
}