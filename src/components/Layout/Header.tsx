import Image from 'next/image'
import Link from 'next/link'
import Logo from 'public/logo.svg'



function Header() {
	return (
		<header className="border-b border-gray-300">
			<nav className='flex justify-between items-center'>
				<Image src={Logo} alt='Logo' />
				<ul className="flex flex-wrap text-xl">
					<li className="mr-6">
						<Link
							scroll={false}
							href="#home"
							className="border-none "
						>
							Home
						</Link>
					</li>
					<li className="mr-6">
						<Link
							scroll={false}
							href="#about"
							className="border-none "
						>
							About
						</Link>
					</li>
					<li className="mr-6">
						<Link
							scroll={false}
							href="#github"
							className="border-none "
						>
							GitHub
						</Link>
					</li>
					<li className="mr-6">
						<Link
							scroll={false}
							href="#blog"
							className="border-none "
						>
							Blog
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
