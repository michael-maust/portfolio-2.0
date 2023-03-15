import Image from 'next/image'

import welcomePortrait from 'public/images/welcome-portrait.svg'


const TITLES = ['👨‍💻 software developer', '🛠️ engineer', '💸 entrepreneur']


function RotatingBadges() {
	return (
		<div className="h-[40px] flex flex-col gap-1 overflow-hidden">

			{TITLES.map((title) => (
				// TODO: Add infinite to animation and fix keyframes
				<div key={title} className="bg-gray px-2 rounded-lg shadow-sm h-[40px]" style={{ 'animation': 'spin_words 3s' }}>
					<p className="">{title}</p>
				</div>
			))}
		</div>
	)


}





function WelcomeSection() {
	return (
		<div id='welcome' className='mt-[100px] w-full flex justify-center items-center gap-6'>


			<div className="">

				<Image src={welcomePortrait} alt='welcome portrait' />
			</div>

			<div className="flex flex-col gap-6 text-tan text-[1.6rem] mt-[25px]">
				<div className="">
					<p className="text-tan">My name is <span className='text-primary font-semibold font-sans'>Michael Maust.</span> I am</p>
					<div className="flex gap-2 items-center">
						<p className="text-tan">a</p>
						<RotatingBadges />
					</div>
				</div>
				<div className="flex flex-col gap-0.5">
					<p className="whitespace-pre">{`My mission is to build and create\ninnovative software and businesses\n`}</p>
					<p className="bg-blue shadow-sm rounded-lg px-2 w-fit">that bring value to people's lives.</p>
				</div>
			</div>

		</div>
	)
}

export default WelcomeSection
