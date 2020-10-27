import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import ConfigurationDialog from './dialog/dialog';
import Sample from './sample/sample';
import CKEditor from '@ckeditor/ckeditor5-react';

// NOTE: Use the editor from source (not a build)!
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

const editorConfiguration = {
	plugins: [Essentials, Bold, Italic, Paragraph],
	toolbar: ['bold', 'italic'],
};

export default class App extends Component {
	state = {
		configuration: null,
	};
	render() {
		console.log(this.state.configuration);
		if (!this.state.configuration) {
			return (
				<ConfigurationDialog
					onSubmit={(configuration) => this.setState({ configuration })}
				/>
			);
		}

		return <Sample configuration={this.state.configuration} />;
	}
}
