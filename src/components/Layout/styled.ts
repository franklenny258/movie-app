import styled from 'styled-components';
import { Colors } from '../../utils/colors';

export const Wrapper = styled.div`
    display: flex;
    height: 100%;
`;

export const SideBarLayout = styled.nav`
    flex: 1;
    background-color: ${Colors.darkPurple};
`;

export const GridContentLayout = styled.aside`
    flex: 5;
    background-color: ${Colors.darkLightPurple};
`;