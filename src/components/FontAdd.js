import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Border, Subhead, Label, Input, Button } from 'rebass';
import FontSelect from './FontSelect';
import FontWeights from './FontWeights';

// todo: const googleFontsAPIKey = 'AIzaSyDMBrW9DuEgG32TV_YWHHOEtHE8njtVAO8';

class FontAdd extends React.Component {
	constructor() {
		super();
		this.state = {
			familyName:'',
			familyValue:'',
			webfontId:false
        };
		this.onFontSelect = this.onFontSelect.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	
	onSubmit(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		let font = {};
		font[formData.get('familyName')] = formData.get('familyValue');
		this.props.addFont(font, this.state.webfontId);
		e.target.reset();
	}

	onFontSelect(e) {
		this.setState({
			familyName: e.target.options[e.target.selectedIndex].text,
			familyValue: e.target.value,
			webfontId: e.target.options[e.target.selectedIndex].dataset.id || false
		})
	}

	render() {
	  	return (
		    <Border p={4} mb={4} style={{borderRadius:'4px'}} mr={2}>
		    	<form id="fontAddForm" onSubmit={this.onSubmit}>
		    		<Subhead pb={3} children='Add Font Family' />
		    		<Box w={3/5} pb={3}>
				    		<FontSelect onFontSelect={this.onFontSelect} familyName={this.state.familyName} familyValue={this.state.familyValue} webfonts={this.props.webfonts} />
				    		{this.state.familyName && this.state.familyValue && 
				    			<Box>
					    			<Box pb={3}>
					    				<Label>Name</Label>
					    				<Input defaultValue={this.state.familyName} required name='familyName' w={1/2} f={0} />
					    			</Box>
					    			<Box pb={2}>
						    			<Label>Font Family</Label>
						    			<Input defaultValue={this.state.familyValue} required name='familyValue' f={0} />
						    		</Box>
							    </Box>
				    		}
			    		
			    	</Box>
			    	{this.state.familyName &&
			    		<Box >
				    		<FontWeights fontFamily={this.state.familyValue} />
					    	<Flex direction='row-reverse' w={1}>
				    			<Box mx={3} my={4} pt={4}>
						    		<Button bg={this.props.theme.colors.green7 || this.props.theme.colors.base} onClick="document.getElementById('fontAddForm').submit">+ Add Font</Button>
						    	</Box>
					    	</Flex>
					    </Box>
			    	}
			    </form>
		    	{this.state.webfontId &&
		    		<link rel='stylesheet' href={"https://fonts.googleapis.com/css?family="+this.state.webfontId} />
		    	}
	    	</Border>
		)
	}
}

FontAdd.propTypes = {
	addFont: PropTypes.func.isRequired,
	theme: PropTypes.object.isRequired,
	webfonts: PropTypes.object.isRequired,
}

export default FontAdd;
