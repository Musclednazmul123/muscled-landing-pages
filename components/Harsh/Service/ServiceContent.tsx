import React, { FC } from "react";

import { ServiceContent } from "../component.type";



const ServiceContent: FC<ServiceContent> = ({ className, children }) => {
	return (
		<div className={`${className}`}>
			{children}
		</div>
	);
};

export default ServiceContent;
