import React, { useEffect } from "react";
import { MdMovieFilter } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";
import { BiSearch, BiMicrophone, BiCameraMovie } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { FaGlobeAmericas } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export default function home({ topFilms }) {
  return (
    <div className="home">
      <header>
        <div className="container">
          <div className="head">
            <div className="titleArea">
              <h1 className="title">
                CARIOK
                <BiCameraMovie />
              </h1>
              <p className="subtitle">Filmes e Series</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="headerInput">
            <BiSearch />
            <input type="text" placeholder="Search" />
            <div className="diviser"></div>
            <BiMicrophone className="micIcon" />
          </div>
          <div className="headerFilters grid">
            <h4 className="titleSection filterTitle">Filtros</h4>
            <div className="boxFilters flex">
              <div className="filter grid">
                <div className="logoFilter">
                  <RiMovie2Fill />
                </div>
                <p className="nameFilter">Filmes</p>
              </div>
              <div className="filter grid">
                <div className="logoFilter">
                  <MdMovieFilter />
                </div>
                <p className="nameFilter">Séries</p>
              </div>
              <div className="filter grid">
                <div className="logoFilter">
                  <AiFillStar />
                </div>
                <p className="nameFilter">Gênero</p>
              </div>
              <div className="filter grid">
                <div className="logoFilter">
                  <FaGlobeAmericas />
                </div>
                <p className="nameFilter">Idioma</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="content">
        <div className="sectionFilms topFilms">
          <div className="container">
            <h4 className="titleSection">Top Filmes</h4>
          </div>
          <div className="filmsList">
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              loop={true}
              breakpoints={{
                // when window width is >= 640px
                375: {
                  slidesPerView: 4,
                },
                480: {
                  slidesPerView: 5,
                },
                660: {
                  spaceBetween: 60,
                  slidesPerView: 6,
                },
                845: {
                  spaceBetween: 60,
                  slidesPerView: 7,
                },
              }}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {topFilms.map((film) => (
                <SwiperSlide>
                  <div className="imgFilme">
                    {" "}
                    <img
                      src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                      alt="a"
                      srcset=""
                    />
                  </div>
                  <div className="notaFilme">
                    <span>{film.vote_average}</span>
                  </div>
                </SwiperSlide>
              ))}
              ...
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}
