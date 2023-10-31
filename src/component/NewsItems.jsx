import styled from "styled-components";

const NewsItemBlock = styled.div`
    display: flex;
    .thumnail {
        margin-left: 1em;
        img {
            display: block;
            width: 160px;
            height: 100px;
            object-fit: cover;
            margin-right: 10px;
        }
    }
    .contents {
        h2 {
            margin: 0;
            a {
                color: black;
            }
        }
        p {
            margin: 0;
            line-height: 1.5;
            margin-top: .5rem;
            white-space: normal;
        }
    }
    & + & {
         margin-top: 3em;
        }
`;

const NewsItem = ({article}) => {
    const { title, description, url, urlToImage } = article;
    return (
        <NewsItemBlock>
            { urlToImage && (
                <div className="thumnail">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={urlToImage} alt="썸네일"/>
                    </a>
                </div>
            )}
            <div className="contents">
                <h2>
                    <a href={url} target="_black" rel="noopener noreferrer">{title}</a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemBlock>
    );
};

export default NewsItem;