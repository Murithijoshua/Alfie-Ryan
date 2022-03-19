import styled from "styled-components";

export const HorizontalHeading = styled('h2')`
h2 {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
}

h2:before,
h2:after {
    content: '';
    border-top: 2px solid;
    margin: 0 20px 0 0;
    flex: 1 0 20px;
}

`