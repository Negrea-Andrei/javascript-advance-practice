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
            .then((response) => response.json())
            .then((response) => setImageURL(response[0].url))
            .catch((error) => console.error(error));
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