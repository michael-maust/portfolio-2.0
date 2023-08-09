'use client'
import useSetActiveAnchor from '@/hooks/useSetActiveAnchor';
import React, { useRef } from 'react';
import { PAGE_ANCHORS } from '../Layout/Header';

function About() {
	const ref = useRef(null)
	useSetActiveAnchor(ref, PAGE_ANCHORS.About)

	return (
		<div ref={ref} id={PAGE_ANCHORS.About} className="bg-gray text-tan h-[1000px] mt-[500px] p-3">About</div>
	);
}

export default About;
