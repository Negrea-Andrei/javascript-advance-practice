//*Basic fetch in React

//?Reading about basic fetch using .then()

//!Handling errors

/*example*/
import { useEffect, useState } from "react";

const Image = () => {
  const [imageURL, setImageURL] = useState(null);
  /*need to add a state for the error */
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setImageURL(response[0].url))
      .catch((error) => setError(error));
  }, []);

  if (error) return <p>A network error was encountered</p>

  return (
    imageURL && (
      <>
        <h1>An image</h1>
        <img src={imageURL} alt={"placeholder text"} />
      </>
    )
  );
}

export default Image;

//*My birthday was today. Took a break. Will resume tomorrow.
//*Check loading rendering

/*Add a state for loading const [loading, setLoading] = useState(true)
At the end of the async code add .finally(() => setLoading(false))
Add condition if(error) return <p>Error</p>
              if(loading) return <p>Loading</p>*/

//*Custom hooks
/*separate out the fetching logic altogether into a custom hook. This will allow us to make the logic reusable and easily testable*/
import { useState, useEffect } from "react";

const useImageURL = () => {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setImageURL(response[0].url))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { imageURL, error, loading };
};

const Images = () => {
  const { imageURL, error, loading } = useImageURL();

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h1>An image</h1>
      <img src={imageURL} alt={"placeholder text"} />
    </>
  );
};