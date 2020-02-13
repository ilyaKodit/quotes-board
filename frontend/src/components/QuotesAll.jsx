import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../style/style.css'
import {LoadingQuotes} from "../redux/creators";
import date from 'date-and-time';

class QuotesAll extends Component {

    constructor(props) {
        super(props);

        this.state = {
            select: 'RUB'
        }
    }

    getDate = () => {
        const minusOneDay = new Date() - 86400000;
        const minusTwoDays = new Date() - 172800000;

        const today = date.format(new Date(), 'YYYY-MM-DD');
        const yesterday = date.format(new Date(minusOneDay), 'YYYY-MM-DD');
        const dayBeforeYesterday = date.format(new Date(minusTwoDays), 'YYYY-MM-DD');

        return {
            today,
            yesterday,
            dayBeforeYesterday
        };
    };

    componentDidMount = async () => {
        this.onChange({
            target: {
                value: 'RUB'
            }
        });
    };

    onChange = async (event) => {

        await this.setState({
            select: event.target.value
        });

        const date = await this.getDate();

        const respToday = await fetch(`https://api.exchangeratesapi.io/${date.today}?base=${this.state.select}`);
        const dataToday = await respToday.json();

        const respYesterday = await fetch(`https://api.exchangeratesapi.io/${date.yesterday}?base=${this.state.select}`);
        const dataYesterday = await respYesterday.json();

        const respDayBeforeYesterday = await fetch(`https://api.exchangeratesapi.io/${date.dayBeforeYesterday}?base=${this.state.select}`);
        const dataDayBeforeYesterday = await respDayBeforeYesterday.json();

        const allDaysQuotes = {
            quotesSelect: this.state.select,
            todayQuotes: dataToday,
            yesterdayQuotes: dataYesterday,
            dayBeforeYesterdayQuotes: dataDayBeforeYesterday
        };

        this.props.loading(allDaysQuotes);
    };

    render() {
        return (
            <div>

                <div className="ui segment text">

                    <select className="ui compact selection dropdown"
                            onChange={this.onChange}
                            value={this.state.select}
                    >
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

                        {
                            this.props.todayQuotes &&
                                Object.keys(this.props.todayQuotes.rates).map( (val) => {
                                    return <tr key={val}>
                                        <td>{this.props.todayQuotes.base} - {val}</td>
                                        <td>{this.props.todayQuotes.rates[val]}</td>
                                        <td>Engineer</td>
                                    </tr>
                                })
                        }

                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        quotesSelect: store.quotesSelect,
        todayQuotes: store.todayQuotes,
        yesterdayQuotes: store.yesterdayQuotes,
        dayBeforeYesterdayQuotes: store.dayBeforeYesterdayQuotes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loading: (data) => {
            dispatch(LoadingQuotes(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuotesAll);
