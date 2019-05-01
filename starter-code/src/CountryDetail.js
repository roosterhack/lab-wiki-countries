import React, { Component } from 'react';
import CountryList from './countries.json';
import { Link } from 'react-router-dom';

export class CountryDetail extends Component {
  render() {

    const cca3 = this.props.match.params.cca3
    const found = CountryList.find(country => country.cca3 === cca3)

    return (
      <React.Fragment>
        <h1>{found.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{found.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{found.area} km
                    <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {found.borders.map(border => {
                    const countryName = CountryList.find(country => country.cca3 === border)
                    return (
                      <li>
                        <Link to={`/${border}`}>{countryName.name.common}</Link>
                      </li>
                    )
                  })
                  }
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

export default CountryDetail
