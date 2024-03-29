import { MutableRefObject, useEffect, useState } from 'react'

function useOnScreen<T extends Element>(
	ref: MutableRefObject<T | null>,
	rootMargin = '0px',
): boolean {
	// State and setter for storing whether element is visible
	const [isIntersecting, setIntersecting] = useState<boolean>(false)
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				// Update our state when observer callback fires
				if (!entry) return
				setIntersecting(entry.isIntersecting)
			},
			{
				rootMargin,
			},
		)
		if (ref.current) {
			observer.observe(ref.current)
		}
		return () => {
			if (ref.current) {
				observer.unobserve(ref.current)
			}
		}
	}, [ref, ref.current, rootMargin]) // Empty array ensures that effect is only run on mount and unmount
	return isIntersecting
}
export default useOnScreen
