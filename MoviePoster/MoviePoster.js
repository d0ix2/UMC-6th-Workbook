import { movies } from './movies.data.js'

const createMovieItem = (movie) => {
    const movieItemContainer = document.createElement('div') // 아이템 전체를 감쌈
    const moviePoster = document.createElement('div') // 영화 포스터 사진이 들어갈 자리
    const moviePosterImg = document.createElement('img') // 포스터 사진
    const movieTitleBox = document.createElement('div') // 제목, 평점 부분

    // 이미지 경로
    moviePosterImg.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`

    moviePoster.appendChild(moviePosterImg)
    movieItemContainer.appendChild(moviePoster)
    movieItemContainer.appendChild(movieTitleBox) 

    const movieTitle = document.createElement('p') // 영화 제목
    const movieReview = document.createElement('p') // 평점

    movieTitle.textContent = movie.title
    movieReview.textContent = `⭐️ ${movie.vote_average}`

    movieItemContainer.classList.add('movieItemContainer')
    moviePoster.classList.add('moviePoster')
    movieTitleBox.classList.add('movieTitleBox')
    movieTitle.classList.add('movieTitle')
    movieReview.classList.add('movieReview')

    movieTitleBox.appendChild(movieTitle)
    movieTitleBox.appendChild(movieReview)

    return movieItemContainer
}

// 맵 함수는 배열에만 사용 가능
function appendMovieItems () {
    const movieContainer = document.querySelector('.movieContainer')

    const movieItems = movies.results.map(createMovieItem)

    movieItems.forEach(movieItem => {
        movieContainer.appendChild(movieItem)
    })
}

// DOM이 로드된 후에 실행
window.addEventListener('DOMContentLoaded', appendMovieItems)