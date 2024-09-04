import React, { useEffect } from 'react'
import './style.css'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import { useSelector, useDispatch } from 'react-redux'
import { GetAllDisorder } from '../../Redux/Slices/PostmenuSlice'
import {Link} from 'react-router-dom'

const Jahan = () => {

    const dispatch = useDispatch()
    const disorder = useSelector((state) => state.post.AllDisorder)
    useEffect(() => {
        dispatch(GetAllDisorder())
    }, [])

    return (
        <div>
            <Header />
            <main id="main">
                {
                    disorder && disorder.map((item) => {
                        return (
                            <div className="movie" key={item._id}>
                                <Link to={`singlepage/${item._id}`}>
                                <img src={`http://localhost:3000/${item.coverImage}`} />
                                <div className="movie-info">
                                    <h3>{item.title}</h3>
                                    <span className="${getClassByRate(vote_average)}">{item.rating}</span>
                                </div>
                                <div className="overview">
                                    <h3>Stars</h3>
                                    {item.starring}
                                </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </main>
            <Footer />
        </div>
    )
}

export default Jahan