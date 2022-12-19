import { Container, PersonalInfoCard, PersonalInfoTitle } from "./styles";

import { ReactComponent as MapIcon } from "../../assets/map-pin.svg";
import { ReactComponent as BriefCaseIcon } from "../../assets/briefcase.svg";
import { ReactComponent as GithubIcon } from "../../assets/github.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/linkedin.svg";
import { ReactComponent as MailIcon } from "../../assets/mail.svg";

export function PersonalInfo() {
    const personalInfos = [
        { id: 1, icon: <MapIcon color="#83739f" />, text: "Brazil" },
        {
            id: 2,
            icon: <BriefCaseIcon color="#83739f" />,
            text: "HeavyConnect",
        },
        {
            id: 3,
            icon: <GithubIcon color="#83739f" />,
            text: "mardsonferreira",
        },
        {
            id: 4,
            icon: <LinkedinIcon color="#83739f" />,
            text: "mardsonferreira",
        },
        {
            id: 5,
            icon: <MailIcon color="#83739f" />,
            text: "mardsonferreira25@gmail.com",
        },
    ];

    return (
        <Container>
            {personalInfos.map((personalInfo) => (
                <PersonalInfoCard key={personalInfo.id}>
                    {personalInfo.icon}
                    <PersonalInfoTitle>{personalInfo.text}</PersonalInfoTitle>
                </PersonalInfoCard>
            ))}
        </Container>
    );
}
