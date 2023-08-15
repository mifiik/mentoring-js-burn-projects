import Layout from '../Layout';
import Team from '../Team';
import appStyle from './style.module.css';

function App() {
	return (
		<div className={appStyle.wrapper}>
			<Layout />
			<Team />
		</div>
	);
}

export default App;
