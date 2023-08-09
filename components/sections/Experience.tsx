'use client'
import useSetActiveAnchor from '@/hooks/useSetActiveAnchor';
import React, { useRef } from 'react';
import { PAGE_ANCHORS } from '../Layout/Header';

export default function Experience() {
	const ref = useRef(null)
	useSetActiveAnchor(ref, PAGE_ANCHORS.Experience)

	return (
		<div ref={ref} id={PAGE_ANCHORS.Experience} className="bg-gray text-tan h-[1000px] mt-[500px] p-3">Experience</div>
	);
}
