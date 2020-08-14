import _ from 'lodash';
//데이터를 페이지 별로 나누려면 각 페이지에 대응하는 데이터를 반환시켜주는 함수가 필요합니다.
// 아래 paginate 함수는 배열(items)을 입력받아
// pageNumber와 pageSize에 맞게 배열을 잘라 반환합니다.
export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize; // 자를 배열의 시작점

    return _(items)
        .slice(startIndex) // 시작점부터 배열을 자르되
        .take(pageSize) // pageSize만큼의 배열을 취함
        .value(); // lodash wrapper 객체를 regular 배열로 변환
}