function UrlIfy({ text }) {
    text = text.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
    console.log(text);
    const regex = /(https?:\/\/[^\s]+)/g;
    const match = text.match(regex);
    if (match) {
        const ls = [];
        match.map((url, index) => {
            if (!ls.includes(url)) {
                ls.push(url);
                text = text.replaceAll(url, <a href="${url}" target="_blank">${url}</a>);
            }
        })
    }
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
}


export default UrlIfy;