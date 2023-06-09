import styled from "styled-components";

export const Container = styled.div<{openMenu : boolean}>`
min-width:100%;
display: grid;
grid-template-columns: ${({openMenu})=> openMenu? 'repeat(4, 1fr);' : 'repeat(5, 1fr);'};
justify-items: flex-end;
column-gap: 20px;
row-gap: 20px;`;

export const ShortsContainer = styled.div<{openMenu : boolean}>`
width:100%;
max-width:1800px;
display: grid;
grid-template-columns: ${({openMenu})=> openMenu? 'repeat(8, 1fr);' : 'repeat(10, 1fr);'};
column-gap: 20px;
row-gap: 20px;
overflow-x:auto;`;




