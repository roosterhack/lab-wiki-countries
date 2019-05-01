import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class CountryList extends Component {

  render() {
    const { countries } = this.props
    const countryList = countries.map((country, i) => {
      return (
        <Link to={`/${country.cca3}`} className="list-group-item list-group-item-action" key={i}>
          <span>{country.flag}</span>
          <h4>{country.name.common}</h4>
        </Link>
      )
    })

    return (
      <React.Fragment>
        {countryList}
      </React.Fragment>
    )
  }
}

export default CountryList
