import "../newCategory/NewCategory.scss"
import { useState } from "react"
import { Alert } from "react-bootstrap"
import React from 'react';

class NewCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            states: [],
            cities: [],
            selectedCountry: 'Country',
            selectedState: 'State'
        };
        this.changeCountry = this.changeCountry.bind(this);
        this.changeState = this.changeState.bind(this);
    }

    componentDidMount() {
        this.setState({
            countries: [
                {
                    name: 'Lithuania', states: [
                        { name: 'Varėna r.sav.', cities: ['Merkinė', 'Valkininkai', 'Varėna', 'Bingelių k.'] },
                        { name: 'Alytus r.sav.', cities: ['Alytus', 'Daugai', 'Simnas', 'Butrimonys'] }
                    ]
                },
                {
                    name: 'Poland', states: [
                        { name: 'Lesser Poland', cities: ['Krakow', 'Gdansk', 'Bakersfield', 'Carson'] },
                        { name: 'Silesia', cities: ['Tallahassee', 'Jacksonville'] },
                    ]
                },
                {
                    name: 'Estonia', states: [
                        { name: 'Harju', cities: ['Tallinn', 'Paide', 'Polva', 'Carson'] },
                        { name: 'Hiiu', cities: ['Saare', 'Rapla', 'Parnu'] },
                    ]
                },


            ]
        });
    }


    changeCountry(event) {
        this.setState({ selectedCountry: event.target.value });
        this.setState({ states: this.state.countries.find(cntry => cntry.name === event.target.value).states });
    }

    changeState(event) {
        this.setState({ selectedState: event.target.value });
        const stats = this.state.countries.find(cntry => cntry.name === this.state.selectedCountry).states;
        this.setState({ cities: stats.find(stat => stat.name === event.target.value).cities });
    }

    render() {
        return (
            <div className="createCategory">
                <h2>----------Create New Category----------</h2>
                <form>
                    <div className="row">
                        <div className="form-outline mb-4">
                            <select className="form-select" required placeholder="Country" value={this.state.selectedCountry} onChange={this.changeCountry}>
                                <option value=''>Country</option>
                                {this.state.countries.map((e, key) => {
                                    return <option key={key}>{e.name}</option>;
                                })}
                            </select>
                        </div>

                        <div className="form-outline mb-4">
                            <select className="form-select" required placeholder="State" value={this.state.selectedState} onChange={this.changeState}>
                                <option value=''>District</option>
                                {this.state.states.map((e, key) => {
                                    return <option key={key}>{e.name}</option>;
                                })}
                            </select>
                        </div>

                        <div className="form-outline mb-4">
                            <select className="form-select" required placeholder="City">
                                <option value=''>City</option>
                                {this.state.cities.map((e, key) => {
                                    return <option key={key}>{e}</option>;
                                })}
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="createCategoryBtn">Submit</button>
                </form>
            </div>

        )
    }
}

export default NewCategory;