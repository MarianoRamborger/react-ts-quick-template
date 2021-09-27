import React from 'react'
import withMain from './components/withMain'

const Main = ({
    context, dispatch
}) => {
    return (
        <>
             <h1>{context.testString}</h1>

             <button onClick={()=> {
                 dispatch({type: 'changeString', value : 'aaa'})
             }} > Change text </button>
        </>
       
    )
}

export default withMain(Main)