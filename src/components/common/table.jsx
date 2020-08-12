import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

// 향후 코드 재사용성을 높이기 위해 Table 컴포넌트를 분리
const Table = ({ columns, sortColumn, onSort, data }) => {
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
      <TableBody
        data={data}
        columns={columns}
      />
    </table>
  );
}

export default Table;

// const Table = (props) => {
//   const { columns, sortColumn, onSort, data } = props;
//   return ( ... );
// }

// 위아래 코드는 둘 다 동일. 아래 쪽이 Destructuring Arguments.

// const Table = ({ columns, sortColumn, onSort, data }) => {
//   return ( ... );
// }