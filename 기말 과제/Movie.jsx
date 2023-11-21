import React from 'react';
import boxofficeTarget from './api';
import './style.css';

const BoxOfficeList = () => {
  return (
    <div className="box-office-container">
      <h2 className="box-office-title">일별 박스오피스 순위</h2>
      <ul className="box-office-list">
        {boxofficeTarget[0].boxOfficeResult.dailyBoxOfficeList.map((movie) => (
          <li key={movie.rnum} className="box-office-item">
            <span style={{ fontSize: '1.2em', marginRight: '10px' }}>{movie.rank}위:</span>
            <span style={{ fontSize: '1.2em' }}>{movie.movieNm}</span><br/>- 매출액: {movie.salesAmt} 원
            <span style={{ fontSize: '1.2em' }}></span><br/>- 누적 관객수: {movie.audiAcc} 명
          </li>
        ))}
      </ul>
    </div>
  );
};
  
  export default BoxOfficeList;

