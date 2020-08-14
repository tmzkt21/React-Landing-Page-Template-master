import React, { Component } from 'react';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { getMovies } from './services/movieService';
import { getGenres } from './services/genreService';
import { paginate } from './utils/paginate';
import MoviesTable from './moviesTable';
import _ from 'lodash';

export default class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1, // 현재 페이지 위치
    pageSize: 3, // 한 페이지에 보여줄 콘텐츠 개수
    sortColumn: { path: 'title', order: 'asc' }
  }

  componentDidMount() {
    const genres = [{ _id: "", name: 'All Genres' }, ...getGenres()]; // 장르 정보에 모든 장르 추가, All Genres에 _id 값을 주지 않으면 ListGroup 컴포넌트에서 map() 함수 사용 시 key 속성을 지정할 수 없게 되어 경고 발생.
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter(m => m.id !== movie.id);
    this.setState({ movies: movies });
    // this.setState({ movies }); // 위 코드와 동일. Modern JavaScript에서 키 값과 value가 서로 같으면 이렇게 표현 가능.
  }

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] }; // 없어도 작동하는데 왜...?
    movies[index].liked = !movies[index].liked;
    console.log(movies[index].liked);
    this.setState({ movies });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  }

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 }); // 장르가 바뀔 때마다 1페이지로 초기화해야 2페이지 이상 내용이 없는 장르가 제대로 표시됨
  }

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  }

  // 이 컴포넌트에서 사용하는 가공 데이터를 반환
  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      movies: allMovies
    } = this.state;

    // 선택된 장르와 일치하는 영화 데이터를 얻어옴
    // 1. selectedGenre와 그 _id 값이 모두 존재하는 장르는 All Genres를 제외한 장르이므로 ? 조건으로 진입
    // 2. All Genres는 _id값이 없으므로(값: "") ! 조건으로 진입
    const filtered = selectedGenre && selectedGenre._id
      ? allMovies.filter(m => m.genre._id === selectedGenre._id)
      : allMovies;

    // orderBy() 함수: 정렬된 배열 반환
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    // allMovies 대신 filtered 전달
    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  }

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortColumn } = this.state;

    if (count === 0) return <p>There are no movies in the database.</p>

    const { totalCount, data: movies } = this.getPagedData(); // State에 따라 필터링된 영화 정보를 얻어옴

    return (
      /* className이 row(행) 및 col(열)인 div 배치: Bootstrap Grid System */
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>

        <div className="col">
          <p>Showing {totalCount} movies in the database.</p>
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage} // 현재 페이지
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    )
  }
}