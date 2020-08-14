import React, { Component } from 'react';
import Table from './common/table';
import Like from './common/like';

// 역정렬 이벤트를 부모 컴포넌트에게 알리기 위해 클래스형 컴포넌트로 구현
// (함수형 컴포넌트로 구현한 후 부모 컴포넌트에서 역정렬을 시도하면 DOM에 반영되지 않음)
export default class MoviesTable extends Component {
  columns = [
    // 일반 컬럼: 
    { path: 'title', label: 'Title' },
    { path: 'genre.name', label: 'Genre' },
    { path: 'release', label: 'Release' },

    // Like 및 Delete는 Like 컴포넌트와 Button 태그를 보여주기 위해 content라는 속성에 JavaScript ES6 코드를 정의
    {
      key: 'like',
      content: movie => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
    },
    {
      key: 'delete',
      content: movie => <button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm">Delete</button>
    },
  ]

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}