import React from 'react';
import palx from 'palx';
import chroma from 'chroma-js';
import jc from 'json-cycle';
import { Provider, Flex, Box, Border, Heading, Subhead, Text, Link, Button, ButtonOutline, ButtonTransparent, Card, Media, Panel, PanelHeader, Image, BackgroundImage } from 'rebass';
import themes from '../themes/Themes';
import ThemeContainer from './ThemeContainer';
import Header from './Header';
import Article from './Article';

const matchNum = new RegExp(/(\d)/);
const numberWords = ['zero','one','two','three','four','five','six','seven','eight','nine','ten'];

class App extends React.Component {
	constructor() {
		super();

		this.editFont = this.editFont.bind(this);
		this.deleteFont = this.deleteFont.bind(this);
		this.addFont = this.addFont.bind(this);
		this.updateBaseColor = this.updateBaseColor.bind(this);
		this.updateColorValue = this.updateColorValue.bind(this);
		this.renameColor = this.renameColor.bind(this);
		this.addColor = this.addColor.bind(this);
		this.deleteColor = this.deleteColor.bind(this);
		this.getNewColors = this.getNewColors.bind(this);
		this.getSpectrum = this.getSpectrum.bind(this);
		this.getColorState = this.getColorState.bind(this);
		this.getPalette = this.getPalette.bind(this);
		this.getPaletteSorted = this.getPaletteSorted.bind(this);
		this.editTypeScale = this.editTypeScale.bind(this);
		this.deleteTypeScale = this.deleteTypeScale.bind(this);
		this.addTypeScale = this.addTypeScale.bind(this);
		this.getRandomColor = this.getRandomColor.bind(this);
		this.selectTheme = this.selectTheme.bind(this);
		this.editThemeName = this.editThemeName.bind(this);
		this.themes = themes;

		this.state = Object.assign(themes['Slate'],this.getColorState(themes['Slate'].colors),{themeName:'My Theme Name'});
	}

	componentWillUpdate(nextProps, nextState) {
		localStorage.setItem('savedTheme',JSON.stringify(jc.decycle(nextState)));
	}

	componentWillMount() {
		const savedTheme = localStorage.getItem('savedTheme');
		if (savedTheme) {
			this.setState(JSON.parse(savedTheme));
		}
	}

	resetTheme() {
		this.setState(Object.assign(themes['Slate'],this.getColorState(themes['Slate'].colors),{themeName:'My Theme Name'}));
	}

	editFont(fontName, fontValue, webfontId) {
		let newFontFamilies = Object.assign({}, this.state.fontFamilies);
		newFontFamilies[fontName] = fontValue;
		let newWebfonts = this.state.webfonts || {};
		if (webfontId) {
			newWebfonts[fontName] = webfontId;
		}
		this.setState({ fontFamilies: newFontFamilies, webfonts: newWebfonts });
	}

	deleteFont(e) {
		e.preventDefault();
		let newFontFamilies = Object.assign({}, this.state.fontFamilies);
		delete newFontFamilies[e.target.dataset.font];

		let newWebfonts = this.state.webfonts || {};
		if (typeof newWebfonts[e.target.dataset.font] !== 'undefined') {
			delete newWebfonts[e.target.dataset.font];
		}
		this.setState({ fontFamilies: newFontFamilies, webfonts: newWebfonts });
	}

	addFont(font, webfontId) {
		let newWebfonts = this.state.webfonts || {};
		if (webfontId) {
			newWebfonts[Object.keys(font)[0]] = webfontId;
		}
		this.setState({ fontFamilies: Object.assign(this.state.fontFamilies, font), webfonts: newWebfonts });
	}

	editTypeScale(e) {
		let newFontSizes = this.state.fontSizes;
		newFontSizes[e.target.dataset.scale] = parseInt(e.target.value, 10);
		this.setState({ fontSizes: newFontSizes });
	}

	addTypeScale(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		let fontSizes = this.state.fontSizes;
		fontSizes.push(parseInt(formData.get('fontSize'),10));
		fontSizes.sort(function (a,b) { return parseInt(a,10) - parseInt(b,10) })
		this.setState({ fontSizes: fontSizes });
	}

	deleteTypeScale(e) {
		e.preventDefault();
		let newTypeScale = this.state.fontSizes.slice();
	    newTypeScale.splice(parseInt(e.target.dataset.scale, 10), 1); //remove element
		this.setState({ fontSizes: newTypeScale });
	}

	updateBaseColor(e) {
		this.setState(this.getColorState(this.getNewColors(e.target.value)));
	}

	getPalette(colors) {
		let palette = {};
		Object.keys(colors).sort().forEach(name => {
			if (matchNum.test(name.slice(-1))) {
				let mainColor = name.slice(0, -1);

				if (palette[mainColor] && palette[mainColor].spectrum && palette[mainColor].spectrum.length < 10) {
					palette[mainColor].spectrum.push(colors[name]);
				} else {
					palette[mainColor].spectrum = [colors[name]]
				}
			} else {
				if (palette[name]) {
					palette[name].main = colors[name];
				} else {
					palette[name] = {main: colors[name]};
				}
			}
		});
		return palette;
	}

