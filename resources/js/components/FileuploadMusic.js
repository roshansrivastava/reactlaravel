import React, { Component } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import '../../css/app.css';
import axios from 'axios';
import Vapor from 'laravel-vapor';
import { Upload } from '../api/Index';
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

class FileuploadMusic extends Component {
	constructor(props) {
		super(props);

		this.state = {
			files: []
		};
	}
	handleInit() {
		console.log('FilePond instance has initialised', this.pond);
	}
	render() {
		return (
			<div className="App">
				<FilePond
					files={this.state.files}
					onupdatefiles={(e) => {
						this.setState({
							files: e
						});
					}}
					allowMultiple={true}
					maxFiles={3}
					allowRevert={true}
					allowProcess={false}
					maxParallelUploads={2}
					server={{
						process: (fieldName, file, metadata, load, error, progress, abort, transfer, options) => {
							const formData = new FormData();
							formData.append(fieldName, file, file.name);
							Upload(formData)
								.then((res) => {
									this.props.setMusicValues(res);
									load('test');
								})
								.catch((e) => {
									console.error('failure', e);
								});
							Vapor.store(file, {
								progress: (progress) => {
									this.uploadProgress = Math.round(progress * 100);
									this.visibility = 'public-read';
								}
							}).then((response) => {
								console.log('99', response);
								axios.post('/api/upload-file', {
									uuid: response.uuid,
									key: response.key,
									bucket: response.bucket,
									name: file.name,
									content_type: file.type
								});
							});
						},
						revert: './revert',
						restore: './restore/',
						load: './load/',
						fetch: './fetch/'
					}}
					name="files"
					labelIdle="Drag & Drop your files or <span class=&quot;filepond--label-action&quot;>Browse</span>"
					labelFileProcessingComplete="Upload complete"
					labelButtonProcessItem="Upload"
					labelFileProcessing="Uploading"
					labelFileProcessingAborted="Upload cancelled"
				/>
			</div>
		);
	}
}

export default FileuploadMusic;
