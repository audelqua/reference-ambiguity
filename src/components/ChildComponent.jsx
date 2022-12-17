import React, { useState, useEffect } from 'react'

const ChildComponent = ({targetObject, text}) => {
    console.log('targetObject', targetObject);
    const [state, setState] = useState(targetObject)
    // console.log('state', state);
    console.log('re-rendered', state);

    // useEffect(() => {
    //     setState(targetObject)
    // }, [targetObject])
    return (
        <div>
            <span>______{text}_______</span>
        </div>
    )
}

export default ChildComponent