import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCovidIndo} from '../../actions'
import styles from './Tabel.module.css'

class Tabel extends Component {
    componentDidMount() {
        this.props.getCovidIndo()
    }


    render() {
        return (
            <div className={styles.container}>
                <h1>Data Covid-19 Per Provinsi di Indonesia</h1>
                <table>
                    <thead>
                        <tr>
                            <td>No.</td>
                            <td>Provinsi</td>
                            <td>Positif</td>
                            <td>Meninggal</td>
                            <td>Sembuh</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.covid.map((x,i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{x.properties.Provinsi}</td>
                                <td>{x.properties.Kasus_Posi}</td>
                                <td>{x.properties.Kasus_Meni}</td>
                                <td>{x.properties.Kasus_Semb}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    
        )
    }
}

const mapStateToProps = state => {
    return {
        covid: state.covid
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCovidIndo: () => dispatch(getCovidIndo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabel)