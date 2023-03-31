import styled from "styled-components";

export const Container = styled.div<{openMenu : boolean}>`
min-width:100%;
display: grid;
grid-template-columns: ${({openMenu})=> openMenu? 'repeat(4, 1fr);' : 'repeat(5, 1fr);'};
column-gap: 20px;
row-gap: 20px;`;

export const ShortsContainer = styled.div<{openMenu : boolean}>`
width:100%;
max-width:1800px;
display: flexbox;
flex-direction: row;
column-gap: 20px;
row-gap: 20px;
overflow-x:auto;`;




