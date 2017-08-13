import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Border, Heading, Button, Text, Select, Input } from 'rebass';
import ColorList from './ColorList';
import Typography from './Typography';

class ThemeContainer extends React.Component {
	constructor() {
		super();

		this.state = {
			editMode:false
		}
		this.onEdit = this.onEdit.bind(this);
		this.renderThemeOptions = this.renderThemeOptions.bind(this);
	}

	onEdit(e) {
		e.preventDefault();
		this.setState({
			editMode: !this.state.editMode
		})
	}

	renderThemeOptions(theme) {
		return (<option key={theme} value={this.props.themes[theme] && theme}>{theme}</option>)
	}

	render() {
		return (
	  		<Box key='ThemeContainer'>
	  			<Border bottom mb={4}>
	  				<Flex wrap>
			    		<Box w={1/2}>
							<Heading pb={3}>
								{this.state.editMode ? 
										<Input onBlur={this.props.editThemeName} autoFocus w={'300px'} style={{display:'inline-block'}} defaultValue={this.props.theme.themeName} />
								 	: 
										this.props.theme.themeName 
								}
								
								<Button style={{opacity:.75}} href='#' is='a' py={1} px={2} f={0} ml={3} bg={this.props.theme.colors.base || 'deepskyblue'} onClick={(e) => this.onEdit(e)}>
									{(this.state.editMode ? 'finish' : 'edit')}
								</Button>
							</Heading>
						</Box>
						{this.state.editMode && 
							<Box style={{textAlign:'right'}} w={1/2} pt={1} pr={2}>
								<Text is='span' right pr={2} f={1}>Apply Theme</Text>
								<Select onChange={this.props.selectTheme} style={{display:'inline-block', padding:'8px'}} w={160}>
	                                {Object.keys(Object.assign({'Select...':''},this.props.themes)).map(this.renderThemeOptions)}
	                            </Select>
							</Box>
						}
					</Flex>
		    	</Border>
			    <Typography editMode={this.state.editMode} selectFontFamily={this.props.selectFontFamily} addFont={this.props.addFont} deleteFont={this.props.deleteFont} editFont={this.props.editFont} editTypeScale={this.props.editTypeScale} deleteTypeScale={this.props.deleteTypeScale} addTypeScale={this.props.addTypeScale} theme={this.props.theme}></Typography>
			    <ColorList editMode={this.state.editMode} updateBaseColor={this.props.updateBaseColor} updateColorValue={this.props.updateColorValue} renameColor={this.props.renameColor} addColor={this.props.addColor} deleteColor={this.props.deleteColor} theme={this.props.theme}></ColorList>
			</Box>
		)
	}

	static propTypes = {
	    theme: PropTypes.object.isRequired,
	    addFont: PropTypes.func.isRequired,
	    deleteFont: PropTypes.func.isRequired,
	    editFont: PropTypes.func.isRequired,
	    editTypeScale: PropTypes.func.isRequired,
	    addTypeScale: PropTypes.func.isRequired,
	    updateBaseColor: PropTypes.func.isRequired,
	    updateColorValue: PropTypes.func.isRequired,
	    renameColor: PropTypes.func.isRequired,
	    deleteColor: PropTypes.func.isRequired,
	    addColor: PropTypes.func.isRequired,
	    themes: PropTypes.object.isRequired,
	    selectTheme: PropTypes.func.isRequired,
	    editThemeName: PropTypes.func.isRequired,
	};
}

export default ThemeContainer;
