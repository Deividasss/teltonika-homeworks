import "../mainPage/MainPage.scss"
import { FaMapMarkerAlt, FaPhoneAlt, FaMailBulk, FaClock } from 'react-icons/fa';
import { useState } from "react";
import { Alert } from "react-bootstrap";

const MainPage = () => {

    const [messages, setMessages] = useState({ message: '', status: '' })
    const [sendMessagess, setSendMessagess] = useState({
        'FirstName': '',
        'LastName': '',
        'Subject': '',
        'YourMessage': '',

    })

    const handleChange = (e) => {
        setSendMessagess({
            ...sendMessagess,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setMessages({ message: 'Your messagess successfully sent', status: 'success' })
        console.log(sendMessagess)
    }
    return (
        <>
            <div>
                <header className="mainHeader">
                    <div className="headerInfo">
                        <h1>HI,  WE'RE <br />ULTRA <br />MODERN <br />COMPANY</h1>
                        <img className="headerImg" src="https://teltonika-iot-group.com/images/branches/iot-white.svg" alt="foto" />
                        <h2>We want our customers <br /> to be happy</h2>
                        <p>Every customer is important to us, so we ensure that our services meet their requirements. <br />
                            We provide our services throughout Europe and work with some of the largest companies.</p>
                    </div>
                </header>
                <div class="section1">
                    <div class="header_about_us">
                        <h2>ABOUT US</h2>
                        <h3><span> WHO WE ARE</span></h3>
                    </div>
                    <img className="section1Img" src="http://christinemakellams.com/wp-content/uploads/2016/10/Happy-woman-Fotolia_12331389_Subscription_XXL-982x842.jpg" alt="foto" />
                    <p class="paragraph1">We are Teltonika IoT Group, the company group that develops exceptional Internet of Things solutions for the global market. More than 16 million IoT devices, designed in our Lithuanian offices and manufactured in our modern production facilities, are already connected to the Internet. <br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sunt assumenda quis. Quibusdam, illo! Blanditiis rem natus alias quos. Vel, totam. Consectetur assumenda earum reiciendis ullam reprehenderit, libero architecto ratione! <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quas molestias nisi accusamus hic dolores, aliquid voluptatibus vel eligendi? Quas suscipit tempore expedita? <br></br> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, laboriosam. Incidunt earum, excepturi obcaecati accusantium placeat</p>
                </div>
                <div className="someFacts">
                    <div class="header_facts">
                        <h2>SOME FACTS ABOUT US</h2>
                        <h3><span>WE ARE PROUD OF THESE NUMBERS</span></h3>
                    </div>
                    <div class="numbers">
                        <div class="section6_colums">
                            <h3 class="number">1123</h3>
                            <p class="projects">PROJECTS</p>
                        </div>
                        <div class="section6_colums">
                            <h3 class="number">1540</h3>
                            <p class="projects">CLIENTS</p>
                        </div>
                        <div class="section6_colums">
                            <h3 class="number">280</h3>
                            <p class="projects">CUP OF COFFEE</p>
                        </div>
                        <div class="section6_colums">
                            <h3 class="number">359494</h3>
                            <p class="projects">FOLLOWERS</p>
                        </div>
                    </div>
                </div>
            </div >
            <div class="section3">
                <div class="header_address">
                    <h2>OUR ADDRESS</h2>
                    <h3><span>WHERE YOU CAN FIND US</span></h3>
                </div>
                <div class="section3_columns">
                    <div class="section3_column">
                        <i><FaMapMarkerAlt /></i>
                        <h3>OFFICE LOCATION</h3>
                        <p>FAKE ADDRESS Vilnius, Lithuania</p>
                    </div>
                    <div class="section3_column">
                        <i><FaPhoneAlt /></i>
                        <h3>CALL US</h3>
                        <p>FAKE NR 1-234-567-890</p>
                    </div>
                    <div class="section3_column">
                        <i><FaMailBulk /></i>
                        <h3>EMAIL ADDRESS</h3>
                        <p><span>FAKE GMAIL info@gmail.com</span></p>
                    </div>
                    <div class="section3_column">
                        <i><FaClock /></i>
                        <h3>WORKING HOURS</h3>
                        <p>FAKE DATE Monday - Friday 9:00 - 21:00</p>
                    </div>
                </div>
            </div>
            <div class="section4">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d73784.14780578531!2d25.247743999999997!3d54.696345599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1slt!2slt!4v1654194496988!5m2!1slt!2slt" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="section5">
                <h2>GET IN TOUCH!</h2>
                <h3><span>SEND US A MESSAGE</span></h3>
                <form onSubmit={submitHandler} className="getInTouch">
                    <Alert variant={messages.status}>{messages.message}</Alert>
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="First name"
                                    required
                                    name="FirstName"
                                    onChange={handleChange} />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Last name"
                                    required
                                    name="LastName"
                                    onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="form-outline mb-4">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Subject"
                            required
                            name="Subject"
                            onChange={handleChange} />
                    </div>
                    <div className="form-outline mb-4">
                        <textarea
                            type="textarea"
                            class="form-control"
                            placeholder="Your message..."
                            required
                            name="YourMessage"
                            onChange={handleChange} />
                    </div>
                    <button type="submit" className="getInTouchBtn">SEND MESSAGE</button>
                </form>
            </div>
        </>
    )
}

export default MainPage