import * as util from "../utils/utils";

export default function SortBy({ sortby, setSortBy }) {
  const sortBys = ["date", "id", "comments"];

  return (
    <div className="sortby">
      <p>Sorting by: {util.formatContent(sortby)}</p>
      {sortBys.map((sortby) => {
        return (
          <button
            key={sortby}
            className="sortby-button"
            onClick={() => setSortBy(sortby)}
          >
            {util.formatContent(sortby)}
          </button>
        );
      })}
    </div>
  );
}
