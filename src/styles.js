import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #AAAAAA;

    display: flex;
    align-items: center;
    justify-content:center;
`

export const Content = styled.div`
    background-color: #FFFFFF;
    width: 50%;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Row2 = styled.div`
    display: flex;
    flex-direction: Column;
    justify-content: space-between;
    align-items: left;
    width:75%;
`
export const Column = styled.div`
    display: flex;
    flex-direction: Row;
    justify-content: space-between;
    align-items: center;
    width:33.3%;
    height: 100%;
`

export const Column2 = styled.div`
    display: flex;
    flex-direction: Row;
    justify-content: space-between;
    align-items: center;
    width:66.7%;
    height: 100%;
`