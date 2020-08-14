import React, { Component } from 'react';
import Pagination from './common/pagination';
import { paginate } from './utils/paginate';

export default class MoviesPage extends Component {
    getMovies = () => {
        const movies = [
            { id: 0, title: "기생충", genre: "블랙 코미디", release: "2019-05-30" },
            { id: 1, title: "라이온 킹", genre: "애니메이션", release: "2019-07-17" },
            { id: 2, title: "날씨의 아이", genre: "애니메이션", release: "2019-10-31" },
            { id: 3, title: "알라딘", genre: "판타지", release: "2019-05-23" },
            { id: 4, title: "나랏말싸미", genre: "역사", release: "2019-07-24" },
            { id: 5, title: "주전장", genre: "역사", release: "2019-07-25" },
            { id: 6, title: "어벤져스: 엔드게임", genre: "판타지", release: "2019-04-24" },
            { id: 7, title: "봉오동 전투", genre: "역사", release: "2019-08-07" },
            { id: 8, title: "김복동", genre: "역사", release: "2019-08-08" },
            { id: 9, title: "코코", genre: "애니메이션", release: "2018-01-11" },
        ]
        return movies;
    }

    state = {
        movies: this.getMovies(),
        pageSize: 3,
        currentPage: 1
    }

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    }

    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, movies: allMovies } = this.state;

        if (count === 0)
            return <p>There are no movies in the database.</p>

        const movies = paginate(allMovies, currentPage, pageSize); // 페이지 별로 아이템이 속한 배열을 얻어옴

        return (
            <React.Fragment>
                <p>showing {count} movies in the database.</p>

                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Release</th>
                    </tr>
                    </thead>
                    <tbody>
                    {movies.map(movie =>
                        <tr key={movie.id}>
                            <td>{movie.id}</td>
                            <td>{movie.title}</td>
                            <td>{movie.genre}</td>
                            <td>{movie.release}</td>
                        </tr>
                    )}
                    </tbody>
                </table>

                <Pagination
                    pageSize={pageSize}
                    itemsCount={count}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
                />
            </React.Fragment>
        );
    }
}