type propstype = {
  heading:string,
  count :number,
  func1 : () => void
}

const Box = ({heading, count, func1 }:propstype) => {
  func1();
  return (
    <>
      <div>{heading}</div>
      <h1>{count}</h1>
    </>
  )
}

export default Box