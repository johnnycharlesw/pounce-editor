export default (filename, blob) => {
    const downloadLink = document.createElement('a');
    document.body.appendChild(downloadLink);
    if ('download' in HTMLAnchorElement.prototype) {
        const url = window.URL.createObjectURL(blob);
        downloadLink.href = url;
        downloadLink.download = filename;
        downloadLink.type = blob.type;
        downloadLink.click();
        document.body.removeChild(downloadLink);
        window.URL.revokeObjectURL(url);
    }

};
