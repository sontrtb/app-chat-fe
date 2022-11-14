
function checkTypeFile(url) {

    if(!url)
        return null;
    
    var ext = url.split('.').pop().toLowerCase();
    if (ext === 'jpg' || ext === 'jpeg' || ext === 'png' || ext === 'gif') {
        return 'image';
    } else if (ext === 'mp4' || ext === 'ogg' || ext === 'webm') {
        return 'video';
    } else if (ext === 'mp3' || ext === 'wav') {
        return 'audio';
    } else {
        return 'file';
    }
}

export default checkTypeFile;