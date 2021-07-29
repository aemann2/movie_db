import { useContext, useRef } from 'react';
import useSWR from 'swr';
import { fetcher } from '../../../utils/fetcher';
import Splash from '../../header/splash/Splash';
import HeadingBar from './components/HeadingBar';
import SearchBar from './components/searchBar/SearchBar';
import Loader from '../loader/Loader';
import Posters from './components/posters/Posters';
import Pagination from './components/Pagination';
import { SearchData } from '../../../models/models';
import { FilmsContext } from '../../../state/films/filmsProvider';
import { usePaginationState } from '../../../state/pagination/paginationProvider';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const HomeMain = () => {
	const { filmSearch, endpointQuery } = useContext(FilmsContext);
	const { state: paginationState } = usePaginationState();
	const ref = useRef<HTMLDivElement | null>(null);

	const { data, error } = useSWR<SearchData>(
		filmSearch ? endpointQuery + `&query=${filmSearch}&page=${paginationState.pageIndex}`: 
			endpointQuery + `&page=${paginationState.pageIndex}`, 
		fetcher);
	if (error) return (<div>"An error has occurred."</div>);

	const paginationScroll = () => {
		ref.current!.scrollIntoView();
	};
	
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
			<BG>
				<Splash />
				<SearchBar ref={ref}/>
				<HeadingBar />
				{data ? 
				
					<div className='my-4'>
						<Posters data={data}/>
						{data.total_pages && <Pagination page={data.page} total_pages={data.total_pages} paginationScroll={paginationScroll} />
						}
					</div>
				
					: <Loader />}
			</BG>
		</motion.div>
	);
};

export default HomeMain;


const BG = styled.div`
background: linear-gradient(180deg, rgba(24,26,29,1) 0%, rgba(46,47,74,1) 46%, rgba(24,26,29,1) 100%);
	}
`;