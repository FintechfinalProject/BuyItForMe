import React from 'react'
import { Navigate } from 'react-router-dom'
import ProductUpload from '../pages/ProductUpload'

const PrivateRoute = ({authenticate}) => {
  return (
    authenticate === true? <ProductUpload/>:<Navigate to ="/login"/>
  )
}

export default PrivateRoute