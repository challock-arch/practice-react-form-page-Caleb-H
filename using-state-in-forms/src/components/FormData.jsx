import { useState } from "react";

function FormData() {

    const [formData, setData] = useState({
        name: "",
        email: "",
        feedback: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Updating ${name}`, value);
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    return (
        <>
        <div className="container">
            <form className="form">
                <h2>Form Submission</h2>
                <p>
                    <label htmlFor="name"> Name: </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange} 
                    />
                </p>
                <p>
                    <label htmlFor="email"> Email: </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange} 
                    />
                </p>
                <p>
                    <label>
                        Feedback:
                    </label>
                    <textarea
                        type="textarea"
                        name="feedback"
                        value={formData.feedback}
                        onChange={handleChange} 
                    />
                </p>
                <button type="submit">Submit</button>
            </form>
        </div>
            <div className="container">
                <h2>Preview of Entry</h2>
                <h3 className="preview">Name: {formData.name}</h3>
                <h3 className="preview">Email: {formData.email}</h3>
                <h3 className="preview">FeedBack: {formData.feedback}</h3>
            </div>
        </>
    )
}

export default FormData;