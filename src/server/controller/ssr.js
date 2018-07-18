
// SSR
import { renderToString } from "react-dom/server"
import { App } from "../../common/components"


module.exports = {
    renderSSRcomponent : (req,res) => {
        var RenderedAppToString = renderToString(<App />);
        var indexHTMLpage = fs.readFileSync('./public/index.html');
        var indexHTMLpageToString = indexHTMLpage.toString();
        var HTMLWithSSRComponentInIt = indexHTMLpageToString.replace("<!-- __APP__ -->",RenderedAppToString);
        res.send(HTMLWithSSRComponentInIt);
    }
}