import React, { useEffect, useState } from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { useInView } from "react-intersection-observer";

interface ProgressProps {
	progress: number;
}

const Progress = (props: ProgressProps) => {
	const [progress, setProgress] = useState(0);
	const { ref, inView } = useInView({
		/* Optional options */
		threshold: 0,
	});

	useEffect(() => {
		if (!inView) {
			return;
		}
		let timerId = setInterval(() => {
			setProgress(props.progress);
		}, 100);

		return () => {
			if (timerId) {
				clearInterval(timerId);
			}
		};
	}, [inView, props.progress]);

	return (
		<ProgressPrimitive.Root
			ref={ref}
			value={progress}
			className="h-2 w-full overflow-hidden rounded-full bg-white dark:bg-gray-900"
		>
			<ProgressPrimitive.Indicator
				style={{ width: `${progress}%` }}
				className="h-full bg-blue-500 duration-1000 ease-in-out dark:bg-white"
			/>
		</ProgressPrimitive.Root>
	);
};

export { Progress };
