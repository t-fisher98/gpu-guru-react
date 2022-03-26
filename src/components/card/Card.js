import React from "react";

import { Box } from "@chakra-ui/react";

function Card({children, ...props}) {
  return (
		<Box
			width={props.width || "20rem"}
			height={props.height || "30rem"}
			border={props.border || "1px solid lightgrey"}
			borderRadius={props.br || "5px"}
		>
			{children}
		</Box>
	);
}

export default Card;