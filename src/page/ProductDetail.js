import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {

    const {id} = useParams(); {/* useParams = 객체 반환, Id값 가져올수있어서 보여주고싶은거 보여줄수있음 */}
  return (
    <div>
        <h1>Show Product Detail{id}</h1>

        </div>
  )
}

export default ProductDetail