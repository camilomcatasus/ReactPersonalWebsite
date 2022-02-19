import React, {Component} from 'react';
import './ShowCard.css';

class ShowCard extends Component {

    render() {
        return (
            <div className="card-container">
              <div className="card-icon-container">
                <div className="icon-resizer">
                <object type="image/svg+xml" data={this.props.icon} className="what">
                  Hello
                </object>
                </div>
              </div>
              <div className="card-media-container">
                <div className="card-info">
                  <h1>{this.props.title}</h1>
                  <p>{this.props.description}</p>
                </div>
              </div>
              <div></div>
            </div>
        );
    }
}
export default ShowCard;