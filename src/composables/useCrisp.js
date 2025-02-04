export function useCrisp() {
  const initCrisp = () => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "1ef80772-a00c-483e-b75a-ff974b7ceef3";

    const d = document;
    const s = d.createElement("script");
    s.src = "https://client.crisp.chat/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
  }

  return {
    initCrisp
  }
} 