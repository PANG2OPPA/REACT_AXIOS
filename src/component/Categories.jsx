import styled, { css } from "styled-components";
const categories = [
    {
        name : 'all',
        text : '전체보기'
    },
    {
        name : 'business',
        text : '비지니스'
    },
    {
        name : 'entertainment',
        text : '엔터'
    },
    {
        name : 'health',
        text : '건강'
    },
    {
        name : 'sports',
        text : '스포츠'
    },
    {
        name : 'technology',
        text : '기술'
    },
];

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width:768px) {
        width: 100%;
        overflow-x: auto;
    }
`;
const Category = styled.div`
    font-size: 1.125em;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    padding-bottom: .25rem;
    &:hover {
        color: #435057;
    }
    ${props => props.active && css`
        font-weight: 600;
        border-bottom: 2px solid #22bbcf;
        color: #22b8cf;
        &:hover {
            color: #3bc9db;
        }
    `}
    & + & {
        margin-left: 1rem;
    }
`;

const Categories = ({onSelect, category}) => {
    return (
        <CategoriesBlock>
            {categories.map (c => (
                <Category 
                key={c.name} 
                active={category === c.name} 
                onClick={()=>onSelect(c.name)}
                >{c.text}</Category>
            ))}
        </CategoriesBlock>
    );
};
export default Categories;