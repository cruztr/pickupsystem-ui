import React from 'react';

class HomePage extends React.Component {
    render() {
        return (
        <div>
            <div>
                <div>
                    <h2>Home</h2>
                    <button> add </button>
                </div>

                <div>
                    <div className="card-headers">
                        <p><span>Waybill Number</span><span></span></p>
                        <p><span>Recipients</span><span></span></p>
                        <p><span>Phone</span><span></span></p>
                        <p><span>Status</span><span></span></p>
                        <p><span>WayTime</span><span></span></p>
                        <button>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default HomePage;