import React from 'react';

class HomePage extends React.Component {
    render() {
        return (
          <div>
              <div>
                  <h2>Home</h2>
                  <button to="/"> add </button>
              </div>

              <div>
                  <div className="card-headers">
                      <span>Waybill Number </span>
                      <span>Recipient </span>
                      <span>Phone </span>
                  </div>
              </div>
          </div>
        );
    }
}

export default HomePage;