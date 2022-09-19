function AddSuplier() {
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputName">Company Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            placeholder="Enter Company Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputLastName">Contact Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputLastName"
            placeholder="Enter Contact Name..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputAge">Contact Title</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputAge"
            placeholder="Enter Contact Title....."
          />
        </div>
        <button type="submit" className="btn btn-primary mb-5">
          Submit
        </button>
      </form>
    </>
  );
}

export default AddSuplier;
