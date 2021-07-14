import HomeMain from '../components/main/HomeMain/HomeMain';
import PageContainer from '../components/containers/pageContainer/PageContainer';

const Home = () => {
	return (
		<div className='bg-background text-mainText h-full py-10 px-6 font-mont min-w-min'>
			<PageContainer>
				<HomeMain />
			</PageContainer>
		</div>
	);
};

export default Home;