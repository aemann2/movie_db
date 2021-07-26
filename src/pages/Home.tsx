import HomeMain from '../components/main/homeMain/HomeMain';
import PageContainer from '../components/containers/pageContainer/PageContainer';

const Home = () => {
	return (
		<div style={{ minWidth: '310px' }} className='bg-background text-mainText h-full py-10 font-mont'>
			<PageContainer>
				<HomeMain />
			</PageContainer>
		</div>
	);
};

export default Home;