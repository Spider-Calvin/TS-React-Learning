type propstype = {
  heading:string,
  count :number,
  func1 : (a:string) => void
}

const Box = ({heading, count, func1 }:propstype) => {
  func1('hello baby');
  return (
    <>
      <div>{heading}</div>
      <h1>{count}</h1>
    </>
  )
}

export default Box