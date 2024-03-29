'use client'
import Image from 'next/image'

import welcomePortrait from 'public/images/welcome-portrait.svg'
import { useRef, useState } from 'react'
import { PAGE_ANCHORS } from '../Layout/Header'
import useSetActiveAnchor from '@/hooks/useSetActiveAnchor'

const TITLES = ['👨‍💻 software developer', '🛠️ engineer', '💸 entrepreneur']
const style = "bg-gray px-2 rounded-lg shadow-sm h-[40px]"

function RotatingBadges() {
	const [activeIndex, setActiveIndex] = useState(0)

	const handleCycle = () => {
		console.log('cycle')
	}

	return (
		<div className="flex flex-col gap-1 w-full">

			<button className="bg-slate-600 rounded-md" onClick={handleCycle}>Cycle</button>
			<span id='text-cycle' className='w-full bg-red-200'></span>

			{/* {TITLES.map((title) => (
				// TODO: Add infinite to animation and fix keyframes
				<div key={title} className={style}>
					<p className="">{title}</p>
				</div>
			))} */}
		</div>
	)

}

function WelcomeSection() {
	const ref = useRef(null)
	useSetActiveAnchor(ref, PAGE_ANCHORS.Welcome)

	return (
		<div ref={ref} id={PAGE_ANCHORS.Welcome} className='pt-[120px] w-full flex justify-center items-center gap-6'>
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
