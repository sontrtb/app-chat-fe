

function UrlIfy({ text }) {
	if(!text) return null;
    text = text.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
    const regex = /(https?:\/\/[^\s]+)/g;
    const match = text.match(regex);
    var result = "";
    if (match) {
        match.map((url, index) => {
            let n = text.indexOf(url) + url.length;
            text = text.replace(url, `<a href="${url}" target="_blank">${url}</a>`);
            result += text.substring(0, n);
            text = text.substring(n);
        })
    }
    result += text;
    return <span dangerouslySetInnerHTML={{ __html: result }} />;
}


export default UrlIfy;