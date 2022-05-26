import React from 'react'
import { useSearchParams } from 'react-router-dom' ; 
{/*어레이 반환해줌 */}

const Product = () => {
    let [query,setQuery] = useSearchParams();
    console.log("ddd", query.gey("page")); {/* 쿼리값 가져오는 문법 */}
  return (
    <div>
        <h1>Show All products</h1>
        </div>
  )
}

export default Product