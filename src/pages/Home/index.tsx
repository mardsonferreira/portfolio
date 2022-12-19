import { Profile } from "../../components/Profile";
import { PersonalInfo } from "../../components/PersonalInfo";

import {
    Container,
    LeftSide,
    ProjectHeader,
    ProjectHeaderLink,
    ProjectHeaderTitle,
    RightSide,
} from "./styles";
import { TechCards } from "../../components/TechCard";

export function Home() {
    return (
        <Container>
            <LeftSide>
                <Profile />

                <PersonalInfo />

                <TechCards />
            </LeftSide>

            <RightSide>
                <ProjectHeader>
                    <ProjectHeaderTitle>My Projects</ProjectHeaderTitle>

                    <ProjectHeaderLink>See All</ProjectHeaderLink>
                </ProjectHeader>
            </RightSide>
        </Container>
    );
}
