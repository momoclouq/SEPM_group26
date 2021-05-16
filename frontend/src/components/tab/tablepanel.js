import React from "react";


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            >
            {value === index && (
                <React.Fragment>
                {
                    children
                }
                </React.Fragment>
            )}
        </div>
    );
}

export default TabPanel;