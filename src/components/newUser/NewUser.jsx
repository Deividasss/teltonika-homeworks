import "../newUser/NewUser.scss"
import { useState, useEffect, useRef } from "react"
import React from "react"
import { Alert } from "react-bootstrap"



const NewUser = () => {

    const [messages, setMessages] = useState({ message: '', status: '' })
    const [term, setTerm] = useState({
        'FirstName': '',
        'LastName': '',
        'El-Address': '',
        'Password': '',
        'Age': '',
        'Gender': '',
        'Category': '',
    })

    const handleChange = (e) => {
        setTerm({
            ...term,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setMessages({ message: 'User successfully created', status: 'primary' })
        console.log(term)
    }

    return (
        <>
            <div className="addNewUser">
                <h2>----------Add New User----------</h2>
                <form onSubmit={submitHandler}>
                    <Alert variant={messages.status}>{messages.message}</Alert>
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <input
                                    type="text"
                                    name="FirstName"
                                    class="form-control"
                                    placeholder="First name"
                                    required
                                    onChange={handleChange} />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <input
                                    type="text"
                                    name="LastName"
                                    class="form-control"
                                    placeholder="Last name"
                                    required
                                    onChange={handleChange} />
                            </div>
                        </div>
                    </div>

                    <div className="form-outline mb-4">
                        <input
                            type="email"
                            name="El-Address"
                            class="form-control"
                            placeholder="Email address"
                            required
                            onChange={handleChange} />
                    </div>

                    <div className="form-outline mb-4">
                        <input
                            type="password"
                            name="Password"
                            class="form-control"
                            placeholder="Password"
                            required
                            onChange={handleChange} />
                    </div>
                    <div className="form-outline mb-4">
                        <input
                            type="number"
                            name="Age"
                            class="form-control"
                            placeholder="Your age"
                            required
                            onChange={handleChange} />
                    </div>
                    <div className="form-outline mb-4">
                        <select
                            className="form-control"
                            name="Gender"
                            required
                            onChange={handleChange}>
                            <option value="">Select Gender...</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="form-outline mb-4">
                        <select
                            className="form-control"
                            name="Category"
                            required
                            onChange={handleChange}>
                            <option value="">Select Category...</option>
                            <option>Cars</option>
                            <option>Bouts</option>
                            <option>Planes</option>
                        </select>
                    </div>
                    <button type="submit" className="newUserBtn">Add New User</button>
                </form>
            </div>
        </>
    )
}

export default NewUser