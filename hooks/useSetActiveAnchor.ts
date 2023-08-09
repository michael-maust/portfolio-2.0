import { MutableRefObject, Ref, RefObject, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { PAGE_ANCHORS } from '@/components/Layout/Header'
import { useIntersectionObserver } from '@react-hookz/web'
import useOnScreen from './useOnScreen'

export default function useSetActiveAnchor(
	elementRef: MutableRefObject<HTMLElement | null>,
	anchor: PAGE_ANCHORS,
) {
	const document = typeof window !== 'undefined' ? window.document : null

	const router = useRouter()
	const intersection = useIntersectionObserver(elementRef, {
		root: document,
		threshold: [0, 0.7],
	})
	const isVisible = (intersection?.intersectionRatio ?? 0) >= 0.7

	useEffect(() => {
		if (isVisible) {
			router.push(`#${anchor}`, { scroll: false })
		}
	}, [isVisible, anchor, router])
}
