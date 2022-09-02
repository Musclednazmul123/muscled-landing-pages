import React from "react";
import ReactPlayer from "react-player";

interface Props {
	url: string;
	Icon: any;
	thumbnail?: string;
	width?: string;
	height?: string;
}

const ReactPlayerModal: React.FC<Props> = ({
	url,
	Icon,
	thumbnail,
	width,
	height,
}) => {
	const [isplaying, setIsPlaying] = React.useState<boolean>(false);
	const [hover, setHover] = React.useState<boolean>(false);
	return (
		<>
			<div
				style={{
					backgroundImage: thumbnail && `url('./${thumbnail}')`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					width: width && width,
					height: height && height,
				}}
				className="bg-gray-300 rounded-lg lg:mt-0 mt-12 md:h-[360px] overflow-hidden h-[250px] flex items-center justify-center"
			>
				<div onClick={() => setIsPlaying(true)}>
					<Icon />
				</div>
			</div>
			{isplaying && (
				<div
					onClick={() => {
						setIsPlaying(false);
					}}
					className="bg-black fixed inset-0 h-full cursor-pointer w-full bg-opacity-90 flex items-center justify-center px-6"
				>
					<div
						onClick={(e) => e.stopPropagation()}
						className=" relative pr-7  overflow-visible "
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
					>
						{hover && (
							<svg
								tabIndex={1}
								onClick={() => setIsPlaying(false)}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className=" w-5  h-5 absolute right-0 focus:border border-white	 -top-1  cursor-pointer text-white"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						)}
						<ReactPlayer url={url} playing={true} controls={hover} />
					</div>
				</div>
			)}
		</>
	);
};

export default ReactPlayerModal;
