import "../newCategory/NewCategory.scss"
import { useEffect, useState } from "react"
import { Alert } from "react-bootstrap"
import React from 'react';

const NewCategory = () => {

    const countries = [
        { id: "1", name: "Lithuania" },
        { id: "2", name: "Poland" },
        { id: "3", name: "Estonia" }
    ]

    const districts = [
        { id: "1", countryId: "1", name: "Varena r.sav" },
        { id: "2", countryId: "1", name: "Alytus r.sav" },
        { id: "3", countryId: "2", name: "Lesser Poland" },
        { id: "4", countryId: "2", name: "Silesia" },
        { id: "5", countryId: "3", name: "Harju" },
        { id: "6", countryId: "3", name: "Hiiu" },

    ]
    const cities = [
        { id: "1", districtId: "1", name: "Merkinė" },
        { id: "2", districtId: "1", name: "Valkininkai" },
        { id: "3", districtId: "1", name: "Varėna" },
        { id: "4", districtId: "1", name: "Bingelių k." },
        { id: "1", districtId: "2", name: "Alytus" },
        { id: "2", districtId: "2", name: "Daugai" },
        { id: "3", districtId: "2", name: "Simnas" },
        { id: "4", districtId: "2", name: "Butrimonys" },
        { id: "1", districtId: "3", name: "Krakow" },
        { id: "2", districtId: "3", name: "Gdansk" },
        { id: "3", districtId: "3", name: "Bakersfield" },
        { id: "4", districtId: "3", name: "Carson" },
        { id: "1", districtId: "4", name: "Tallahassee" },
        { id: "2", districtId: "4", name: "Jacksonville" },
        { id: "1", districtId: "5", name: "Tallinn" },
        { id: "2", districtId: "5", name: "Paide" },
        { id: "3", districtId: "5", name: "Polva" },
        { id: "4", districtId: "5", name: "Tartu" },
        { id: "1", districtId: "6", name: "Saare" },
        { id: "2", districtId: "6", name: "Rapla" },
        { id: "3", districtId: "6", name: "Parnu" },

    ]

    const [country, setCountry] = useState([])
    const [district, setDistrict] = useState([])
    const [city, setCity] = useState([])
    const [messages, setMessages] = useState({ message: '', status: '' })
    const [term, setTerm] = useState({
        'Country': '',
        'District': '',
        'City': '',
    })

    const handleChange = (e) => {
        setTerm({
            ...term,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setMessages({ message: 'Category successfully created', status: 'success' })
        console.log(term)
    }

    useEffect(() => {
        setCountry(countries)
    }, [])

    const handleCountry = (id) => {
        const dt = districts.filter(x => x.countryId === id)
        setDistrict(dt)
    }

    const handleDistrict = (id) => {
        const dt = cities.filter(x => x.districtId === id)
        setCity(dt)
    }
    return (
        <>
            <div className="createCategory">
                <h2>----------Create New Category----------</h2>
                <h4><span>Here you can create new category</span></h4>
            <form onSubmit={submitHandler}>
                <Alert variant={messages.status}>{messages.message}</Alert>
                <div className="row">
                    <div className="form-outline mb-4">
                        <select
                            className="form-control"
                            name="Country"
                            onChange={(e) => { handleCountry(e.target.value); handleChange(e) }}
                            required>
                            <option value="">Select Country</option>
                            {
                                country &&
                                    country !== undefined ?
                                    country.map((ctr, index) => {
                                        return (
                                            <option key={index} value={ctr.id}>{ctr.name}</option>
                                        )
                                    })
                                    : "No Country"
                            }
                        </select>
                    </div>
                    <div className="form-outline mb-4">
                        <select
                            className="form-control"
                            name="District"
                            onChange={(e) => { handleDistrict(e.target.value); handleChange(e) }}
                            required
                        >
                            <option value="">Select District</option>
                            {
                                district &&
                                    district !== undefined ?
                                    district.map((ctr, index) => {
                                        return (
                                            <option key={index} value={ctr.id}>{ctr.name}</option>
                                        )
                                    })
                                    : "No District"
                            }
                        </select>
                    </div>
                    <div className="form-outline mb-4">
                        <select
                            className="form-control"
                            name="City"
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select City</option>
                            {
                                city &&
                                    city !== undefined ?
                                    city.map((ctr, index) => {
                                        return (
                                            <option key={index} value={ctr.id}>{ctr.name}</option>
                                        )
                                    })
                                    : "No City"
                            }
                        </select>
                    </div>
                </div>
                <button type="submit" className="createCategoryBtn">SUBMIT</button>
            </form>
        </div >
        </>
    )
}
export default NewCategory;