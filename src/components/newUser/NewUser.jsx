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
        setMessages({ message: 'User successfully created', status: 'success' })
        console.log(term)
    }

    return (
        <>
            <div className="addNewUser">
                <div class="card">
                    <div class="card_part card_part-one">
                        <img src="https://teltonika-iot-group.com/images/branches/iot-white.svg" alt="foto" />
                    </div>
                    <div class="card_part card_part-two">
                        <img src="https://teltonika-iot-group.com/images/branches/iot-white.svg" alt="foto" />
                    </div>
                    <div class="card_part card_part-three">
                        <img src="https://teltonika-iot-group.com/images/branches/iot-white.svg" alt="foto" />
                    </div>
                    <div class="card_part card_part-four">
                        <img src="https://teltonika-iot-group.com/images/branches/iot-white.svg" alt="foto" />
                    </div>
                </div>
                <h2>----------Register New User----------</h2>
                <h4><span>Here you can register new user and start to use our premium sevices</span></h4>
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
                            <option value="">Select Country...</option>
                            <option>Lithuania</option>
                            <option>Poland</option>
                            <option>Estonia</option>
                        </select>
                    </div>
                    <button type="submit" className="newUserBtn">REGISTER</button>
                </form>
            </div>
        </>
    )
}

export default NewUser