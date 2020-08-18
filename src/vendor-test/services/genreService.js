const genres = [
  { _id: "8826D329FF117EB2559BE04D3DFE330F", name: "블랙 코미디" },
  { _id: "DD0F413993B0AFD5C8493BCD27E73C21", name: "애니메이션" },
  { _id: "DD63CD95D6DA4B7D098BD64249B23F43", name: "판타지" },
  { _id: "3DA98E33E11A2F37662578A0E8710935", name: "역사" },
]

export function getGenres() {
  return genres.filter(g => g);
}