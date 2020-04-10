/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './SearchBar.css';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };

        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        this.sortByOptions = {
            "Best Match": 'best_match',
            "Highest Rated": 'rating',
            "Most Reviewed": 'review_count'
        }
    }

    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption)
            return 'active'
        return '';
    }

    handleSortByChange(sortByOption) {
        this.setState({ sortBy: sortByOption })
    }

    handleTermChange(event) {
        this.setState({ term: event.target.value })
    }
    handleLocationChange(event) {
        this.setState({ location: event.target.value })
    }
    handleSearch(event) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
    }
    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(option => {
            let value = this.sortByOptions[option];
            return <li key={value}
                className={this.getSortByClass(value)}
                onClick={this.handleSortByChange.bind(this, value)}
            >{option}</li>
        })
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleTermChange} />
                    <input placeholder="Where?" onChange={this.handleLocationChange} />
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>

        )
    }
}
export default SearchBar;