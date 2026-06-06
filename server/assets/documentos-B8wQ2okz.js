import { K as jsxRuntimeExports } from "./server-BXTPVNas.js";
import { P as PageShell } from "./PageShell-D8GyjBD1.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./Footer-DdAX3tMn.js";
import "./router-C_Xmh1uq.js";
const driveLink = "https://drive.google.com/drive/folders/17v0uJ-LGNe2HY3ZksE1S7SsksfDhOLqo?usp=drive_link";
const gameLink = "https://github.com/dudamerg9-c/Rei_do_Malte";
const productionLink = "https://docs.google.com/spreadsheets/d/1cDFK6n1H72q6wRglz2V7nI3-1_TdOUq2rRyu6TXk6yM/edit?usp=sharing";
const links = [{
  title: "Todos os documentos estão aqui",
  description: "Acesse a pasta oficial do Google Drive com receitas, laudos, certificados e materiais da marca.",
  href: driveLink,
  cta: "Abrir pasta do Drive",
  badge: "📁 Drive oficial"
}, {
  title: "Jogo de Tabuleiro - Rei do Malte",
  description: "Consulte o repositório do jogo e acompanhe a evolução do projeto completo.",
  href: gameLink,
  cta: "Abrir repositório",
  badge: "🎲 Projeto do jogo"
}, {
  title: "Dados da produção de cerveja - Rei do Malte",
  description: "Acesse a planilha com os dados de produção para acompanhar o desempenho da cervejaria.",
  href: productionLink,
  cta: "Abrir planilha",
  badge: "📊 Produção"
}];
function Documentos() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { title: "Documentos", kicker: "Central de Material", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.35em] text-gold", children: "Materiais e referências" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-3xl md:text-4xl text-gradient-gold", children: "Tudo que você precisa para consultar e acompanhar o projeto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm md:text-base leading-7 text-[color:var(--muted-foreground)]", children: "Centralizamos aqui os links principais para documentos, o repositório do jogo e os dados de produção." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3", children: links.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "glass-strong rounded-[28px] p-6 flex h-full flex-col justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.35em] text-gold", children: link.badge }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-2xl text-gradient-gold", children: link.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-7 text-[color:var(--muted-foreground)]", children: link.description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: link.href, target: "_blank", rel: "noreferrer", className: "mt-6 inline-flex items-center justify-center gap-2 rounded-xl gradient-gold px-5 py-3 text-sm font-semibold text-[color:var(--navy-deep)] glow-gold-strong", children: [
        link.cta,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "↗" })
      ] })
    ] }, link.title)) })
  ] }) });
}
export {
  Documentos as component
};
