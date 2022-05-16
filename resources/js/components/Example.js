import React, { Component } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import ReactDOM from 'react-dom';
import '../../css/app.css';
import axios from 'axios';
import Vapor from 'laravel-vapor'
import { Upload } from '../api/Index';
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
        files:[],
    };
  }
  handleInit() {
      console.log('FilePond instance has initialised', this.pond);
    }
render() {
  return (
      <div className="App">
      
          {/* <h1>File Uploads </h1> */}
          <FilePond

            files={this.state.files}
            onupdatefiles={(e) => {
                this.setState({
                    files:e
                })
            }}
            allowMultiple={true}
            maxFiles={3}
            
            server={{
                process: (fieldName, file, metadata, load, error, progress, abort, transfer, options) =>{
                    
                    const formData = new FormData();
                    formData.append(fieldName, file, file.name);
                console.log('fff',file);
                // axios.post('http://localhost:8000/api/upload-file', formData)
                Upload(formData)
                .then(res => {
                    console.log('response',res);
                    load('test');
                  }).catch (e => {
                      console.error('failure',e);
                  });
                //   console.log('33',file.name);
                  Vapor.store(file, {
                      progress: progress => {
                          this.uploadProgress = Math.round(progress * 100);
                         this.visibility='public-read';
                    }
                }).then(response => {
                    console.log('99',response);
                    axios.post('/api/upload-file', {
                        uuid: response.uuid,
                        key: response.key,
                        bucket: response.bucket,
                        name: file.name,
                        content_type: file.type,
                    })
                });
                },
                revert: './revert',
                restore: './restore/',
                load: './load/',
                fetch: './fetch/',
            }}
            name="files"
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            labelFileProcessingComplete ='Upload complete'
            labelButtonProcessItem = 'Upload'
            labelFileProcessing ='Uploading'
            labelFileProcessingAborted= 'Upload cancelled'


        />
          
      </div>
  );
}

}

export default Example;


// if (document.getElementById('example')) {
//     ReactDOM.render(<Example />, document.getElementById('example'));
// }
