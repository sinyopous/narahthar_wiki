import React from "react";

export class LocationDetails extends React.Component{
    constructor(props){
        super(props);
        this.objectList = this.objectList.bind(this)
    }
    objectList(){
        const details = this.props.details
        const detailsArray = []
        for (let detail in details) {
            detailsArray.push( (<li><p> {details[detail]} </p></li>) ) 
        }
        console.dir(detailsArray)
        return detailsArray
    }
    
    render(){
        const locationDetails = this.objectList()
        
        return (
        <div>
            <ul>
                <li>
            <p onClick={this.objectList}>hola</p>
                </li>
                { locationDetails }
            </ul>
        </div>)
    }
}