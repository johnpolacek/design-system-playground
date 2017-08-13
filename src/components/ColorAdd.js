import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Subhead, Label, Input, Button, Checkbox } from 'rebass';

// todo: const googleFontsAPIKey = 'AIzaSyDMBrW9DuEgG32TV_YWHHOEtHE8njtVAO8';

class ColorAdd extends React.Component {
	constructor() {
		super();
		this.state = {
			colorName:'',
			colorValue:''
        };
		this.onColorNameChange = this.onColorNameChange.bind(this);
		this.onColorValueChange = this.onColorValueChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	
	onSubmit(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		let color = {};
		color[formData.get('colorName')] = formData.get('colorValue');
		this.props.addColor(color, formData.get('applySpectrum') === 'on');
		e.target.reset();
		document.getElementById('colorValue').value = '';
	}

	onColorNameChange(e) {
		this.setState({
			colorName: e.target.value
		})
	}

	onColorValueChange(e) {
		this.setState({
			colorValue: e.target.value
		})
	}

	render() {
	  	return (
		    <Box pl={3} py={2} w={158}>
	    		<Subhead pb={3} f={2} children='Add Color' />
	    		<form id="addColorForm" onSubmit={this.onSubmit}>
		    		<Box pb={2}>
	    				<Label>Name</Label>
	    				<Input pattern="[A-Za-z\s]+" onChange={this.onColorNameChange} required name='colorName' id='colorName' f={0} />
	    			</Box>
	    			<Box pb={2}>
		    			<Label>Color</Label>
		    			<Input onChange={this.onColorValueChange} value={this.state.colorValue} required name='colorValue' id='colorValue' f={0} />
		    		</Box>
		    		<Label f={0} p={1}>
						<Checkbox name='applySpectrum' defaultChecked='checked' />
						Apply Spectrum
					</Label>
		    		<Flex direction='row-reverse' w={1}>
		    			<Box my={3}>
				    		<Button bg={this.props.theme.colors.green7 || this.props.theme.colors.base} f={1} onClick={this.props.addFontcolor}>+ New Color</Button>
				    	</Box>
			    	</Flex>
	    		</form>
	    	</Box>
		)
	}
}

ColorAdd.propTypes = {
	addColor: PropTypes.func.isRequired,
	theme: PropTypes.object.isRequired,
}

export default ColorAdd;
