import React from 'react'
import Band from './Band'
// import { connect } from 'react-redux'
const Bands = (props) => {
    return <ul> {props.bands.map(band => <Band key={band.id} handleDelete={props.handleDelete} band={band} />)}</ul>
}

export default Bands 
