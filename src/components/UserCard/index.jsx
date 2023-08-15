import iconTg from '../images/TGlogo.webp';
import iconVk from '../images/VKlogo.webp';
import kosmonavt from '../images/IconKosmonavt.webp';
import userCardStyle from './style.module.css';

function UserCard({
	name, job, description, telegramLink, vkLink,
}) {
	return (
		<div className={userCardStyle.card}>
			<div className={userCardStyle.foto}>
				<img src={kosmonavt} alt="foto" />
			</div>
			<div className={userCardStyle.aboutUser}>
				<h3 className={userCardStyle.aboutUserName}>{name}</h3>
				<p className={userCardStyle.aboutUserJob}>{job}</p>
				<p className={userCardStyle.aboutUserDescription}>{description}</p>
			</div>
			<div className={userCardStyle.socialMedia}>
				<div>
					<a href={telegramLink} className={telegramLink ? 'show' : 'hide'}>
						<img src={iconTg} alt="Telegram" />
					</a>
				</div>
				<div>
					<a href={vkLink} className={vkLink ? 'show' : 'hide'}>
						<img src={iconVk} alt="VK" />
					</a>
				</div>
			</div>
		</div>
	);
}

export default UserCard;
