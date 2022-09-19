import React from 'react';
import "./style.css"
const AddSupplier = () => {
    return (
        <div className='container supplier-add'>
            <h2>Suplier Add</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="companyName">Company Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="companyName"
                        placeholder="Enter Company Name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="contactName">Contact Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="contactName"
                        placeholder="Enter Contact Name..."
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="contactName">Contact Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="contactName"
                        placeholder="Enter Contact Title....."
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        className="form-control"
                        id="country"
                        placeholder="Enter Country....."
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="City">City</label>
                    <input
                        type="text"
                        className="form-control"
                        id="City"
                        placeholder="Enter City....."
                    />
                </div><div className="form-group">
                    <label htmlFor="street">Street</label>
                    <input
                        type="text"
                        className="form-control"
                        id="street"
                        placeholder="Enter street....."
                    />
                </div><div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        placeholder="Enter Phone....."
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="postalCode">Postal Code</label>
                    <input
                        type="text"
                        className="form-control"
                        id="postalCode"
                        placeholder="Enter Postal Code....."
                    />
                </div>
                <button type="submit" className="btn btn-primary mb-5 col-12 pt-2 pb-2">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AddSupplier;
