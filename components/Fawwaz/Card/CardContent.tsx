import React, { FC } from "react";

import { CardContentProps } from "../component.type";



const CardContent: FC<CardContentProps> = ({ className, children }) => {
	return (
		<div className={`px-7 ${className ? className : ''} `}>
			{children}
		</div>
	);
};

export default CardContent;