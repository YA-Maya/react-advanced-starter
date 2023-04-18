const ErrorExample = () => {
  let count = 0;
  const handClick = () => {
    count = count + 1;
    console.log(count);
  };
  return ( 
  <>
  <h2>useState error example</h2>
  <p>{count}</p>
  <button type="button" onClick={handClick} className="btn"> Increment the Count!</button>
  </>
  );
};


export default ErrorExample;
