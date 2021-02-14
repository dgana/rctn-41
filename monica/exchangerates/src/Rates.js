import React from 'react';

class Rates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          rates: {}
        };
    }

    componentDidMount() {
        fetch("https://api.exchangeratesapi.io/latest?base=IDR") 
          .then(res => res.json())
          .then(
            result => {
              this.setState({
                isLoaded: true,
                rates: result.rates
              });
            },
            error => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          );
    }

    makeTable = () => {
        const rates = this.state;
        let ratesArray = Object.keys(rates).map(i => rates[i])[2];
        let table = [];
        let children = [];
        let displayedCurrencies = ["CAD", "IDR", "JPY", "CHF", "USD", "EUR"];
    
        for (var key in ratesArray) {
          if (ratesArray.hasOwnProperty(key) && displayedCurrencies.includes(key)) {
            children.push(
              <tr>
                <td>{key}</td>
                <td>{this.prettyCurrency(ratesArray[key], 0)}</td>
                <td>{this.prettyCurrency(ratesArray[key])}</td>
                <td>{this.prettyCurrency(ratesArray[key], 1)}</td>
              </tr>
            );
          }
        }
        table.push(<tbody>{children}</tbody>); 
        return table;
    };

    prettyCurrency = (number, action) => {
        if (action === 0) {
          number = (number * 102) / 100;
        } else if (action === 1) {
          number = (number * 98) / 100;
        } 
        var fixedNumber = number.toFixed(4).toString();
        while (fixedNumber.length < 8) {
          fixedNumber = "0" + fixedNumber;
        }
    
        return fixedNumber;
    };
    
    render() {
        const { error, isLoaded } = this.state;
    
        if (error) {
          return <div>Oh no :( {error.message}</div>;
        } else if (!isLoaded) {
          return <div>This page is loading... please wait for a moment</div>;
        } else {
          return (
            <main>
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>&nbsp;</th>
                      <th>WE BUY</th>
                      <th>EXCHANGE RATE</th>
                      <th>WE SELL</th>
                    </tr>
                  </thead>
                  {this.makeTable()}
                </table>
                <p>
                  * base currency is IDR
                  <br />* As for the API,
                  <a href="https://exchangeratesapi.io/">https://exchangeratesapi.io/</a> is used.
                </p>
              </div>
            </main>
          );
        }
      }



}

export default Rates;
