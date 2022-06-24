import { Wrapper, SideBarLayout, GridContentLayout } from './styled';
import { Sidebar } from '../Sidebar';

export const Layout = () => {
    return (
        <Wrapper>
            <SideBarLayout>
                <Sidebar />
            </SideBarLayout>
            <GridContentLayout>

            </GridContentLayout>
        </Wrapper>
    )
}

