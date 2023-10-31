import styled from "styled-components";
import NewsItem from "./NewsItems";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3em ;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-widht: 768px){
        width: 100px;
        padding-left: 1em;
        padding-right: 1em;
    }
`;


const NewsList =({ category })=>{
    const [articles,setArticles] = useState(null);
    const [loding,setLoding] =useState(false);

    useEffect (()=>{
        const fetchData=async()=>{ // 내부에서 따로 함수를 만들어야함
            setLoding(true);
            try{
                const query = category === "all" ? "all" : `category=${category}`;
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&${query}&apiKey=336fab0a13b54c559990999a38019ef6`); //
                setArticles(response.data.articles);
            }catch(e){
                console.log(e);
            }
            setLoding(false);
        }; 
        fetchData(); // 함수를 호출하여 따로 실행해야함 
    },[category]);

    if(loding){
        return <Loading/>
    }

    return(
        <NewsListBlock>
            {articles && articles.map(article =>(
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    );
};

export default NewsList;