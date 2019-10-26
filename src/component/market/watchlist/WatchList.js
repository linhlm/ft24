import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';


class WatchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFilted: false,
      startDate: null,
      endDate: null,
    };
  }

  

  render() {
    const { isFetching } = this.props;

    return (
      <div className={`watchlist-wrapper h-100 ${isFetching ? 'bg-blur' : ''}`}>
        
      </div>
    );
  }
}


export default compose(
)(WatchList);
