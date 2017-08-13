import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Border, Text, Small } from 'rebass';

class FontWeights extends React.Component {

	render() {
	  	return (
		    <Flex style={{fontFamily:this.props.fontFamily || 'inherit'}} wrap pt={2}>
				{[100,200,300,400,500,600,700,800,900].map((weight) => {
					return(<Border key={weight} mr={2} mb={2}>
						<Text style={{fontWeight:weight}} py={1} px={3} f={4}>Aa</Text>
						<Border pt={1} pb={2} px={3} top>
							<Small color='gray'>{weight}</Small>
						</Border>
					</Border>)
				})}
			</Flex>
		)
	}
}

FontWeights.propTypes = {
	fontFamily: PropTypes.string,
}

export default FontWeights;
