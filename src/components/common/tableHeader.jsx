import React, { Component } from 'react';

// columns: array
// sortColumn: object
// onSort: function

export default class TableHeader extends Component {
  // 부모 컴포넌트에 정렬 이벤트 발생을 알리는 함수
  // 부모 컴포넌트에서 정렬을 시도하면 되긴 하지만 역정렬은 안 됨
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };

    if (sortColumn.path === path) // 정렬할 컬럼명이 기존과 같다면 역정렬
      sortColumn.order = (sortColumn.order === "asc") ? "desc" : "asc";
    else { // 정렬할 컬럼명이 기존과 다르면 역정렬하지 않음
      sortColumn.path = path;
      sortColumn.order = "asc";
    }

    this.props.onSort(sortColumn);
  };

  // column 클릭 시 오름차순 및 내림차순 아이콘을 표시하는 태그 반환
  // 이 아이콘에 대해선 https://fontawesome.com/v4.7.0/icon/sort-asc 참고
  renderSortIcon = (column) => {
    const { sortColumn } = this.props;

    if (column.path !== sortColumn.path) return null;

    if (sortColumn.order === 'asc') return <i className="fa fa-sort-asc" />
    return <i className="fa fa-sort-desc" />
  }

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th
              key={column.path || column.key} // column.path 값을 지정하되 그렇지 않으면 column.key 값을 지정
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}