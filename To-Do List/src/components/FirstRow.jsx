function FirstRow() {
  return (
    <div class="container text-center">
      <div class="row todoRow">
        <div class="col-4">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" className="btn btn-success todoButton">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstRow;
