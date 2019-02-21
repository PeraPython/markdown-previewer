import React, { Component } from 'react';
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import PLACEHOLDER from "./Placeholder";

class Previewer extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: PLACEHOLDER
        }
    }

    handleChange(e){
        this.setState({text: e.target.value })
    }

    render(){
        return(
            <div className="container">
                <Editor change={this.handleChange.bind(this)} text={this.state.text}/>
                <Preview text={this.state.text}/>
            </div>
        )
    }
}

export default Previewer;