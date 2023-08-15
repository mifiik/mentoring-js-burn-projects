import layoutStyle from './style.module.css';

function Layout() {
	return (
		<div className={layoutStyle.header}>
			<h1>Our team</h1>
			<h2>
				We are the
				{' '}
				<span>KOSMONAVTY KODA</span>
			</h2>
		</div>
	);
}

export default Layout;
