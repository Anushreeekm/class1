// library import
import React from 'react'
import Button from './component/Button'
import Ex1 from './component/Ex1'
import Ex2 from './component/Ex2'
import Ex3 from './component/Ex3'
import Ex4 from './component/Ex4'
import Ex5 from './component/Ex5'
import Ex6 from './component/Ex6'
import Ex7 from './component/Ex7'

//component body -> functional, const arrow, const functional,(first 3 are ECMA script 5 constructor) and class (ES 6 constructor)
function App(props) {
  return (
    <div>
    {/* <h1>JSX Part of the React</h1>
      <button>Click Me</button>
      <hr/>
      <Button fname={'Submit'}/>
      <Button fname={'Login'} />
      <Button fname={'Register'}/>
      <Button fname={'Contact Me'} />
      <hr/>
      <Ex1/>
      <Ex2/>
      <Ex3/>
      <Ex4/>
      <Ex5/>
      <Ex6/>*/}
      <Ex7 />
    </div>
  )
}

//default exports
export default App