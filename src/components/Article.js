import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text, Link, Blockquote } from 'rebass';

class Article extends React.Component {
	render() {
		return (
			<article>
				<Heading pb={2}>Article Heading</Heading>
				<Text style={{fontFamily:this.props.theme.fontFamilies[Object.keys(this.props.theme.fontFamilies)[1]]}}>Digital literacy innovation is hot right now yet deliverables deploy. Cloud strategy. <Link href='http://officeipsum.com/index.php' color={this.props.theme.colors.base}>Click here</Link> to find out more. Loop back value prop yields out of the loop granularity.</Text>
				<Blockquote f={5} style={{fontFamily:this.props.theme.fontFamilies[Object.keys(this.props.theme.fontFamilies)[1]]}} pl={4} py={3}><Text is='span' pr={1} style={{marginLeft:'-18px',opacity:.5}} color={this.props.blockquoteColor || this.props.theme.colors.base}>“</Text><Text is='span' color={this.props.blockquoteColor || this.props.theme.colors.base} style={{opacity:.75}}>Low-hanging fruit going forward to meet key milestones.</Text><Text is='span' pl={1} style={{opacity:.5}} color={this.props.blockquoteColor || this.props.theme.colors.base}>”</Text></Blockquote>
				<Text style={{fontFamily:this.props.theme.fontFamilies[Object.keys(this.props.theme.fontFamilies)[1]]}}>Your work on this project has been really impactful. Guerrilla marketing criticality bounce baseline the procedure and samepage your department timeframe.</Text>
			</article>
	  	)
	}

  	static propTypes = {
	   theme: PropTypes.object.isRequired,
	   blockquoteColor: PropTypes.string,
	};

}

export default Article;
