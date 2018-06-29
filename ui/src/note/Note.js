import React, { Component } from 'react';
import './Note.css';

class Note extends Component {
    
    render() {
        return (
            <section className="note" data-id={this.props.id}>
                <h3 className="note-title">{this.props.title}</h3>
                <p className="note-description">{this.props.children}</p>
            </section>
        );
    }
}

export default Note;

