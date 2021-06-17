import React, { useState } from 'react';
import Navbar from '../components/header/Navbar';
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export interface Results {
  results: Array<{
		id: number,
		title: string,
	}>;
	page: number,
	total_pages: number
};

const Home:React.FC = () => {
	const [pageIndex, setPageIndex] = useState(1);

  const url = `movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${pageIndex}&region=US`;

  const { data, error } = useSWR<Results>(url, fetcher);
  if (error) return (<div>"An error has occurred."</div>);
  if (!data) return (<div>"Loading..."</div>);

	return (
		<div>
			<Navbar />
    <div>
      <div>
        {data.results.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
        <button
          onClick={() =>
            setPageIndex(data.page > 1 ? pageIndex - 1 : pageIndex - 0)
          }
        >
          Previous
        </button>
        <button
          onClick={() =>
            setPageIndex(
              data.page < data.total_pages ? pageIndex + 1 : pageIndex + 0
            )
          }
        >
          Next
        </button>
      </div>
    </div>
		</div>
	)
}

export default Home;