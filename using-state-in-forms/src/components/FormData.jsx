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
        <div className="form-container">
            <form className="form">
                <h2>Form Submission</h2>
            <div id="name">
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange} />
                </label>     
            </div>
            <div id="email">
                <label>
                    Email:
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange} />
                </label>
            </div>
            <div id="feedback">
                <label>
                    Feedback:
                    <textarea
                        type="textarea"
                        name="feedback"
                        value={formData.feedback}
                        onChange={handleChange} />
                </label>
            </div>
            </form>
            <div className="preview">
                <h2>Preview of Entry</h2>
                <p>Name: {formData.name}</p>
                <p>Email: {formData.email}</p>
                <p>FeedBack: {formData.feedback}</p>
            </div>
        </div>
    )
}

export default FormData;