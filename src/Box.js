import React, {useState} from 'react';

const Box = ({dltBox, color, width, height, id}) => {
    const styles = {
        backgroundColor : color,
        width: width,
        height: height
    }

    // evt handler to delete this box
    const handleDelete = evt => {
        dltBox(id);
    }

    return (
        <div className="Box" style={styles} id={id}>
            <span className="DeleteButton" onClick={handleDelete}>X</span>
        </div>
    )

}

export default Box;