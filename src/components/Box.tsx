import { ReactNode } from "react";

type propstype = {
  heading:string,
  count ?:number,
  children :ReactNode
}

const Box = ({heading, count, children }:propstype) => {
  return (
    <>
      <div>{heading}</div>
      {count && <h1>{count}</h1> }
      {children}
    </>
  )
}

export default Box