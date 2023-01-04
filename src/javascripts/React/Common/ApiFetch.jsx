import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const ApiFetch = () => {

    const [posts, setPosts] = useState([])
    const [posts2, setPosts2] = useState([])

    // useEffect(() => {
    //     // axios.get('https://jsonplaceholder.typicode.com/posts')
    //     // axios.get("https://rk-nihongo.com/wp-json/wp/v2/posts?_embed&per_page=10")
    //     axios.get("https://rk-nihongo.com/wp-json/wp/v2/posts/")
    //         .then(res => {
    //             setPosts(res.data)
    //         })
    // }, [])

    useEffect(() => {
        axios.get("https://rk-nihongo.com/wp-json/wp/v2/posts?_embed&per_page=3")
            .then(res => {
                setPosts2(res.data)
            })
    }, [])

    return (
        <div>

<h2 className="commonTitle API">BLOG</h2>
            <ul className="WordpressPost">
                {/* {
                    posts.map(post => <li key={post.id}> {post.title} </li>)

                    posts.map(post => <a key={post.id} href={post.link}>
                        <li > {post.title.render~ed}</li>
               
                    </a>
                    )
                } */}

                {
                    posts2.map(post =>
                        <li key={post.id}  className="WordpressPost__item"> 
                            <a key={post.id} href={post.link} className="WordpressPost__link">
                                <img key={post.id} src={post._embedded['wp:featuredmedia'][0].source_url} className="WordpressPost__img" />
                                <h3  className="WordpressPost__title">{post.title.rendered}</h3>

                                {/* <div>{post.date_gmt}</div> */}
                            </a>
                        </li>
                    )
                }
            </ul>

        </div>
    )
}

// export default ApiFetch