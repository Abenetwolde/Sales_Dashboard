import { User } from "lucide-react";
import SettingSection from "./SettingSection";

const Profile = () => {
	return (
		<SettingSection icon={User} title={"Profile"}>
			<div className='flex flex-col sm:flex-row items-center mb-6'>
				<img
					src='https://media.licdn.com/dms/image/v2/D4D03AQGww-TXz2UQsQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721805490027?e=1734566400&v=beta&t=PHRt10lDs_bv-AFxxLegTtaMl8TH5YO5_R_JYixhD54'
					alt='Profile'
					className='rounded-full w-20 h-20 object-cover mr-4'
				/>

				<div>
					<h3 className='text-lg font-semibold text-gray-100'>Abnet Wolde</h3>
					<p className='text-gray-400'>john.doe@example.com</p>
				</div>
			</div>

			<button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>
				Edit Profile
			</button>
		</SettingSection>
	);
};
export default Profile;
