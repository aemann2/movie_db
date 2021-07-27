import PageContainer from '../components/containers/pageContainer/PageContainer';
import AboutMain from '../components/main/aboutMain/AboutMain';

const About = () => {
	return (
		<div className='bg-background text-mainText h-full py-10 font-mont'>
			<PageContainer>
				<AboutMain />
			</PageContainer>
		</div>
	);
};

export default About;