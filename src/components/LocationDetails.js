import React from "react";
import "./LocationDetails.css"

export class LocationDetails extends React.Component{
    constructor(props){
        super(props);
        this.objectList = this.objectList.bind(this)
    }
    objectList(){
        const details = this.props.details
        const detailsArray = []
        for (let detail in details) {
            detailsArray.push( (<li><p> <span>{detail}</span>: {details[detail]} </p></li>) ) 
        }
        console.dir(detailsArray)
        return detailsArray
    }
    
    render(){
        const locationDetails = this.objectList()
        
        return (
        <div className="col" id="detailsCard">
            <ul>
                { locationDetails }
            </ul>
        </div>)
    }
}