import React from 'react';

const Editor = (props) => {
        return (
            <div className="wrapper">
                <div className="top" id="editor-top">
                    <i className="fa fa-free-code-camp icon-left"></i>
                    Editor
                </div>
                <textarea id="editor" onChange={props.change} value={props.text}>

                </textarea>
            </div>
        )
    }


export default Editor;