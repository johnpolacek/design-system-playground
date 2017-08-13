import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import FontSelect from './FontSelect';

class FontEdit extends React.Component {
	constructor(props) {
		super(props);
		
		this.onFontSelect = this.onFontSelect.bind(this);
	}
	
	onFontSelect(e) {
		this.props.editFont(this.props.fontName, e.target.value, e.target.options && e.target.options[e.target.selectedIndex].dataset.id);
		e.target.selectedIndex = 0;
	}

	render() {
	  	return (
		    <Box style={{fontFamily:this.props.theme.fontFamilies[Object.keys(this.props.theme.fontFamilies)[0]]}} w={3/5} pb={3}>
		    	<FontSelect onFontSelect={this.onFontSelect} familyName={this.props.fontName} familyValue={this.props.theme.fontFamilies[this.props.fontName]} webfonts={this.props.webfonts} />
			</Box>
		)
	}
}

FontEdit.propTypes = {
	theme: PropTypes.object.isRequired,
	fontName: PropTypes.string.isRequired,
	editFont: PropTypes.func.isRequired,
	webfonts: PropTypes.object.isRequired,
}

export default FontEdit;
