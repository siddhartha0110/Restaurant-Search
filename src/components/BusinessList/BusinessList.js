import React, { Component } from 'react'
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends Component {
    render() {
        return (
            <div className="BusinessList">
                {this.props.businesses.map(function (business) {
                    return <Business key={business.id} business={business} />
                })}
            </div>

        )
    }
}
export default BusinessList;