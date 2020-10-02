import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';
import NewBoxForm from './NewBoxForm'
import Box from './Box'

const BoxList = () => {
    const [boxList, setBoxList] = useState([]);

    // function (addBox) to pass down to newBoxForm
    // takes box data from child component, spreads data into newBox obj and adds unique id
    // then updates the state of all the boxes, spreading current into new array and adding the new box
    const addBox = box => {
        let newBox = {...box, id: uuid() }
        setBoxList(boxes => [...boxes, newBox]);
    }

    // function (dltBox) to pass down to Box children
    // takes an id to find the index of the box with that id in the list 
    // updates the state by spreading the boxes until it get to the removed box and then spreads the remaining list after removed box
    const dltBox = (boxToDlt) => {
        const idxToDlt = boxList.findIndex(box => box.id === boxToDlt);
        setBoxList(boxes => [...boxes.slice(0,idxToDlt),...boxes.slice(idxToDlt + 1) ])
    }

    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />
        <div className="boxContainer">
            {boxList.map(box => {
               return <Box dltBox={dltBox} color={box.color} width={box.width} height={box.height} id={box.id} key={box.id} />
                
            })}
        </div>
        </div>
    )
}

export default BoxList;