	getPaletteSorted(colors) {
		const palette = this.getPalette(colors);
		return Object.keys(palette).sort((a,b) => {
			if (a === 'base') {
				return -1
			} else if (palette[a].spectrum && !palette[b].spectrum) {
				return 1;
			} else if (palette[b].spectrum && !palette[a].spectrum) {
				return -1
			} else {
				if (a < b) {
					return -1;
				}
				if (a > b) {
					return 1;
				}
				return 0;
			}
		})
	}

	deleteColor(e) {
		e.preventDefault();
		let newColors = Object.assign({}, this.state.colors);
		delete newColors[e.target.dataset.color];
		[...Array(10).keys()].forEach((i) => {
		    delete newColors[e.target.dataset.color+i];
		});
		this.setState(this.getColorState(newColors));
	}

	renameColor(e) {
		e.preventDefault();
		if (e.target.value === '') {
			e.target.value = e.target.dataset.colorname;
		} else {
			let newColors = Object.assign({}, this.state.colors);
			newColors[e.target.value] = this.state.colors[e.target.dataset.colorname];
			[...Array(10).keys()].forEach((i) => {
				if (this.state.colors[e.target.dataset.colorname+i]) {
					newColors[e.target.value+i] = this.state.colors[e.target.dataset.colorname+i];
			    	delete newColors[e.target.dataset.colorname+i];
				}
			});
	    	delete newColors[e.target.dataset.colorname];
			this.setState(this.getColorState(newColors));
		}
	}

	updateColorValue(e) {
		e.preventDefault();
		if (e.target.value === '') {
			e.target.value = e.target.dataset.colorvalue;
		} else {
			let newColors = Object.assign({}, this.state.colors);
			newColors[e.target.dataset.colorname] = e.target.value;
			if (typeof newColors[e.target.dataset.colorname+'0'] !== 'undefined') {
				Object.assign(newColors, this.getSpectrum(e.target.value, e.target.dataset.colorname));
			}
			this.setState(this.getColorState(newColors));
		}
	}

	addColor(color, applySpectrum) {
		const colorName = Object.keys(color)[0];

		let newColors = Object.assign(this.state.colors, color);

		if (applySpectrum) {
			Object.assign(newColors, this.getSpectrum(color[colorName], colorName))
		}
		
		this.setState(this.getColorState(newColors));
	}

	getSpectrum(hex, colorName) {
		let spectrum = {};
		const lums = [
			9,
			8,
			7,
			6,
			5,
			4,
			3,
			2,
			1,
			0
		].map(n => n + .5).map(n => n / 10);

		const shades = lums.map(lum => {
			return chroma(hex).luminance(lum).hex()
		});
		shades.forEach((shade, i) => {
			let shadeColor = {};
			shadeColor[colorName + i] = shade;
			spectrum = Object.assign(spectrum, shadeColor)
		});
		return spectrum;
	}

	getColorState(colors) {
		return({
			colors: colors,
			palette: this.getPalette(colors),
			paletteSorted: this.getPaletteSorted(colors),
		})
	}

	getRandomColor() {
		const mainColors = Object.keys(this.state.colors).filter(colorName => {
			return !matchNum.test(colorName) && colorName !== 'white' && colorName !== 'black' && colorName !== 'base' && colorName !== 'gray';
		});
		return this.state.colors[mainColors[Math.floor(Math.random()*mainColors.length)]];
	}

	getNewColors(base) {
		const palette = palx(base)

		const flattened = Object.keys(palette)
			.reduce((a, key) => {
				const value = palette[key]
				if (matchNum.test(key.slice(-1))) {
					key = key.slice(0,-1) + ' ' + numberWords[parseInt(key.slice(-1),10)]
				}
				if (Array.isArray(value)) {
					a[key] = value[5]
					value.forEach((val, i) => {
						a[key + i] = val
					})
				} else {
					a[key] = value
				}
				return a
			}, {})

		return Object.assign({}, flattened, {
		  black: '#000',
		  white: '#fff'
		})
	}

	selectTheme(e) {
		this.setState(Object.assign(this.themes[e.target.value],this.getColorState(this.themes[e.target.value].colors)));
		e.target.selectedIndex = 0;
	}

	editThemeName(e) {
		this.setState({themeName:e.target.value});
	}

