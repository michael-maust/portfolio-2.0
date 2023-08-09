'use client'
import Image from 'next/image'
import Link from 'next/link'
import Logo from 'public/logo.svg'
import downloadCloud from 'public/icons/download-cloud.svg'
import useSetActiveAnchor from '@/hooks/useSetActiveAnchor'
import { useEffect, useRef, useState } from 'react'
import { useParams, usePathname, useRouter, useSelectedLayoutSegment } from 'next/navigation'
import { cn } from '@/utils/general'

export enum PAGE_ANCHORS {
	Welcome = 'welcome',
	About = 'about',
	Projects = 'projects',
	Experience = 'experience',
	Contact = 'contact',
}

function Header() {
	const params = useParams()
	const [activeHash, setActiveHash] = useState<PAGE_ANCHORS | null>(null)

	useEffect(() => {
		setActiveHash(window.location.hash.slice(1) as PAGE_ANCHORS)
	}, [params]);

	return (
		<header className='fixed flex justify-center items-center top-3 inset right-auto w-full'>
			<nav className='flex justify-between items-center p-3 bg-gray max-w-screen-xl w-full border-2 border-gray-900 shadow-lg rounded-[20px]'>

				<a
					href={`#${PAGE_ANCHORS.Welcome}`}
					className="cursor-pointer"
				>
					<Image src={Logo} alt='Logo' className='h-10' />
				</a>

				<ul className="flex flex-wrap text-xl gap-3">
					{Object.entries(PAGE_ANCHORS).map(([key, value]) => {
						const isActive = activeHash === value
						const style = cn('opacity-0 transition-opacity duration-300 text-primary font-bold', isActive && "transition-opacity duration-500 delay-300 opacity-100")
						return (
							<li key={key}>
								<a
									href={`#${value}`}
									className={cn("border-none text-tan hover:text-primary font-medium cursor-pointer transition-colors duration-300",
										isActive && "transition-colors duration-300"
									)}
								>
									<span className={style}>{`< `}</span> {key}<span className={style}>{` />`}</span>
								</a>
							</li>)
					})}

				</ul>

				<button className="shadow-sm flex gap-2 px-3 py-2 rounded-xl text-tan font-bold bg-green w-fit hover:scale-105 transition-all duration-300 cursor-pointer hover:bg-green-400">
					<Image src={downloadCloud} alt='Logo' className='w-fit h-6 fa-lg' sizes='sm' />
					Resume
				</button>
			</nav>
		</header>
	)
}

export default Header
