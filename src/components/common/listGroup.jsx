import React from 'react';

const ListGroup = (props) => {
  const {
    items, // 장르 데이터
    textProperty, // 장르 name
    valueProperty, // 장르 _id
    selectedItem, // 선택한 장르
    onItemSelect // 장르 선택 이벤트 처리기
  } = props;

  return (
    /* Bootstrap List Group */
    <ul className="list-group">
      {/* 장르 리스트 생성 */}
      {items.map(item =>
        <li
          key={item[valueProperty]} // item[valueProperty]는 item._id와 동일
          onClick={() => onItemSelect(item)}
          className={item === selectedItem ? "list-group-item active" : "list-group-item"}
        >
          {item[textProperty]} {/* item[textProperty]는 item.name과 동일 */}
        </li>)}
    </ul>
  );
}

// Default Props: Props 값이 지정되지 않았을 때 설정할 기본값
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
}

export default ListGroup;