	render() {
		return(
			<Provider theme={this.state}>
				<Header style={{height:'5vh'}} theme={this.state} />
				<div style={{fontFamily:this.state.fontFamilies[Object.keys(this.state.fontFamilies)[0]]}}>
					<Flex wrap>
						<Box className="container-theme" p={[3,4]}>
							<ThemeContainer themes={this.themes} selectTheme={this.selectTheme} editThemeName={this.editThemeName} selectFontFamily={this.selectFontFamily} addFont={this.addFont} deleteFont={this.deleteFont} editFont={this.editFont} editTypeScale={this.editTypeScale} deleteTypeScale={this.deleteTypeScale} addTypeScale={this.addTypeScale} updateBaseColor={this.updateBaseColor} updateColorValue={this.updateColorValue} renameColor={this.renameColor} addColor={this.addColor} deleteColor={this.deleteColor} getRandomColor={this.getRandomColor} theme={this.state} />
							<Box p={4} mt={4}>
							<Text p={4} m={4} right>
								<Text is='span' mx={3}>Made by <Link color={this.state.colors.base} href="https://github.com/johnpolacek" children="John Polacek" /></Text>
								<Text is='span' color={this.state.colors.gray3 || 'gray'}> | </Text>
								<Link color={this.state.colors.base} mx={3} href="http://twitter.com/johnpolacek" children="@johnpolacek" />
								<Text is='span' color={this.state.colors.gray3 || 'gray'}> | </Text>
								<Link color={this.state.colors.base} ml={3} href="http://johnpolacek.com" children="johnpolacek.com" /></Text>
							</Box>
						</Box>
						<Border className="container-components" p={[3,4]} left>
							<Border bottom mb={4}>
								<Heading pb={3}>
									Components
								</Heading>
							</Border>
							<Subhead py={2} caps f={0} color={this.state.colors.base}>Article</Subhead>
							<Box w={9/10}>
								<Article blockquoteColor={this.getRandomColor()} theme={this.state} />
							</Box>
							<Border top my={4} w={1} />
							<Subhead py={2} caps f={0} color={this.state.colors.base}>Button</Subhead>
							<Box pt={3} pb={2}>
								{this.state.paletteSorted.map((color) => {
									if (color !== 'white') {
										return <Button key={color} bg={color} children={color.charAt(0).toUpperCase() + color.slice(1)} mr={2} mb={2} />
									} else {
										return false;
									}
								})}
							</Box>
							<Box py={2}>
								{this.state.paletteSorted.map((color) => {
									if (color !== 'white') {
										return <ButtonOutline key={color} color={color} children={color.charAt(0).toUpperCase() + color.slice(1)} mr={2} mb={2} />
									} else {
										return false;
									}
								})}
							</Box>
							<Border top my={4} w={1} />
							<Subhead py={2} caps f={0} color={this.state.colors.base}>Card</Subhead>
							<Card mt={3}>
								<BackgroundImage
									ratio={3/8}
									src='http://placehold.it/480x180'
								/>
								<Box p={4}>
									<Subhead pb={2}>
										Card Subhead
									</Subhead>
									<Text pb={3} style={{fontFamily:this.state.fontFamilies[Object.keys(this.state.fontFamilies)[1]]}}>We need a paradigm shift beef up, for game plan driving the initiative forward this is a no-brainer.</Text>
									<Button bg={this.getRandomColor()} href='http://jxnblk.com/rebass/getting-started' is='a'>Learn more</Button>
								</Box>
							</Card>
							<Border top my={4} w={1} />
							<Subhead py={2} caps f={0} color={this.state.colors.base}>Media</Subhead>
							<Media py={3}>
								<Image
									mr={3}
									width={128}
									height={128}
									src='http://placehold.it/160x160'
								/>
								<Box pl={2}>
									<Subhead pb={2} w={1}>Media Heading</Subhead>
									<Text w={1} style={{fontFamily:this.state.fontFamilies[Object.keys(this.state.fontFamilies)[1]]}}>We need a paradigm shift at the end of the day. On-brand productize bells and whistles. Success is a strategic fit.</Text>
								</Box>
							</Media>
							<Border top my={4} w={1} />
							<Subhead py={2} caps f={0} color={this.state.colors.base}>Panel</Subhead>
							<Flex wrap mt={3}>
								{this.state.paletteSorted.slice(3, 9).map((color) => {
										return (
											<Box key={'panel'+color} w={1/2}>
												<Panel mr={3} mb={3} color={this.state.colors[color]}>
													<PanelHeader
														py={2}
														px={3}
														color='white'
														bg={this.state.colors[color]}>
														Panel Heading
													</PanelHeader>
													<Box p={3}>
														<Text style={{fontFamily:this.state.fontFamilies[Object.keys(this.state.fontFamilies)[1]]}} color={this.state.colors.black}>Drill down nail jelly to the hothouse wall quick-win then put these last issues to bed.</Text>
														<Text pt={3} is='div' right>
															<ButtonTransparent is='a' mr={2}>Cancel</ButtonTransparent>
															<Button is='a' bg={this.state.colors[color]}>Apply</Button>
														</Text>
													</Box>
												</Panel>
											</Box>
										)
									})}
							</Flex>
						</Border>
					</Flex>	
				</div>
				{
		    		this.state.webfonts && Object.keys(this.state.webfonts).map((fontName) => {
						return (
							<link key={this.state.webfonts[fontName]} rel='stylesheet' href={"https://fonts.googleapis.com/css?family="+this.state.webfonts[fontName]+":100,200,300,400,500,600,700,800,900"} />
						)
					})
				}
			</Provider>
		)
	}
}

export default App;
