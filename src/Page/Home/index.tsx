import React, { useState } from "react";
import './index.css'
import { Link } from 'react-router-dom'

const Home: React.FC<{}> = () => {

  const [count, setCount] = useState('hello word');

  return (
    <div>
      <div className='title'>{count}</div>
      <button onClick={()=>{setCount('hello react')}}>点击</button>
      <span>2-1</span>
      <span>1-2</span>
      <span>1-3</span>
      <span>1-4</span>
      <Link to='/list'>to list</Link>

    </div>
  )
}

export default Home;