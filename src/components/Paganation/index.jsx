import React from "react";
import PropTypes from "prop-types";

PageChange.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};

PageChange.defaultProps = {
  onPageChange: null,
};

function PageChange(props) {
  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit);

  const onPageClick = (newPage) => {
    if (onPageChange) {
      onPageChange(newPage);
    }
  };

  return (
    <div>
      <button disabled={_page <= 1} onClick={() => onPageClick(_page - 1)}>
        Previous
      </button>
      <button
        disabled={_page >= totalPages}
        onClick={() => onPageClick(_page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default PageChange;
