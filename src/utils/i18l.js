import langaugeconfig from "./lang.json"

const I18n = (keyword) => {
    const lang = localStorage.getItem("lang") || "en" ; 
    return langaugeconfig[lang][keyword];
}

export default I18n;