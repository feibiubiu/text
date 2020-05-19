<template>
  <div>
    <div class="dropzone" id="myid" action="/url">
      <input type="file" name="file" />
    </div>
  </div>
</template>
<script>
import Dropzone from "dropzone";
import "dropzone/dist/dropzone.css";

export default {
  data() {
    return {};
	},
	mounted(){
		const element = document.getElementById('myid')
		const vm = this
	// var a	= new Dropzone(element, {
  //     clickable: this.clickable,
  //     thumbnailWidth: this.thumbnailWidth,
  //     thumbnailHeight: this.thumbnailHeight,
  //     maxFiles: this.maxFiles,
  //     maxFilesize: this.maxFilesize,
  //     dictRemoveFile: 'Remove',
  //     addRemoveLinks: this.showRemoveLink,
  //     acceptedFiles: this.acceptedFiles,
  //     autoProcessQueue: this.autoProcessQueue,
  //     dictDefaultMessage: '<i style="margin-top: 3em;display: inline-block" class="material-icons">' + this.defaultMsg + '</i><br>Drop files here to upload',
  //     dictMaxFilesExceeded: '只能一个图',
  //     previewTemplate: '<div class="dz-preview dz-file-preview">  <div class="dz-image" style="width:' + this.thumbnailWidth + 'px;height:' + this.thumbnailHeight + 'px" ><img style="width:' + this.thumbnailWidth + 'px;height:' + this.thumbnailHeight + 'px" data-dz-thumbnail /></div>  <div class="dz-details"><div class="dz-size"><span data-dz-size></span></div> <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>  <div class="dz-error-message"><span data-dz-errormessage></span></div>  <div class="dz-success-mark"> <i class="material-icons">done</i> </div>  <div class="dz-error-mark"><i class="material-icons">error</i></div></div>',
  //     init() {
  //       const val = vm.defaultImg
  //       if (!val) return
  //       if (Array.isArray(val)) {
  //         if (val.length === 0) return
  //         val.map((v, i) => {
  //           const mockFile = { name: 'name' + i, size: 12345, url: v }
  //           this.options.addedfile.call(this, mockFile)
  //           this.options.thumbnail.call(this, mockFile, v)
  //           mockFile.previewElement.classList.add('dz-success')
  //           mockFile.previewElement.classList.add('dz-complete')
  //           vm.initOnce = false
  //           return true
  //         })
  //       } else {
  //         const mockFile = { name: 'name', size: 12345, url: val }
  //         this.options.addedfile.call(this, mockFile)
  //         this.options.thumbnail.call(this, mockFile, val)
  //         mockFile.previewElement.classList.add('dz-success')
  //         mockFile.previewElement.classList.add('dz-complete')
  //         vm.initOnce = false
  //       }
  //     },
  //     accept: (file, done) => {
  //       /* 七牛*/
  //       // const token = this.$store.getters.token;
  //       // getToken(token).then(response => {
  //       //   file.token = response.data.qiniu_token;
  //       //   file.key = response.data.qiniu_key;
  //       //   file.url = response.data.qiniu_url;
  //       //   done();
  //       // })
  //       done()
  //     },
  //     sending: (file, xhr, formData) => {
  //       // formData.append('token', file.token);
  //       // formData.append('key', file.key);
  //       vm.initOnce = false
  //     }
  //   })
	}
};
</script>
<style lang="scss">
	.dropzone{
		width:300px;
	}
</style>