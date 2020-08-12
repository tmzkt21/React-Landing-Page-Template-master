const movies = [
  {
    id: "5B91E18D48190A9B45867AA9634B5C66",
    title: "기생충",
    genre: { _id: "8826D329FF117EB2559BE04D3DFE330F", name: "블랙 코미디" },
    release: "2019-05-30",
    liked: true
  },
  {
    id: "6526C7787216CB1AF215AC7D1AAA313F",
    title: "라이온 킹",
    genre: { _id: "DD0F413993B0AFD5C8493BCD27E73C21", name: "애니메이션" },
    release: "2019-07-17"
  },
  {
    id: "777B51C04E767A8F8B1A60816F35B4D8",
    title: "날씨의 아이",
    genre: { _id: "DD0F413993B0AFD5C8493BCD27E73C21", name: "애니메이션" },
    release: "2019-10-31"
  },
  {
    id: "DC23B4878476C4E0745C1CC9399E2C61",
    title: "알라딘",
    genre: { _id: "DD63CD95D6DA4B7D098BD64249B23F43", name: "판타지" },
    release: "2019-05-23"
  },
  {
    id: "C7492C5CFC82BE87E37B59F14016EAAC",
    title: "나랏말싸미",
    genre: { _id: "3DA98E33E11A2F37662578A0E8710935", name: "역사" },
    release: "2019-07-24"
  },
  {
    id: "8185799F94A0F218DAFB3F2E9564E64E",
    title: "주전장",
    genre: { _id: "3DA98E33E11A2F37662578A0E8710935", name: "역사" },
    release: "2019-07-25"
  },
  {
    id: "2345E509E8BA2E3170AD4E48F11A3898",
    title: "어벤져스: 엔드게임",
    genre: { _id: "DD63CD95D6DA4B7D098BD64249B23F43", name: "판타지" },
    release: "2019-04-24"
  },
  {
    id: "DCA73F75B0F7D0EF28619496B07DC5DD",
    title: "봉오동 전투",
    genre: { _id: "3DA98E33E11A2F37662578A0E8710935", name: "역사" },
    release: "2019-08-07"
  },
  {
    id: "0529E582348EF19BA7CEEB942DF39A2E",
    title: "김복동",
    genre: { _id: "3DA98E33E11A2F37662578A0E8710935", name: "역사" },
    release: "2019-08-08"
  },
  {
    id: "DEB622A90089E684FC25D2FA9CDA7CD8",
    title: "코코",
    genre: { _id: "DD0F413993B0AFD5C8493BCD27E73C21", name: "애니메이션" },
    release: "2018-01-11"
  },
  {
    id: "F9B50D384A576F0EC8836C05723A0A6D",
    title: "너의 이름은",
    genre: { _id: "DD0F413993B0AFD5C8493BCD27E73C21", name: "애니메이션" },
    release: "2017-01-04"
  },
]

export function getMovies() {
  return movies;
}