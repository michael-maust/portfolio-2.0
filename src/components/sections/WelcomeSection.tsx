import Image from 'next/image'

import welcomePortrait from 'public/images/welcome-portrait.svg'

function WelcomeSection() {
	return (
		<div id='welcome' className='mt-[100px] w-full flex justify-center items-center gap-3'>

			<Image src={welcomePortrait} alt='welcome portrait' />

			<div className="flex flex-col gap-3 w-[400px] bg-emerald-400">
				<p className="">Text</p>
				<p className="">More Text</p>

			</div>

		</div>
	)
}

export default WelcomeSection
