import React from 'react'
import { useCtxValue } from '../../../context/main'

const withMain = Component => (props:any) => {
    const [context, dispatch]: any = useCtxValue()

    const mainActions = {
        context, dispatch
    }

    return <Component {...props} {...mainActions} />
}

export default withMain