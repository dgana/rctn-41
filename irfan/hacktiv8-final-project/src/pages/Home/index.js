import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCovidDaily} from '../../actions'
import styles from './Home.module.css'
import CountUp from 'react-countup'

class Home extends Component {
    componentDidMount() {
        this.props.getCovidDaily()
    }

    
    render() {
        var data = this.props.daily
        let countryIndo = data.filter((data) => data.attributes.Country_Region === "Indonesia");
    
        return ( 
            <div className={styles.header}>
                <h1>Indonesia Covid-19 Daily Update</h1>
                <div className={styles.wrapper}>
                    <div className={styles.aktif}>
                        <h2>Kasus Aktif</h2>
                        {countryIndo.map((x,  i) =>(
                            <h3 key={i}>
                                <CountUp 
                                 end={x.attributes.Active}
                                 duration={2}/>
                                 </h3>
                        ))}
                    </div>
                    <div className={styles.positif}>
                        <h2>Kasus Positif</h2>
                        {countryIndo.map((x, i) => (
                            <h3 key={i}>
                                <CountUp
                                end={x.attributes.Confirmed}
                                duration={2}/>
                                </h3>
                        ))}
                    </div>
                    <div className={styles.meninggal}>
                        <h2>Meninggal Dunia</h2>
                        {countryIndo.map((x,  i) => (
                            <h3 key={i}>
                                <CountUp
                                end={x.attributes.Deaths}
                                duration={2}/>
                                </h3>
                        ))}
                    </div>
                    <div className={styles.sembuh}>
                        <h2>Sembuh</h2>
                        {countryIndo.map((x, i) => (
                            <h3 key={i}>
                                <CountUp
                                end={x.attributes.Recovered}
                                duration={2}/>
                                </h3>
                        ))}
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        daily: state.daily
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCovidDaily: () => dispatch(getCovidDaily())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)