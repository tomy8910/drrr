import styled from 'styled-components'

export const MainH1 = styled.h1`
  font-size: 3.157rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  font-variant: small-caps;
  text-transform: lowercase;
`

export const MainH2 = styled.h2`
  font-size: 2.369rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`
export const MainH3 = styled.h3`
  font-size: 1.777rem;
  font-weight: 500;
  margin-bottom: ${props => (props.down ? '1rem' : '0.25rem')};
`

export const MainH4 = styled.h4`
  font-size: 1.333rem;
  font-weight: 500;
`

export const Paragraph = styled.p`
  max-width: 720px;
  line-height: 1.5;
  margin-bottom: 1rem;
  font-weight: 300;
`

export const MainUL = styled.ul`
  list-style: square inside none;
  width: 720px;
  margin-bottom: 0.5rem;
  font-weight: 300;

  li {
    padding: 3px 0;
  }

  ul {
    padding-left: 1rem;
    list-style: square inside none;
    font-size: 1.125rem;
  }
`

export const Sign = styled.div`
  margin-bottom: 15px;
`

export const PreparednessDiv = styled.div`
  margin-bottom: 0.85rem;
`
