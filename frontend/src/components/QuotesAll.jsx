import React, {Component} from 'react';
import '../style/style.css'

class QuotesAll extends Component {



    render() {
        return (
            <div>

                <div className="ui segment text">

                    <select className="ui compact selection dropdown">
                        <option value="RUB">RUB</option>
                        <option value="USD">USD</option>
                        <option value="CAD">CAD</option>
                        <option value="HKD">HKD</option>
                        <option value="ISK">ISK</option>
                        <option value="PHP">PHP</option>
                        <option value="DKK">DKK</option>
                        <option value="HUF">HUF</option>
                        <option value="CZK">CZK</option>
                        <option value="GBP">GBP</option>
                        <option value="RON">RON</option>
                        <option value="SEK">SEK</option>
                        <option value="IDR">IDR</option>
                        <option value="INR">INR</option>
                        <option value="BRL">BRL</option>
                        <option value="HRK">HRK</option>
                        <option value="JPY">JPY</option>
                        <option value="THB">THB</option>
                        <option value="CHF">CHF</option>
                        <option value="EUR">EUR</option>
                        <option value="MYR">MYR</option>
                        <option value="BGN">BGN</option>
                        <option value="CNY">CNY</option>
                        <option value="NOK">NOK</option>
                        <option value="NZD">NZD</option>
                        <option value="ZAR">ZAR</option>
                        <option value="MXN">MXN</option>
                        <option value="SGD">SGD</option>
                        <option value="AUD">AUD</option>
                        <option value="ILS">ILS</option>
                        <option value="KRW">KRW</option>
                        <option value="PLN">PLN</option>
                    </select>

                    <table className="ui celled table">
                        <thead>
                        <tr>
                            <th>Quotes</th>
                            <th>Value</th>
                            <th>Variation</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td data-label="Name">James</td>
                            <td data-label="Age">24</td>
                            <td data-label="Job">Engineer</td>
                        </tr>
                        <tr>
                            <td data-label="Name">Jill</td>
                            <td data-label="Age">26</td>
                            <td data-label="Job">Engineer</td>
                        </tr>
                        <tr>
                            <td data-label="Name">Elyse</td>
                            <td data-label="Age">24</td>
                            <td data-label="Job">Designer</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default QuotesAll;
