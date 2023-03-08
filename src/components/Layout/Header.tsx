import Image from 'next/image'
import Link from 'next/link'
import Logo from 'public/logo.svg'
import downloadCloud from 'public/icons/download-cloud.svg'



function Header() {
	return (
		<header className='bg-gray absolute top-3 w-full mr-auto rounded-[20px]'>
			<nav className='flex justify-between items-center p-3'>
				<Image src={Logo} alt='Logo' className='h-10' />
				<ul className="flex flex-wrap text-xl">
					<li className="mr-6">
						<Link
							scroll={false}
							href="#home"
							className="border-none text-tan"
						>
							Home
						</Link>
					</li>
					<li className="mr-6">
						<Link
							scroll={false}
							href="#about"
							className="border-none text-tan"
						>
							About
						</Link>
					</li>
					<li className="mr-6">
						<Link
							scroll={false}
							href="#github"
							className="border-none text-tan"
						>
							GitHub
						</Link>
					</li>
					<li className="mr-6">
						<Link
							scroll={false}
							href="#blog"
							className="border-none text-tan"
						>
							Blog
						</Link>
					</li>
				</ul>

				<button className="btn-primary btn btn-sm w-fit gap-3"> <Image src={downloadCloud} alt='Logo' className='w-fit h-6 stroke-tan fill-tan text-tan fa-lg' sizes='sm' /> Resume</button>
			</nav>
		</header>
	)
}

export default Header
