import moment from 'moment'
import React from 'react'
import { useSelector } from 'react-redux'
import { isEmpty, isLoaded, useFirestoreConnect } from 'react-redux-firebase'

const NoteDetail = (props) => {
    
    const id = props.match.params.id
    useFirestoreConnect([{collection: 'notes', doc: id}])
    const note = useSelector(({firestore: {data}}) => data.notes && data.notes[id])

    const noteMarkup = !isLoaded(note) ? (
        <div className="container section">
            <div className="card z-depth-0 dark-card borer-box-shadow white-text">
                <div className="card-content">
                    <span className="card-title">Loading...</span>
                    <p>{note?.content}</p>
                </div>
                <div className="card-action grey ligten-4">
                </div>
            </div>
        </div>
    ) : isEmpty(note) ? (
        <div className="container section">
            <div className="card z-depth-0 dark-card borer-box-shadow white-text">
                <div className="card-content">
                    <span className="card-title">The note content is empty</span>
                </div>
                <div className="card-action grey ligten-4">
                </div>
            </div>
        </div>
    ) : (
        <div className="container section">
            <div className="card z-depth-0 dark-card borer-box-shadow white-text">
                <div className="card-content">
                    <span className="card-title">{note.title}</span>
                    <p>{note.content}</p>
                </div>
                <div className="card-action grey ligten-4">
                    <div>{moment(note.createdAt.toDate()).calendar()}</div>
                </div>
            </div>
        </div>
    )

    return noteMarkup
}

export default NoteDetail
