import React from 'react';
import marked from 'marked';


const Preview = (props) => {
    marked.setOptions({
        breaks: true,
    })
    const renderer = new marked.Renderer();
    renderer.link = function(href, title, text){
        return `<a target="_blank" href="${href}">${text}</a>`;
    }
    return(
        <div className="wrapper">
            <div className="top" id="preview-top">
                <i className="fa fa-free-code-camp icon-left"></i>
                Preview
            </div>
            <div id='preview' dangerouslySetInnerHTML = {{__html: marked(props.text, { sanitaze:true })}}></div>
        </div>
    )
}

export default Preview;