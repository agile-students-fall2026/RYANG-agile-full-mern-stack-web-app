import { Link } from 'react-router-dom'
import './Home.css'
import { useEffect, useState } from 'react'

//---ASSIGNMENT CODE----

/**
 * A React component that represents the About Us page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
    //use hooks to load in data async
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(import.meta.env.VITE_SERVER_HOSTNAME + '/api/about')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.error(err))
    }, [])

    return (
    <>
        <h1>This is the about page</h1>
        {data ? (
            <>
                <h3>{data.name}</h3>
                {data.paragraphs.map((paragraph, _) => (
                    <p>{paragraph}</p>
                ))}
                <img src={data.image} alt="About Us" style={{ maxWidth: '30%', height: 'auto' }} />
            </>
        ) : (
            <p>Loading...</p>
        )}
    </>
    )
}

// make this component available to be imported into any other file
export default AboutUs
