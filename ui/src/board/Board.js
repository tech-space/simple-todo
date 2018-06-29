import React, { Component } from 'react';
import Note from '../note/Note';
import './Board.css';

class Board extends Component {

    constructor(props) {
        super(props);

        this.notes = [{
            id: 1,
            title: 'Title 1',
            description: 'Desc 1'
        }, {
            id: 2,
            title: 'Title 2',
            description: 'Desc 2'
        }, {
            id: 3,
            title: 'Title 3',
            description: 'Desc 3'
        }];

        this.renderNote = this.renderNote.bind(this);
    }

    renderNote(note, index) {
        return (
            <Note key={index} id={note.id} title={note.title}>{note.description}</Note>
        );
    }

    render() {
        return (
            <section className="board">
                {this.notes.map(this.renderNote)}
            </section>
        );
    }

}

export default Board;
