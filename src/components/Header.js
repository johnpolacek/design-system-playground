import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Text, Link, Button } from 'rebass';

class Header extends React.Component {
	render() {
		return (
		  	<Flex wrap style={{backgroundColor:this.props.theme.colors.base,fontFamily:this.props.theme.fontFamilies[Object.keys(this.props.theme.fontFamilies)[0]]}} px={4} py={3}>
		  		<Flex justify={['center','center','flex-start']} w={[1,1,2/5]}>
		  			<img style={{marginLeft:'-4px',marginTop:'-8px'}} width="48" height="48" type="image/svg+xml" src="./images/React-icon.svg" />
		  			<Text f={3} py={1} color='white'>Design System Playground</Text>
		  		</Flex>
		  		<Flex wrap justify={['center','center','flex-end']} w={[1,1,3/5]} pt={[2,2,1]} pb={1}>
		  			<Flex justify={['center','flex-start']} w={[1,'auto']}>
		  				<Text pt={1} center color='white'>Built with <Link color='rgba(255,255,255,.8)' href="http://jxnblk.com/rebass/">Rebass</Link> and <Link color='rgba(255,255,255,.8)' href="https://www.styled-components.com/">Styled Components</Link></Text>
		  			</Flex>
		  			<Flex justify={['center','flex-start']} w={[1,'auto']} pt={[2,0]}>
		  				<Button href='http://github.com/johnpolacek/design-system-playground' bg='rgba(0,0,0,.5)' is='a' color='white' ml={3}>Github</Button>
		  			</Flex>
		  			
		  		</Flex>
		  	</Flex>
	  	)
	}

  	static propTypes = {
	   theme: PropTypes.object.isRequired,
	};

}

export default Header;
