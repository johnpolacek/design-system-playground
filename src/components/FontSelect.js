import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Label, Select } from 'rebass';

//  Browser Font Stacks from: 
//  https://css-tricks.com/snippets/css/font-stacks/
//  http://www.cssfontstack.com/


class FontSelect extends React.Component {
	constructor() {
		super();
        this.renderWebfontOptions = this.renderWebfontOptions.bind(this);
	}

    renderWebfontOptions(themeFamilyName) {
        let webfontOptions = [{label:'Google Webfonts...',value:'none'}];
        Object.keys(this.props.webfonts).forEach((category) => {
            if ((themeFamilyName !== 'sans' && themeFamilyName !== 'serif') || (themeFamilyName === 'sans' && category === 'sans-serif') || (themeFamilyName === 'serif' && category === 'serif')) {
                webfontOptions.push({
                    label:'────────── '+category,
                    value:''
                })
                Object.keys(this.props.webfonts[category]).sort().forEach((family) => {
                    webfontOptions.push({
                        label:family,
                        // eslint-disable-next-line
                        value:"'"+family+"'"+', '+category,
                        id:this.props.webfonts[category][family]
                    })
                })
            }
        });


        return (
            <Select style={{padding:'8px'}} onChange={this.props.onFontSelect}>
                {webfontOptions.map((option, i) => {
                    return option.value === '' ? <option key={'font'+i} disabled value=''>{option.label}</option> : <option key={'font'+i} data-id={option.id} value={option.value}>{option.label}</option>
                })}
            </Select>
        )
    }

    render() {
	  	return (
            <Box pb={2}>
                <Label f={0} pl={1}>Choose from</Label>
                <Flex w={1} pb={3}>
                    <Box w={1/2} pr={2}>
                        {this.props.familyName === 'sans' &&
                            <Select style={{padding:'8px'}} onChange={this.props.onFontSelect}>
                                <option value=''>Browser Fonts...</option>
                                <option value='Arial, sans-serif'>Arial</option>
                                <option value='Arial Black, Arial Bold, Gadget, sans-serif'>Arial Black</option>
                                <option value="'avenir next', avenir, helvetica, arial, sans-serif">Avenir</option>
                                <option value='"Helvetica Neue", Helvetica, Arial, sans-serif'>Helvetica</option>
                                <option value='Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif'>Helvetica Based</option>
                                <option value='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'>System</option>
                                <option value='Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif'>Tahoma</option>
                                <option value='"Trebuchet MS", Verdana, "Verdana Ref", sans-serif'>Trebuchet</option>
                                <option value='"Segoe UI", Candara, "Bitstream Vera Sans", "DejaVu Sans", "Bitstream Vera Sans", "Trebuchet MS", Verdana, "Verdana Ref", sans-serif'>Trebuchet Based</option>
                                <option value='Verdana, "Verdana Ref", sans-serif'>Verdana</option>
                                <option value='Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif'>Verdana Based</option>
                            </Select>
                        }
                        {this.props.familyName === 'serif' &&
                            <Select style={{padding:'8px'}} onChange={this.props.onFontSelect}>
                                <option value=''>Browser Fonts...</option>
                                <option value='Baskerville, "Bookman Old Style", "Bitstream Charter", "Nimbus Roman No9 L", Garamond, "Apple Garamond", "ITC Garamond Narrow", "New Century Schoolbook", "Century Schoolbook", "Century Schoolbook L", Georgia, serif'>Baskerville</option>
                                <option value='"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace'>Courier</option>
                                <option value='Garamond, "Apple Garamond", "ITC Garamond Narrow", "New Century Schoolbook", "Century Schoolbook", "Century Schoolbook L", Georgia, serif'>Garamond</option>
                                <option value='Georgia, serif'>Georgia</option>
                                <option value='Constantia, "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", Georgia, serif'>Georgia Based</option>
                                <option value='"Palatino Linotype", Palatino, Palladio, "URW Palladio L", "Book Antiqua", Baskerville, "Bookman Old Style", "Bitstream Charter", "Nimbus Roman No9 L", Garamond, "Apple Garamond", "ITC Garamond Narrow", "New Century Schoolbook", "Century Schoolbook", "Century Schoolbook L", Georgia, serif'>Palatino</option>
                                <option value='Times, "Times New Roman", serif'>Times</option>
                                <option value='Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif'>Times Based</option>
                            </Select>
                        }
                        {this.props.familyName !== 'sans' && this.props.familyName !== 'serif' &&
                            <Select style={{padding:'8px'}} onChange={this.props.onFontSelect}>
                                <option value=''>Browser Fonts...</option>
                                <option disabled> </option>
                                <option disabled>────────── sans-serif</option>
                                <option value='Arial, sans-serif'>Arial</option>
                                <option value='Arial Black, Arial Bold, Gadget, sans-serif'>Arial Black</option>
                                <option value="'avenir next', avenir, helvetica, arial, sans-serif">Avenir</option>
                                <option value='"Helvetica Neue", Helvetica, Arial, sans-serif'>Helvetica</option>
                                <option value='Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif'>Helvetica Based</option>
                                <option value='Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif'>Tahoma</option>
                                <option value='"Trebuchet MS", Verdana, "Verdana Ref", sans-serif'>Trebuchet</option>
                                <option value='"Segoe UI", Candara, "Bitstream Vera Sans", "DejaVu Sans", "Bitstream Vera Sans", "Trebuchet MS", Verdana, "Verdana Ref", sans-serif'>Trebuchet Based</option>
                                <option value='Verdana, "Verdana Ref", sans-serif'>Verdana</option>
                                <option value='Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif'>Verdana Based</option>
                                <option disabled> </option>
                                <option disabled>────────── serif</option>
                                <option value=''>Browser Fonts...</option>
                                <option value='Baskerville, "Bookman Old Style", "Bitstream Charter", "Nimbus Roman No9 L", Garamond, "Apple Garamond", "ITC Garamond Narrow", "New Century Schoolbook", "Century Schoolbook", "Century Schoolbook L", Georgia, serif'>Baskerville</option>
                                <option value='"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace'>Courier</option>
                                <option value='Garamond, "Apple Garamond", "ITC Garamond Narrow", "New Century Schoolbook", "Century Schoolbook", "Century Schoolbook L", Georgia, serif'>Garamond</option>
                                <option value='Georgia, serif'>Georgia</option>
                                <option value='Constantia, "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", Georgia, serif'>Georgia Based</option>
                                <option value='"Palatino Linotype", Palatino, Palladio, "URW Palladio L", "Book Antiqua", Baskerville, "Bookman Old Style", "Bitstream Charter", "Nimbus Roman No9 L", Garamond, "Apple Garamond", "ITC Garamond Narrow", "New Century Schoolbook", "Century Schoolbook", "Century Schoolbook L", Georgia, serif'>Palatino</option>
                                <option value='Times, "Times New Roman", serif'>Times</option>
                                <option value='Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif'>Times Based</option>
                            </Select>
                        }
                    </Box>
                    <Box w={1/2} pl={2}>
                        {this.renderWebfontOptions(this.props.familyName)}
                    </Box>
                </Flex>
            </Box>
		)
	}
}

FontSelect.propTypes = {
    familyName: PropTypes.string.isRequired,
    familyValue: PropTypes.string.isRequired,
	onFontSelect: PropTypes.func.isRequired,
    webfonts: PropTypes.object.isRequired,
}

export default FontSelect;
