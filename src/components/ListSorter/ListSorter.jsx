import { useState } from 'react';
import './ListSorter.css';

export default function ListSorter({ setSearchParams }) {
  const [filters, setFilters] = useState({
    sort_by: 'created_at',
    order: 'desc',
  });

  // const handleChange = e => {
  //   setfilters({ ...filters, [e.target.name]: e.target.value });
  //   setSearchParams(filters);
  // };

  const handleChange = e => {
  const nextFilters = { ...filters, [e.target.name]: e.target.value };
  setFilters(nextFilters);
  setSearchParams(nextFilters);
};

  console.log(filters);

  return (
    <div>
      <form className="sort-control">
        <select name="sort_by" value={filters.sort_by} onChange={handleChange}>
          <option value="created_at">New</option>
          <option value="comment_count">Comments</option>
          <option value="votes">Votes</option>
        </select>
        <select name="order" value={filters.order} onChange={handleChange}>
          <option value="desc">Desc</option>
          <option value="asc">Asc</option>
        </select>
      </form>
    </div>
  );
}
