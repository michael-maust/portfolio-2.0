import Image from 'next/image'
import Link from 'next/link'
import Logo from 'public/logo.svg'
import downloadCloud from 'public/icons/download-cloud.svg'

const PAGE_ANCHORS = {
	About: '#about',
	Projects: '#projects',
	Experience: '#experience',
	Contact: '#contact',
}



function Header() {
	return (
		<header className='fixed flex justify-center items-center top-3 inset right-auto w-full'>
			<nav className='flex justify-between items-center p-3 bg-gray max-w-screen-xl w-full shadow-md rounded-[20px]'>

				<Link
					scroll={false}
					href='#welcome'
					className="cursor-pointer"
				>
					<Image src={Logo} alt='Logo' className='h-10' />
				</Link>


				<ul className="flex flex-wrap text-xl gap-8">
					{Object.entries(PAGE_ANCHORS).map(([key, value]) => (
						<li key={key}>
							<Link
								scroll={false}
								href={value}
								className="border-none text-tan hover:text-primary uppercase font-medium cursor-pointer transition-colors duration-300"
							>
								{key}
							</Link>
						</li>))}

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
