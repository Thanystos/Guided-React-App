import styled from 'styled-components'
import { Container } from '../../globalStyles'

// Ici, Nav n'est utilisé qu'une fois
export const Nav = styled.nav`
    background-color: #101522;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`

// Contrairement au container qui sera utile autre part aussi. Du coup il est défini dans globalstyles
// On reprend ses règles Css auquelles on ajoute celles qu'on définit aux lignes suivantes
export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${Container}
`