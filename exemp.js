// A arquitetura de pastas é uma basica mesmo
// Ou seja, cada pasta tem sua função

const public = "Aqui vai ficar coisas de fora (imgs, muscias, videos, etc)";
const src = { 
  definição: "Agr a gente ta entrando mesmo no codigo",
  app: "Define as rotas das paginas, ou seja, para cada nova página, sera criada uma nova pasta no app ex: app/ => ror.com; app/compra/ => ror.com/compra.html",
  components: "Aqui fica os componentes da aplicação, vamo separar por pagina pra ficar algo masi facil",
  functions: "Aqui vai ficar qualquer função, hook novo, função muito grande (ou reutilizavel), fica tudo aqui",
  services: "Coisas relacionadas ao back-end, conexão com o arduino, isso a gnete vai vendo",
  utils: "Tudo que não se encaixar nas outras, tipagem por exemplo"
}