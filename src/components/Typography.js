import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Relative, Absolute, Border, Subhead, Text, Small, Input, Link } from 'rebass';
import FontAdd from './FontAdd';
import FontEdit from './FontEdit';
import FontWeights from './FontWeights';

// Browser Font Stacks from: 
//   https://css-tricks.com/snippets/css/font-stacks/
//   http://www.cssfontstack.com/

class Typography extends React.Component {
	constructor() {
		super();
		this.renderFontFamilies = this.renderFontFamilies.bind(this);
		this.renderTypeScale = this.renderTypeScale.bind(this);
		this.translateFontCategory = this.translateFontCategory.bind(this);
		this.state = {webfonts:[]}
	}

	componentWillMount() {
        fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDMBrW9DuEgG32TV_YWHHOEtHE8njtVAO8&sort=popularity')
            .then((response) => {
                return response.json();
            })
            .then((fontsData) => {
                let webfonts = {};
                if (typeof fontsData.items !== undefined) {
                    fontsData.items.slice(0,149).forEach((font) => {
                    	if (font.category !== 'display') {
                    		let fontCategory = this.translateFontCategory(font.category)
                    		if (typeof webfonts[fontCategory] === 'undefined') {
	                            webfonts[fontCategory] = {}
	                        }
	                        webfonts[fontCategory][font.family] = font.family.split(' ').join('+');
                    	}
                    })
                } else {
                    throw new Error('Could not load webfonts from googleapis.com');
                }
                this.setState({webfonts:webfonts});
            });
    }

    translateFontCategory(cat) {
    	if (cat === 'handwriting') {
    		return 'cursive';
    	} else {
    		return cat;
    	}
    }

	renderFontFamilies(key) {
		const fontName = key;
		const fontFamily = this.props.theme.fontFamilies[key];
		return (
			<Box key={fontName} w={1} pt={3} pb={4} pr={2} style={{fontFamily:fontFamily}}>
				<Relative p={this.props.editMode ? 4 : 0} style={{borderRadius: '4px', border: this.props.editMode ? 'solid 1px #ddd' : 'none'}}>
					<Text>{fontName}</Text>
					{this.props.editMode &&
						<Text py={4} f={4}>{fontFamily}</Text>
					}
	    			<Text is='div' py={2} f={5}>The quick brown fox jumps over the lazy dog.</Text>
	    			{this.props.editMode &&
	    				<Absolute top right pt={2}>
			    			<Link p={3} f={3} href='#' data-font={fontName} color={this.props.theme.colors.red6 || 'indianred'} style={{fontFamily:this.props.theme.fontFamilies.sans || 'sans-serif', textDecoration:'none', fontWeight:'bold'}} onClick={this.props.deleteFont}>×</Link>
				    	</Absolute>
				    }
		    		{this.props.editMode &&
		    			<FontEdit theme={this.props.theme} fontName={fontName} editFont={this.props.editFont} webfonts={this.state.webfonts} />
					}
					<Box style={{fontFamily:fontFamily}}>
						<FontWeights />
						{!this.props.editMode &&
							<Flex pt={2}>
								<Border mr={2}>
									<Text py={1} px={3} f={4}>Aa</Text>
									<Border py={1} px={3} top>
										<Small color='gray'>Reg</Small>
									</Border>
								</Border>
								<Border mr={2}>
									<Text py={1} px={3} bold f={4}>Aa</Text>
									<Border py={1} px={3} top>
										<Small color='gray'>Bold</Small>
									</Border>
								</Border>
								<Border mr={2}>
									<Text py={1} px={3} f={4}><em>Aa</em></Text>
									<Border pt={1} pb={2} px={3} top>
										<Small color='gray'>Italic</Small>
									</Border>
								</Border>
							</Flex>
						}
						<Text color='gray' f={0} py={2}>{fontFamily}</Text>
					</Box>
				</Relative>
    		</Box>
	    )
	}

	renderTypeScale(size, i) {
		return (
			<Box key={'f'+size} w={[1/2,1/4]} style={{minHeight:'140px'}} pb={2} pr={2}>
				<Border style={{height:'100%'}}>
					<Border py={1} px={3} bottom>
						{this.props.editMode ? (
							<Relative w={1}>
								<Text center>
									<Input w={36} onBlur={this.props.editTypeScale} data-scale={i} f={0} defaultValue={this.props.theme.fontSizes[i]} style={{textAlign:'center'}} />
								</Text>
								<Absolute top right><Text f='18px' onClick={this.props.deleteTypeScale} data-scale={i} color={this.props.theme.colors.red6 || 'indianred'} is='a' href='#' p={2} children='×' style={{border:'none',marginRight:'-12px',marginTop:'-2px',textDecoration:'none'}} /></Absolute>
							</Relative>
						) : (
							<Text center>
								<Small color='gray' children={size} />
							</Text>
						)}
					</Border>
					<Flex align='center' style={{height:'75%'}}>
						<Box mx='auto'>
							<Text py={1} px={3} f={size}>Aa</Text>
						</Box>
					</Flex>
				</Border>
			</Box>
		)
	}

	render() {
	  	return (
		    <Box id="typography" pb={5}>
		    	<Subhead py={2} caps f={0} color={this.props.theme.colors.base}>Typography</Subhead>
		    	<Subhead pt={2}>Font Families</Subhead>
		    	<Flex py={3} wrap>
		    		{Object.keys(this.props.theme.fontFamilies).map(this.renderFontFamilies)}
		    	</Flex>
		    	{this.props.editMode &&
		    		<FontAdd theme={this.props.theme} addFont={this.props.addFont} webfonts={this.state.webfonts} />
	    		}
	    		<Subhead pt={2}>Type Scale</Subhead>
		    	{this.props.editMode &&
		    		<Box style={{textAlign:'right'}} p={2}>
		    			<form onSubmit={this.props.addTypeScale}>
				    		<Input p={2} w={48} mr={2} name='fontSize' style={{textAlign:'center'}} />
				    		<Input px={3} py={2} w='auto' style={{fontWeight:'bold'}} f={1} bg={this.props.theme.colors.green7 || this.props.theme.colors.base} color='white' type='submit' defaultValue='+ New Scale' />
			    		</form>
					</Box>
				}
	    		<Flex py={3} wrap>
		    		{this.props.theme.fontSizes.map(this.renderTypeScale)}
		    	</Flex>
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
	    editMode: PropTypes.bool.isRequired,
	};
}

export default Typography;
