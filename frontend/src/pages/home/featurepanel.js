import React from "react";
import styled from "styled-components";

import { MdCloudQueue, MdNoteAdd, MdFileUpload } from "react-icons/md"

const PanelGrid = styled.section`
    height: 35rem;
    padding: 2rem;
    display: grid;
    height: fit-content;
    grid-template: 15% / repeat(3, 1fr);
`;

const PanelTitle = styled.h1`
    margin: 20px auto;
    text-align: center;
    font-weight: normal;
    font-size: 2rem;
    text-transform: uppercase;
    width: 70%;
    @media (max-width: 768px) {
        width: 80%;
    }
    color: #7209B7;
    grid-area: 1 / 1 / span 1 / span 3;
`;

const PanelCards = styled.div`
    grid-area: 2 / 1 / span 1 / span 3;
    display: flex;
    justify-content: space-between;
    height: fit-content;
    margin-top: 40px;
    @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 0;
    }
`;

const PanelCard = styled.div`
    text-align: center;
    padding: 30px;
    height: fit-content;
`;

const PanelCardTitle = styled.h3`
    margin-bottom: 20px;
    color: black;
`;

const PanelCardText = styled.p`
    width: 60%;
    margin: 0 auto;
`;

const FeaturePanel = () => {
    return (
        <PanelGrid>
            <PanelTitle>Start your project with the complete Machine learning package</PanelTitle>
            <PanelCards>    
                <PanelCard>
                    <MdNoteAdd fontSize="12rem" color="#4554de"/>
                    <PanelCardTitle>Notebooks</PanelCardTitle>
                    <PanelCardText>On-demand cloud-powered Jupyter notebook</PanelCardText>
                </PanelCard>

                <PanelCard>
                    <MdCloudQueue fontSize="12rem" color="#65aedb"/>
                    <PanelCardTitle>Cloud ML</PanelCardTitle>
                    <PanelCardText>Training your Machine Learning model on the cloud</PanelCardText>
                </PanelCard>

                <PanelCard>
                    <MdFileUpload fontSize="12rem" color="#5ad5ed"/>
                    <PanelCardTitle>Deployment</PanelCardTitle>
                    <PanelCardText>On-click deployment. Train once - Use anywhere</PanelCardText>
                </PanelCard>
            </PanelCards>
        </PanelGrid>
    );
};

export default FeaturePanel;